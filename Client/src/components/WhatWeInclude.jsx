import React from 'react';

const WhatWeInclude = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-medium mb-2">What We Include</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What's Included in Your Subscription Plan?
          </h1>
          <p className="text-gray-600 text-lg">
            Unlock a wealth of design expertise when you subscribe. Here's what you'll get:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Full Product Strategy */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="mb-6">
              <div className="relative">
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded"></div>
                    <span className="text-gray-700 font-medium">Wireframes</span>
                  </div>
                </div>
                <div className="bg-gray-900 text-white rounded-lg px-4 py-2 text-sm inline-block">
                  prototyping
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Full Product Strategy
            </h3>
            <p className="text-gray-600">
              From wireframes to prototypes, we will map out your design journey
            </p>
          </div>

          {/* Custom UI Designs */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-4 space-y-3">
                <div className="flex gap-3">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="w-full h-2 bg-gray-300 rounded"></div>
                    <div className="w-3/4 h-2 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="w-full h-2 bg-gray-300 rounded"></div>
                    <div className="w-2/3 h-2 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <div className="w-12 h-8 bg-gray-900 rounded"></div>
                <div className="bg-orange-500 text-white rounded-full px-3 py-1 text-xs">
                  NEW
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Custom UI Designs
            </h3>
            <p className="text-gray-600">
              Custom design for mobile and web on pixel-perfect designs
            </p>
          </div>

          {/* Direct Communication */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">Project Meetup</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">D</span>
                    </div>
                    <span className="text-sm text-gray-700">Designer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">C</span>
                    </div>
                    <span className="text-sm text-gray-700">Client</span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <div className="bg-orange-500 text-white rounded px-3 py-1 text-xs">1</div>
                    <div className="bg-gray-800 text-white rounded px-3 py-1 text-xs">2</div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Direct Communication
            </h3>
            <p className="text-gray-600">
              Work with your dedicated designer to receive quick feedback and alignment
            </p>
          </div>

          {/* Async Project Management */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="mb-3">
                  <h4 className="font-medium text-gray-900 mb-3">All Tasks</h4>
                  <div className="bg-orange-500 w-4 h-4 rounded-full flex items-center justify-center mb-3">
                    <span className="text-white text-xs">1</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-700">Task 01</span>
                    <div className="w-8 h-2 bg-gray-900 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-700">Task 1.1</span>
                    <div className="w-6 h-2 bg-gray-900 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-700">Task Management</span>
                    <div className="w-12 h-2 bg-gray-900 rounded"></div>
                  </div>
                </div>
                <div className="mt-4 w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-500 rounded"></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Async Project Management
            </h3>
            <p className="text-gray-600">
              All tasks are managed on a shared board, no unnecessary meetings, ever!
            </p>
          </div>

          {/* Seamless Developer Handoff */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="flex-1 space-y-2">
                      <div className="w-full h-2 bg-gray-300 rounded"></div>
                      <div className="w-3/4 h-2 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="flex-1 space-y-2">
                      <div className="w-full h-2 bg-gray-300 rounded"></div>
                      <div className="w-2/3 h-2 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="w-16 h-12 bg-white rounded border-2 border-gray-300 flex items-center justify-center">
                    <div className="text-xs text-gray-500">Code</div>
                  </div>
                  <div className="bg-orange-500 text-white rounded-full px-3 py-1 text-xs">
                    NEW
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Seamless Developer Handoff
            </h3>
            <p className="text-gray-600">
              Comprehensive and seamless handoffs from design to code.
            </p>
          </div>

          {/* CTA Card */}
          <div className="bg-gray-900 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Schedule a Free<br />Consultation
            </h3>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeInclude;