import React from 'react';

const OurWork = () => {
  const projects = [
    {
      image: (
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">ALL NEW</h3>
            <h3 className="text-2xl font-bold mb-6">DESIGN</h3>
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium inline-block">
              SUMMER BOARD
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
            <span>"As close to an anti-gravity board as you can get!"</span>
          </div>
          <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-xs">
            <span>engadget</span>
            <span>gizmo</span>
          </div>
        </div>
      ),
      percentage: '40%',
      description: 'Conversion Rate Increase'
    },
    {
      image: (
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-4 relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-gray-600 text-sm">miishly</div>
            <div className="flex gap-1 ml-auto">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            </div>
          </div>
          <div className="flex gap-2 mb-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full"></div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-yellow-200 to-pink-200 rounded-lg p-4 text-center">
            <div className="text-sm font-medium mb-2">Join Our</div>
            <div className="text-lg font-bold">Christmas List</div>
          </div>
          <div className="mt-4 text-center">
            <div className="text-xs text-gray-500">Shop our hand-picked gems</div>
          </div>
        </div>
      ),
      percentage: '38%',
      description: 'Conversion Rate Increase'
    },
    {
      image: (
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-4 text-white text-center">
            <div className="text-sm font-medium">TO 14 DECEMBER</div>
            <div className="text-xl font-bold">FESTIVE</div>
            <div className="text-xl font-bold">GLOW</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-center">
              <div className="w-8 h-8 bg-black rounded-full"></div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-center">
              <div className="w-8 h-8 bg-black rounded-full"></div>
            </div>
          </div>
          <div className="text-center text-xs text-gray-500">
            Shop Collections and Offers
          </div>
        </div>
      ),
      percentage: '47%',
      description: 'Conversion Rate Increase'
    },
    {
      image: (
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold">Himalayan Treks</h3>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="bg-black bg-opacity-30 rounded-lg p-3 mb-3">
            <div className="text-xs mb-1">Go on! Let our unforgettable</div>
            <div className="text-xs mb-1">Himalayan Experience camping</div>
            <div className="text-xs">With Us!</div>
            <div className="flex items-center gap-1 mt-2">
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
              <span className="text-xs">4.9</span>
            </div>
          </div>
          <div className="flex gap-1 text-xs mb-3">
            <span>ANI</span>
            <span>ABHA</span>
          </div>
          <div className="text-xs mb-3">Recommended Treks</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white bg-opacity-20 rounded p-2">
              <div className="text-xs">Everest Base Camp</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded p-2">
              <div className="text-xs">Annapurna Circuit</div>
            </div>
          </div>
        </div>
      ),
      percentage: '60%',
      description: 'Conversion Rate Increase'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-medium mb-2">Our Work</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Our Work Speaks for Itself
          </h1>
          
          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">450+ Projects Are Completed</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
              <span className="text-gray-700">
                <span className="font-bold">4.8+</span> Given By Our Clients
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Quality and Trusted Work</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Project Image/Design */}
              <div className="mb-6 h-64">
                {project.image}
              </div>
              
              {/* Stats */}
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  {project.percentage}
                </div>
                <div className="text-gray-600 text-sm">
                  {project.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;