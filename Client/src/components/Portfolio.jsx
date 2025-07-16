import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('App Design');

    const categories = ['App Design', 'Web Design', 'WordPress', 'Shopify', 'Development'];

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/blogs');
    };

    const portfolioData = {
        'App Design': [
            {
                id: 1,
                title: 'Auraluxe Fragrances',
                description: 'Indulge in the finest BBQ experiences. Discover flavors, find recipes, and connect with BBQ enthusiasts effortlessly.',
                image: '/api/placeholder/300/400',
                gradient: 'from-yellow-100 to-orange-100'
            },
            {
                id: 2,
                title: 'Tanishq App',
                description: 'Discover exquisite jewelry collections. Find timeless pieces, explore craftsmanship, and celebrate moments with Tanishq.',
                image: '/api/placeholder/300/400',
                gradient: 'from-pink-100 to-purple-100'
            },
            {
                id: 3,
                title: 'Medical App',
                description: 'Comprehensive healthcare solution. Book appointments, track health metrics, and connect with medical professionals.',
                image: '/api/placeholder/300/400',
                gradient: 'from-blue-100 to-green-100'
            }
        ],
        'Web Design': [
            {
                id: 4,
                title: 'E-commerce Platform',
                description: 'Modern online shopping experience with intuitive navigation and seamless checkout process.',
                image: '/api/placeholder/300/400',
                gradient: 'from-purple-100 to-pink-100'
            },
            {
                id: 5,
                title: 'Corporate Website',
                description: 'Professional business website with clean design and powerful functionality.',
                image: '/api/placeholder/300/400',
                gradient: 'from-green-100 to-blue-100'
            },
            {
                id: 6,
                title: 'Portfolio Site',
                description: 'Creative portfolio showcase with stunning visuals and smooth animations.',
                image: '/api/placeholder/300/400',
                gradient: 'from-orange-100 to-red-100'
            }
        ],
        'WordPress': [
            {
                id: 7,
                title: 'Blog Platform',
                description: 'Custom WordPress blog with advanced features and SEO optimization.',
                image: '/api/placeholder/300/400',
                gradient: 'from-indigo-100 to-purple-100'
            },
            {
                id: 8,
                title: 'Business Directory',
                description: 'Comprehensive business listing platform with search and filter capabilities.',
                image: '/api/placeholder/300/400',
                gradient: 'from-teal-100 to-cyan-100'
            },
            {
                id: 9,
                title: 'Event Management',
                description: 'Complete event management solution with booking and payment integration.',
                image: '/api/placeholder/300/400',
                gradient: 'from-rose-100 to-pink-100'
            }
        ],
        'Shopify': [
            {
                id: 10,
                title: 'Fashion Store',
                description: 'Trendy fashion e-commerce with advanced product filtering and wishlist features.',
                image: '/api/placeholder/300/400',
                gradient: 'from-violet-100 to-purple-100'
            },
            {
                id: 11,
                title: 'Electronics Shop',
                description: 'Tech store with detailed product specifications and comparison tools.',
                image: '/api/placeholder/300/400',
                gradient: 'from-blue-100 to-indigo-100'
            },
            {
                id: 12,
                title: 'Organic Food Store',
                description: 'Healthy food marketplace with subscription boxes and delivery tracking.',
                image: '/api/placeholder/300/400',
                gradient: 'from-green-100 to-emerald-100'
            }
        ],
        'Development': [
            {
                id: 13,
                title: 'API Integration',
                description: 'Complex API integrations with third-party services and real-time data sync.',
                image: '/api/placeholder/300/400',
                gradient: 'from-gray-100 to-slate-100'
            },
            {
                id: 14,
                title: 'Mobile Backend',
                description: 'Scalable backend infrastructure for mobile applications with cloud deployment.',
                image: '/api/placeholder/300/400',
                gradient: 'from-amber-100 to-orange-100'
            },
            {
                id: 15,
                title: 'Database Solutions',
                description: 'Optimized database architecture with performance monitoring and analytics.',
                image: '/api/placeholder/300/400',
                gradient: 'from-emerald-100 to-teal-100'
            }
        ]
    };

    return (
        <div className="min-h-screen bg-gray-200 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="text-sm text-gray-500 mb-4">Browse Our Work</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                        Portfolio Where Our Creativity & Your
                        <br />
                        Imagination Collide
                    </h1>

                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`text-lg font-medium transition-all duration-300 ${activeCategory === category
                                        ? 'text-orange-500 border-b-2 border-orange-500 pb-2'
                                        : 'text-gray-600 hover:text-orange-500'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {portfolioData[activeCategory].map((item) => (
                        <div
                            key={item.id}
                            className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}
                        >
                            <div className="text-xs text-gray-500 mb-4 uppercase tracking-wide">
                                {activeCategory}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                {item.description}
                            </p>

                            {/* Placeholder for app mockup */}
                            <div className="relative">
                                <div className="bg-white rounded-2xl p-4 shadow-lg">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                        </div>
                                        <div className="text-xs text-gray-400">Preview</div>
                                    </div>

                                    <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3"></div>
                                            <div className="text-xs text-gray-500 font-medium">
                                                {item.title}
                                            </div>
                                            <div className="text-xs text-gray-400 mt-1">
                                                {activeCategory}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View Portfolio Button */}
                <div className="text-center">
                    <button onClick={() => navigate('/Blog')} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View Portfolio
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;