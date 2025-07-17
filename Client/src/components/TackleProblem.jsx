import React from 'react';

const TackleProblem = () => {
  const problems = [
    {
      image: (
        <div className="bg-gray-800 rounded-lg p-4 h-48 relative">
          <div className="text-white text-sm mb-4">Website</div>
          <div className="text-white text-xs mb-2">User Review: 4.3</div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-20 h-2 bg-gray-600 rounded"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-16 h-2 bg-gray-600 rounded"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-24 h-2 bg-gray-600 rounded"></div>
            </div>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
              <span className="text-green-500 font-bold text-lg">4.3</span>
            </div>
          </div>
        </div>
      ),
      title: 'Unclear Subscription UX Design Flow',
      description: 'Confusing or poorly structured subscription flows often result in user drop-offs and lost revenue. To address this problem, many businesses focus on creating intuitive, streamlined subscription-based UX design that leads users effectively from start to finish.'
    },
    {
      image: (
        <div className="bg-gray-800 rounded-lg p-4 h-48 relative">
          <div className="text-white text-sm mb-4">Design</div>
          <div className="space-y-3">
            <div className="bg-gray-700 rounded p-2">
              <div className="w-full h-2 bg-gray-600 rounded mb-1"></div>
              <div className="w-3/4 h-2 bg-gray-600 rounded"></div>
            </div>
            <div className="bg-gray-700 rounded p-2">
              <div className="w-full h-2 bg-gray-600 rounded mb-1"></div>
              <div className="w-2/3 h-2 bg-gray-600 rounded"></div>
            </div>
            <div className="bg-gray-700 rounded p-2">
              <div className="w-full h-2 bg-gray-600 rounded mb-1"></div>
              <div className="w-4/5 h-2 bg-gray-600 rounded"></div>
            </div>
          </div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      ),
      title: 'Inconsistent Subscription Page UI Design',
      description: 'Creating a subscription page UI design can be a hard task as it requires balancing aesthetics and functionality. Inconsistent designs can confuse users and interface frustrates users, making them less likely to convert from non-paying to paying customers.'
    },
    {
      image: (
        <div className="bg-gray-800 rounded-lg p-4 h-48 relative">
          <div className="bg-gray-700 rounded-lg p-3 mb-3">
            <div className="text-white text-xs mb-2">Mobile App</div>
            <div className="space-y-2">
              <div className="w-full h-2 bg-gray-600 rounded"></div>
              <div className="w-3/4 h-2 bg-gray-600 rounded"></div>
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="text-white text-xs">Connected</div>
            </div>
            <div className="w-full h-2 bg-gray-600 rounded"></div>
          </div>
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      ),
      title: 'Mobile-First Subscription Plan UI Design Issues',
      description: 'Creating a subscription plan UI design for mobile-first requires a great deal of time and expertise. Mobile interfaces have responsive and clean journey, and to coordinate all design elements to render them appealing and user-friendly can be a challenge of their desired audience.'
    },
    {
      image: (
        <div className="bg-gray-800 rounded-lg p-4 h-48 relative">
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="w-full h-8 bg-gray-700 rounded"></div>
            <div className="w-full h-8 bg-gray-700 rounded"></div>
            <div className="w-full h-8 bg-gray-700 rounded"></div>
            <div className="w-full h-8 bg-gray-700 rounded"></div>
            <div className="w-full h-8 bg-gray-700 rounded"></div>
            <div className="w-full h-8 bg-gray-700 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            </div>
            <div className="w-full h-2 bg-gray-600 rounded"></div>
            <div className="w-3/4 h-2 bg-gray-600 rounded"></div>
          </div>
        </div>
      ),
      title: 'Limited Resources for UX Design Subscription Services',
      description: 'Small businesses or start-ups lack the necessary resources to invest in top-tier UX design subscription services. This resource constraint can be both financial and in terms of time, and the designs usually are inferior and not scaled or effective, thus hindering business growth and unable to design subscription model.'
    },
    {
      image: (
        <div className="bg-gray-800 rounded-lg p-4 h-48 relative">
          <div className="text-white text-sm mb-4">Dashboard Experience</div>
          <div className="space-y-2 mb-4">
            <div className="bg-gray-700 rounded p-2">
              <div className="w-full h-2 bg-gray-600 rounded"></div>
            </div>
            <div className="bg-gray-700 rounded p-2">
              <div className="w-2/3 h-2 bg-gray-600 rounded"></div>
            </div>
            <div className="bg-gray-700 rounded p-2">
              <div className="w-4/5 h-2 bg-gray-600 rounded"></div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      ),
      title: 'Slow or Inefficient Iterations in Subscription-Based UX Design',
      description: 'Long turnaround times and too late iterations in subscription-based UX design can hinder business growth. inefficient design releases may struggle to iterate quickly and bring their subscription UI design experiences to market, resulting in missed opportunities and slower business.'
    },
    {
      image: (
        <div className="bg-gray-800 rounded-lg p-4 h-48 relative">
          <div className="space-y-3 mb-4">
            <div className="w-full h-2 bg-gray-600 rounded"></div>
            <div className="w-3/4 h-2 bg-gray-600 rounded"></div>
            <div className="w-4/5 h-2 bg-gray-600 rounded"></div>
          </div>
          <div className="text-white text-xs mb-2">Dashboard UI</div>
          <div className="bg-gray-700 rounded p-2">
            <div className="w-full h-2 bg-gray-600 rounded mb-1"></div>
            <div className="w-2/3 h-2 bg-gray-600 rounded"></div>
          </div>
          <div className="absolute bottom-4 right-4 bg-green-500 rounded px-2 py-1">
            <span className="text-white text-xs">Premium Available</span>
          </div>
        </div>
      ),
      title: 'Lack of Premium Subscription UI Design Standards',
      description: 'High-end services demand a very premium, professional look, but many issues with subscription UI design lack the refined standards expected by clients. This may be unable to design a premium subscription UI design that reflects quality and sophistication that businesses.',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-medium mb-2">Tackle Problems</p>
          <h1 className="text-4xl font-bold text-white mb-4">
            Problems We Can Tackle
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our UI/UX subscription services are designed to address common pain points businesses and 
            development teams face. We can help you overcome all key problems.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
              {/* Problem Illustration */}
              <div className="mb-6">
                {problem.image}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                {problem.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TackleProblem;