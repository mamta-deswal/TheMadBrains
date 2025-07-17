import React from 'react';

const Worked = () => {
  return (
    <div className="relative z-10 px-8 py-16 mt-16 bg-white">
      {/* Custom CSS for scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-orange-600  mb-2 font-bold text-3xl">TRUSTED CLIENTS</p>
          <h2 className="text-3xl font-bold text-white mb-4">
            Firms Who Relied On Us & Got The Best Results
          </h2>
        </div>

        {/* Sliding Client Logos */}
        <div className="relative mb-16">
          <div className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-red-500/50">
            <div className="overflow-hidden">
              <div className="flex animate-scroll space-x-12 items-center">
                {/* Client logos - duplicated for seamless scrolling */}
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex space-x-12 items-center">
                    <div className="flex items-center space-x-3 text-green-400 font-bold text-xl whitespace-nowrap">
                      <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">J</span>
                      </div>
                      <span>JustWizard</span>
                    </div>
                    <div className="text-gray-400 font-bold text-xl whitespace-nowrap">
                      Prograd
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 font-bold text-xl whitespace-nowrap">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-black text-sm">A</span>
                      </div>
                      <span>ARCHSIXO</span>
                    </div>
                    <div className="text-orange-400 font-bold text-xl whitespace-nowrap">
                      BRIOLINE
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Award Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              platform: "Clutch",
              color: "border-red-500 text-red-400",
              bgColor: "bg-red-500/10",
              logo: "C"
            },
            { 
              platform: "Dribbble",
              color: "border-pink-500 text-pink-400",
              bgColor: "bg-pink-500/10",
              logo: "D"
            },
            { 
              platform: "Upwork",
              color: "border-green-500 text-green-400",
              bgColor: "bg-green-500/10",
              logo: "Up"
            },
            { 
              platform: "Behance",
              color: "border-blue-500 text-blue-400",
              bgColor: "bg-blue-500/10",
              logo: "Be"
            }
          ].map((award, index) => (
            <div key={index} className={`${award.bgColor} ${award.color} border-2 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300`}>
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className={`w-16 h-16 ${award.bgColor} rounded-full flex items-center justify-center border-2 ${award.color}`}>
                    <span className="font-bold text-lg">{award.logo}</span>
                  </div>
                  {/* Laurel wreaths */}
                  <div className="absolute -left-2 -top-2 text-yellow-400 text-2xl">🏆</div>
                  <div className="absolute -right-2 -top-2 text-yellow-400 text-2xl">🏆</div>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Top Design</h3>
              <p className="text-sm opacity-80">company 2024</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Worked;