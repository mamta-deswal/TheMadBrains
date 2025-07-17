import React, { useState } from 'react';

const TechTools = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqData = [
    {
      question: "How do you approach a new design and development project?",
      answer: "We start by understanding your goals and target audience, followed by research and brainstorming. We create wireframes and prototypes, gather feedback, and iteratively develop the final design, ensuring it meets your needs. We remain in touch with you constantly so you are up-to-date and the final product is what you envisioned."
    },
    {
      question: "Can you assist with digital marketing and SEO for my website?",
      answer: "Yes, we provide comprehensive digital marketing services including SEO optimization, content marketing, social media management, and PPC campaigns to help your website rank higher and attract more visitors."
    },
    {
      question: "What is the cost of design and development services at the Mad brains?",
      answer: "Our pricing depends on the scope and complexity of your project. We offer competitive rates and flexible packages. Contact us for a detailed quote based on your specific requirements."
    },
    {
      question: "Will my website be mobile-friendly and responsive?",
      answer: "Absolutely! All our websites are designed to be fully responsive and mobile-friendly, ensuring optimal user experience across all devices and screen sizes."
    },
    {
      question: "Can you help me design and develop my website from scratch?",
      answer: "Yes, we specialize in creating custom websites from the ground up. Our team handles everything from initial concept and design to development, testing, and deployment."
    }
  ];

  const FAQSection = () => (
    <div className="space-y-4">
      {faqData.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 pb-4">
          <button
            onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
            className="w-full text-left flex items-center justify-between py-4 hover:text-blue-600 transition-colors duration-200"
          >
            <span className="text-lg font-semibold text-gray-900 pr-4">
              {faq.question}
            </span>
            <span className="text-2xl text-gray-400 flex-shrink-0">
              {openFAQ === index ? '−' : '+'}
            </span>
          </button>
          {openFAQ === index && (
            <div className="pb-4 text-gray-600 leading-relaxed animate-fade-in">
              {index === 0 ? (
                <div className="bg-gray-800 text-white p-6 rounded-2xl relative">
                  <button 
                    onClick={() => setOpenFAQ(-1)}
                    className="absolute top-4 right-4 text-red-400 hover:text-red-300 text-xl"
                  >
                    ×
                  </button>
                  <p className="text-gray-200 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ) : (
                <p>{faq.answer}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
  const designingTools = [
    { name: 'Figma', icon: '🎨', color: 'bg-purple-500' },
    { name: 'Sketch', icon: '💎', color: 'bg-yellow-500' },
    { name: 'Messenger', icon: '💬', color: 'bg-blue-500' },
    { name: 'Notion', icon: '📝', color: 'bg-gray-800' },
    { name: 'Android Studio', icon: '🤖', color: 'bg-green-500' },
    { name: 'Adobe XD', icon: '🎯', color: 'bg-pink-500' },
    { name: 'Photoshop', icon: '🖼️', color: 'bg-blue-600' },
    { name: 'Illustrator', icon: '🎪', color: 'bg-orange-500' }
  ];

  const developmentTools = [
    { name: 'VS Code', icon: '💻', color: 'bg-blue-600' },
    { name: 'Shopify', icon: '🛍️', color: 'bg-green-600' },
    { name: 'HTML5', icon: '🌐', color: 'bg-orange-500' },
    { name: 'Linux', icon: '🐧', color: 'bg-yellow-500' },
    { name: 'GitHub', icon: '🐙', color: 'bg-gray-800' },
    { name: 'WordPress', icon: '📰', color: 'bg-blue-500' },
    { name: 'Reddit', icon: '🔥', color: 'bg-orange-600' },
    { name: 'Tumblr', icon: '📱', color: 'bg-indigo-500' }
  ];

  const ToolIcon = ({ tool }) => (
    <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center text-white text-xl hover:scale-110 transition-transform duration-200 cursor-pointer shadow-lg`}>
      {tool.icon}
    </div>
  );

  const PersonIcon = ({ color }) => (
    <div className="flex items-center mb-6">
      <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mr-4`}>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
          💡
        </div>
        <div className="w-6 h-6 bg-gray-300 rounded"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Tech & Tools
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Advanced Tech & Tools Capable For<br />
            Your Success
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Designing Tools Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Designing Tools</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              The Designing Tools We Use Empower Creativity And Precision, Enabling Designers To Craft Visually Stunning And User-Friendly Interfaces. With Advanced Features For Wireframing, Prototyping, And Collaborative Design, These Tools Streamline The Creative Process, Ensuring That Ideas Come To Life Seamlessly And Efficiently.
            </p>
            
            <div className="flex items-start">
              <PersonIcon color="bg-red-500" />
              <div className="ml-8 grid grid-cols-4 gap-4">
                {designingTools.map((tool, index) => (
                  <ToolIcon key={index} tool={tool} />
                ))}
              </div>
            </div>
          </div>

          {/* Development Tools Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Development Tools</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our Set Of Development Tools Provides Robust Frameworks And Resources For Building Scalable, High-Performance Applications. From Code Editors To Version Control Systems, These Tools Support Efficient Coding, Debugging, And Deployment, Enabling Developers To Turn Complex Ideas Into Functional, Reliable Software Solutions Quickly.
            </p>
            
            <div className="flex items-start">
              <PersonIcon color="bg-yellow-500" />
              <div className="ml-8 grid grid-cols-4 gap-4">
                {developmentTools.map((tool, index) => (
                  <ToolIcon key={index} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* FAQ Content */}
            <div>
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                FAQ's
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              
              <FAQSection />
            </div>

            {/* Right side with image and CTA */}
            <div className="flex flex-col items-center">
              {/* Woman with question mark illustration */}
              <div className="relative mb-8">
                <div className="w-80 h-80 bg-gray-100 rounded-full flex items-center justify-center relative overflow-hidden">
                  {/* Woman illustration */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-40 bg-yellow-400 rounded-t-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-orange-300 rounded-full mb-8"></div>
                    </div>
                  </div>
                  
                  {/* Question mark */}
                  <div className="absolute top-8 right-8 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-bold text-gray-800">?</span>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-red-500 text-white p-8 rounded-full max-w-md text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Have More Queries? Ask Us</h3>
                <p className="text-red-100 mb-6 text-sm leading-relaxed">
                  If you have any more queries or would like to discuss things before stepping ahead, we would love to hear and satisfy you in every aspect. Contact us and let us know how we can assist you!
                </p>
                
                <button  className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center mx-auto">
                  <span  className="mr-2">💬</span>
                  Shoot Your Questions/Comments
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechTools;