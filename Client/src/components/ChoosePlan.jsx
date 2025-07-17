export default function ChoosePlan() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12 bg-white">
        <p className="text-blue-600 text-sm font-medium mb-2">Why Choose Our Plan</p>
        <h1 className="text-4xl font-bold text-black mb-4">
          Why Select Our Subscription UX Design Services?
        </h1>
        <p className="text-black text-lg max-w-2xl mx-auto">
          We are an always-on design team and not just a design agency for you. Here's why businesses like working with us:
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Feature 1 */}
        <div className="bg-gray-300 p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Flat Fees, No Surprises
          </h3>
          <p className="text-gray-600 leading-relaxed">
            No surprise bills. One simple low monthly fee, and unlimited UX design whatever change you need, from small updates to comprehensive new designs. We got you covered.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-300 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ultra-Fast Turnaround
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Normally, the results are delivered within 48 hours. Our subscription-based UX design ensures one never misses a deadline no matter how complex the work is.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-300 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Unlimited Revisions, Your Satisfaction First
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Not satisfied? No problem. With unlimited design revisions, we'll iterate until the design perfectly fits your vision.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-gray-300 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Cancel or Pause Anytime
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Business isn't static, and neither is ours. Cancel or put your subscription on hold at any time with zero hassle.
          </p>
        </div>
      </div>
    </div>
  );
}