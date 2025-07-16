import React, { useState } from 'react';

export default function MadBrainsBlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "What Are the Best Strategies to Increase E-commerce Conversion Rates in 2025?",
      author: "Mad Brains Technologies",
      date: "05/27/2025",
      category: "E-commerce",
      excerpt: "Discover the most effective strategies to boost your e-commerce conversion rates in 2025...",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Real Estate Website Design Tips From Top Industry Professionals in Dubai",
      author: "Mad Brains Technologies",
      date: "05/27/2025",
      category: "Web Design",
      excerpt: "Learn from Dubai's top real estate professionals about creating stunning websites...",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Barbeque Nation: Serving a Seamless Experience with UX Audit...",
      author: "Mad Brains Technologies",
      date: "04/21/2025",
      category: "UX Design",
      excerpt: "How we helped Barbeque Nation improve their customer experience through UX auditing...",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Where Can You Buy and Sell Cryptocurrency Safely on a Trusted Platform?",
      author: "Mad Brains Technologies",
      date: "04/21/2025",
      category: "Cryptocurrency",
      excerpt: "A comprehensive guide to safe cryptocurrency trading platforms...",
      image: "/api/placeholder/400/300"
    }
  ];

  const categories = ['all', 'E-commerce', 'Web Design', 'UX Design', 'Cryptocurrency'];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleReadMore = (postId) => {
    alert(`Opening blog post ${postId}...`);
  };

  const handleSearch = () => {
    // Search functionality is handled by the filter above
  };

  // SVG Icons
  const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );

  // const PhoneIcon = () => (
  //   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
  //     <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
  //   </svg>
  // );

  // const WhatsAppIcon = () => (
  //   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
  //     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.687"/>
  //   </svg>
  // );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div>
                <img className='h-42 w-42' src="./Logo-1-508228.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 mt-20">
        {/* Page Title */}
        <div className="mb-8 flex">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-20">Blog & News</h1>
          <div className="flex-1 max-w-lg mx-8 mt-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Blog..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-12 py-2 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <SearchIcon />
                </button>
              </div>
            </div>  
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6 pt-10">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                post.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Featured Post Layout */}
              {post.featured ? (
                <div className="md:flex">
                  <div className="md:w-1/2 p-8 bg-gradient-to-br from-orange-50 to-pink-50 relative">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                      <div className="w-full h-full bg-gradient-to-br from-orange-200 to-pink-200 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-150"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 4V2C7 1.45 7.45 1 8 1S9 1.55 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.55 17 2V4H19C20.1 4 21 4.9 21 6V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V6C3 4.9 3.9 4 5 4H7ZM5 8V20H19V8H5ZM7 10H17V12H7V10Z"/>
                        </svg>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <button
                          onClick={() => handleReadMore(post.id)}
                          className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium"
                        >
                          Read Full Blog
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="w-80 h-48 bg-white rounded-xl shadow-lg p-4 relative">
                      <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="absolute top-4 right-8 w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="absolute top-4 right-12 w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="mt-8 space-y-3">
                        <div className="flex space-x-3">
                          <div className="w-20 h-16 bg-gray-200 rounded"></div>
                          <div className="w-20 h-16 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Regular Post Layout */
                <div>
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 p-6 flex items-center justify-center">
                    <div className="w-32 h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
                      <div className="w-16 h-12 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <button
                      onClick={() => handleReadMore(post.id)}
                      className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium"
                    >
                      Read Full Blog
                    </button>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <SearchIcon />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-300 transition-colors font-medium">
              Load More Posts
            </button>
          </div>
        )}
      </main>

      {/* Latest Blogs Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-gray-600 text-sm mb-2">Latest Blog</p>
              <h2 className="text-4xl font-bold text-gray-900">Latest Blogs</h2>
            </div>
            <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors font-medium">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Card 1 - UI/UX */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 p-6 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50"></div>
                <div className="relative z-10">
                  {/* Rocket Illustration */}
                  <div className="w-24 h-32 mx-auto">
                    <div className="relative">
                      <div className="w-16 h-20 bg-gradient-to-b from-orange-500 to-red-500 rounded-t-full mx-auto"></div>
                      <div className="w-8 h-8 bg-yellow-400 rounded-full absolute top-6 left-1/2 transform -translate-x-1/2"></div>
                      <div className="w-4 h-8 bg-orange-600 absolute -bottom-2 left-2 rounded-b-full"></div>
                      <div className="w-4 h-8 bg-orange-600 absolute -bottom-2 right-2 rounded-b-full"></div>
                    </div>
                  </div>
                  {/* Floating Icons */}
                  <div className="absolute top-4 left-4 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute top-8 right-6 w-5 h-5 bg-green-400 rounded-full"></div>
                  <div className="absolute bottom-6 left-8 w-4 h-4 bg-purple-400 rounded-full"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-600 font-medium">UI/UX</span>
                  <span className="text-sm text-gray-500">07/07/2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Top 10 UI UX Design Services to Skyrocket Your User Engagement in 2025
                </h3>
                <button className="text-gray-600 hover:text-gray-800 font-medium">
                  Read Full Blog
                </button>
              </div>
            </div>

            {/* Blog Card 2 - CRO */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-pink-100 to-red-100 p-6 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-red-50"></div>
                <div className="relative z-10">
                  {/* E-commerce Illustration */}
                  <div className="w-32 h-24 bg-white rounded-lg shadow-md p-4 mx-auto">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-6 bg-orange-500 rounded"></div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="w-full h-8 bg-gray-200 rounded"></div>
                      <div className="w-full h-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  {/* Shopping Cart Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 4V2C7 1.45 7.45 1 8 1S9 1.55 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.55 17 2V4H19C20.1 4 21 4.9 21 6V8H3V6C3 4.9 3.9 4 5 4H7Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-orange-600 font-medium">CRO</span>
                  <span className="text-sm text-gray-500">05/27/2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  What Are the Best Strategies to Increase E-commerce Conversion Rates in 2025?
                </h3>
                <button className="text-gray-600 hover:text-gray-800 font-medium">
                  Read Full Blog
                </button>
              </div>
            </div>

            {/* Blog Card 3 - Web Design */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 p-6 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50"></div>
                <div className="relative z-10">
                  {/* Website Mockup */}
                  <div className="w-32 h-20 bg-white rounded-lg shadow-md p-3 mx-auto">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-bold text-gray-800">Seek Your Perfect</div>
                      <div className="w-4 h-2 bg-gray-300 rounded"></div>
                    </div>
                    <div className="text-xs text-gray-600 mb-1">Haven with Our</div>
                    <div className="text-xs font-semibold text-gray-800">Proficiency</div>
                    <div className="flex items-center space-x-1 mt-2">
                      <div className="w-6 h-4 bg-gray-200 rounded"></div>
                      <div className="w-6 h-4 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  {/* Person Icon */}
                  <div className="absolute bottom-2 right-4 w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-green-600 font-medium">Web Design</span>
                  <span className="text-sm text-gray-500">05/27/2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Real Estate Website Design Tips From Top Industry Professionals in Dubai
                </h3>
                <button className="text-gray-600 hover:text-gray-800 font-medium">
                  Read Full Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}