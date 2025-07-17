import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogSection = () => {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/blogs');
    };

    const blogPosts = [
        {
            id: 1,
            category: 'UI/UX',
            date: new Date().toLocaleDateString('en-US'),
            title: 'Top 10 UI UX Design Services to Skyrocket Your User Engagement in 2025',
            image: '/api/placeholder/400/250',
            bgColor: 'bg-gradient-to-br from-yellow-100 to-orange-100',
            iconColor: 'text-orange-500',
            slug: 'ui-ux-design-services-2025'
        },
        {
            id: 2,
            category: 'CRO',
            date: new Date().toLocaleDateString('en-US'),
            title: 'What Are the Best Strategies to Increase E-commerce Conversion Rates in 2025?',
            image: '/api/placeholder/400/250',
            bgColor: 'bg-gradient-to-br from-pink-100 to-red-100',
            iconColor: 'text-red-500',
            slug: 'ecommerce-conversion-strategies-2025'
        },
        {
            id: 3,
            category: 'Web Design',
            date: new Date().toLocaleDateString('en-US'),
            title: 'Real Estate Website Design Tips From Top Industry Professionals in Dubai',
            image: '/api/placeholder/400/250',
            bgColor: 'bg-gradient-to-br from-yellow-100 to-amber-100',
            iconColor: 'text-amber-600',
            slug: 'real-estate-website-design-dubai'
        }
    ];

    const handleReadMore = (slug) => {
        navigate(`/blog/${slug}`);
    };

    const RocketIcon = () => (
        <svg className="w-16 h-16 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );

    const ShoppingCartIcon = () => (
        <svg className="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
    );

    const BuildingIcon = () => (
        <svg className="w-16 h-16 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 3h2v2h-2V6zm0 4h2v2h-2v-2zm-4-4h2v2H7V6zm0 4h2v2H7v-2zm-2 6h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm4-2h2v2h-2v-2zm0-4h2v2h-2v-2zm0-4h2v2h-2V6z" />
        </svg>
    );

    const getIcon = (category) => {
        switch (category) {
            case 'UI/UX':
                return <RocketIcon />;
            case 'CRO':
                return <ShoppingCartIcon />;
            case 'Web Design':
                return <BuildingIcon />;
            default:
                return <RocketIcon />;
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-orange-500 text-sm font-medium mb-2">Blog Posts</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    From Trending Topics To Fundamentals: Blogs
                </h2>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        {/* Card Image/Icon Section */}
                        <div className={`${post.bgColor} p-8 relative h-48 flex items-center justify-center`}>
                            <div className="absolute inset-0 opacity-10">
                                <div className="w-full h-full flex items-center justify-center">
                                    {getIcon(post.category)}
                                </div>
                            </div>
                            <div className="relative z-10">
                                {getIcon(post.category)}
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full opacity-60"></div>
                            <div className="absolute top-6 right-8 w-3 h-3 bg-white rounded-full opacity-40"></div>
                            <div className="absolute bottom-6 left-8 w-1 h-1 bg-white rounded-full opacity-80"></div>
                            <div className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full opacity-50"></div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                            {/* Category and Date */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                    {post.category}
                                </span>
                                <span className="text-sm text-gray-400">
                                    {post.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-6 line-clamp-3 leading-relaxed">
                                {post.title}
                            </h3>

                            {/* Read More Button */}
                            <button
                                onClick={() => navigate('/Blog')}
                                className="text-orange-500 text-sm font-medium border border-orange-500 px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-200"
                            >
                                Read Full Article
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Blogs Button */}
            <div className="text-center">
                <button
                    //   onClick={handleViewAllBlogs}
                    onClick={() => navigate('/Blog')}
                    className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors duration-200 inline-flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    View All Blogs
                </button>
            </div>
        </div>
    );
};

export default BlogSection;