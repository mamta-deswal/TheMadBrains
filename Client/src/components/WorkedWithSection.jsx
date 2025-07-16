import React from 'react';

const WorkedWithSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className=" mb-12">
          <p className="text-gray-600 text-sm font-medium tracking-wider uppercase mb-2">
            Worked With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Firms Who Relied <br />
            On  Us & <br />
            Got The Best Results
          </h2>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap j items-center gap-8 mb-16">
          <div className="flex items-center">
            <span className="text-green-500 text-2xl font-bold">🥕</span>
            <span className="text-green-500 text-2xl font-bold ml-1">instacart</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-sm">🌊</span>
            </div>
            <span className="text-blue-500 text-2xl font-bold">JustWravel</span>
          </div>
          <div className="text-green-600 text-2xl font-bold">
            proaraad
          </div>
          <div className="text-gray-800 text-2xl font-bold">
            TANISHQ
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Team Photo */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="w-full h-full bg-cover bg-center" style={{
                backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxjaXJjbGUgY3g9IjgwIiBjeT0iODAiIHI9IjI1IiBmaWxsPSIjNjM2NjZkIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjgwIiByPSIyNSIgZmlsbD0iIzYzNjY2ZCIvPgo8Y2lyY2xlIGN4PSIyMjAiIGN5PSI4MCIgcj0iMjUiIGZpbGw9IiM2MzY2NmQiLz4KPHN2Zz4=')"
              }}>
                <div className="flex items-center justify-center space-x-4 pt-8">
                  <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                  <div className="w-12 h-12 bg-yellow-500 rounded-full"></div>
                  <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                </div>
                <p className='text-center py-13.5'>Hi I'm Associate <br /> Software Developer</p>
                {/* <img src="./exclusiveOfferCardImg1.png" alt="picture" /> */}
              </div>
            </div>
          </div>

          {/* Card 2 - Happy Family */}
          <div className="bg-gray-900 rounded-3xl p-8 text-white flex flex-col justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mb-6 flex items-center justify-center">
              <span className="text-2xl">💖</span>
            </div>
            <h3 className="text-4xl font-bold mb-2">11K+</h3>
            <p className="text-gray-300 text-center">Happy Family Globally</p>
          </div>

          {/* Card 3 - Meeting Photo */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
              <div className="w-full h-full bg-cover bg-center" style={{
                backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiM2MzY2NmQiIHJ4PSI4Ii8+CjxjaXJjbGUgY3g9IjgwIiBjeT0iMTcwIiByPSIxNSIgZmlsbD0iIzYzNjY2ZCIvPgo8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNzAiIHI9IjE1IiBmaWxsPSIjNjM2NjZkIi8+CjxjaXJjbGUgY3g9IjIyMCIgY3k9IjE3MCIgcj0iMTUiIGZpbGw9IiM2MzY2NmQiLz4KPHN2Zz4=')"
              }}>
                <div className="flex items-center justify-center h-full">
                  <div className="bg-blue-500 w-32 h-20 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🗺️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 - Countries */}
          <div className="bg-green-200 rounded-3xl p-8 flex flex-col justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-white rounded-full mb-6 flex items-center justify-center">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">120+</h3>
            <p className="text-gray-700 text-center">Countries We Covered</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {/* Card 5 - Yellow */}
          <div className="bg-yellow-300 rounded-3xl p-8 flex flex-col justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-white rounded-full mb-6 flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">5★</h3>
            <p className="text-gray-700 text-center">Average Rating</p>
          </div>

          {/* Card 6 - Feedback */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="bg-blue-500 w-48 h-32 rounded-lg flex items-center justify-center relative">
                <div className="bg-white w-40 h-24 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    </div>
                    <div className="text-xs text-gray-600">FEEDBACK</div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 7 - Success Rate */}
          <div className="bg-red-400 rounded-3xl p-8 flex flex-col justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-white rounded-full mb-6 flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
            <p className="text-white text-center">Satisfaction Guaranteed To Clients</p>
          </div>

          {/* Card 8 - Team Photo 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
                <div className="w-16 h-16 bg-green-500 rounded-full"></div>
                <div className="w-16 h-16 bg-purple-500 rounded-full"></div>
              </div>
            {/* <img className='' src="./exclusiveOfferCardImg1.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkedWithSection;
