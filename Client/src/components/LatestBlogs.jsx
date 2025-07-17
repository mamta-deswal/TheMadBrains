import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LatestBlogs = () => {
    const [blogs] = useState([
        {
            id: 1,
            category: 'Subscription UI UX',
            date: '04/04/2026',
            title: 'What Makes UI UX Design London Stand Out in the Global Market?',
            image: '/api/placeholder/400/250',
            bgColor: 'bg-yellow-200',
            illustration: 'ui-ux'
        },
        {
            id: 2,
            category: 'Subscription UI UX',
            date: '04/20/2026',
            title: 'Why Does Your Business Need a UI UX Studio',
            image: '/api/placeholder/400/250',
            bgColor: 'bg-green-200',
            illustration: 'business'
        },
        {
            id: 3,
            category: 'Subscription UI UX',
            date: '04/20/2026',
            title: 'How Can Subscription UI UX Bangalore Improve Customer Retention',
            image: '/api/placeholder/400/250',
            bgColor: 'bg-blue-100',
            illustration: 'analytics'
        }
    ]);

    const handleReadMore = (blogId) => {
        // Simulate navigation to blog post
        alert(`Opening blog post ${blogId}...`);
        // In a real application: window.location.href = `/blog/${blogId}`;
    };

    //   const handleViewAllBlogs = () => {
    //     // Simulate navigation to all blogs page
    //     alert('Redirecting to all blogs...');
    //     // In a real application: window.location.href = '/blogs';
    //   };
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/blogs');
    };


    const renderIllustration = (type, bgColor) => {
        const baseClasses = `w-full h-48 ${bgColor} rounded-lg flex items-center justify-center relative overflow-hidden`;

        switch (type) {
            case 'ui-ux':
                return (
                    <div className={baseClasses}>
                        {/* UI/UX Illustration */}
                        <div className="relative">
                            {/* Person with laptop */}
                            <div className="absolute -left-8 top-4">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-orange-500 font-bold">👤</span>
                                    </div>
                                </div>
                            </div>

                            {/* UI Elements */}
                            <div className="bg-white rounded-lg p-4 shadow-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 bg-gray-200 rounded w-20"></div>
                                    <div className="h-2 bg-gray-200 rounded w-16"></div>
                                    <div className="h-8 bg-blue-100 rounded"></div>
                                </div>
                            </div>

                            {/* Mobile mockup */}
                            <div className="absolute -right-4 -top-2 w-12 h-20 bg-gray-800 rounded-lg p-1">
                                <div className="w-full h-full bg-white rounded"></div>
                            </div>

                            {/* UI text */}
                            <div className="absolute -bottom-4 left-0 text-6xl font-bold text-yellow-600 opacity-20">
                                UI UX
                            </div>
                        </div>
                    </div>
                );

            case 'business':
                return (
                    <div className={baseClasses}>
                        {/* Business Illustration */}
                        <div className="relative">
                            {/* Mind map style illustration */}
                            <div className="flex items-center justify-center">
                                <div className="relative">
                                    {/* Central node */}
                                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">UI UX</span>
                                    </div>

                                    {/* Connected nodes */}
                                    <div className="absolute -top-8 -left-8 w-8 h-8 bg-purple-500 rounded-full"></div>
                                    <div className="absolute -top-8 -right-8 w-8 h-8 bg-pink-500 rounded-full"></div>
                                    <div className="absolute -bottom-8 -left-8 w-8 h-8 bg-orange-500 rounded-full"></div>
                                    <div className="absolute -bottom-8 -right-8 w-8 h-8 bg-green-500 rounded-full"></div>

                                    {/* Connection lines */}
                                    {/* <div className="absolute top-2 left-2 w-12 h-0.5 bg-gray-400 transform -rotate-45"></div>
                                    <div className="absolute top-2 right-2 w-12 h-0.5 bg-gray-400 transform rotate-45"></div>
                                    <div className="absolute bottom-2 left-2 w-12 h-0.5 bg-gray-400 transform rotate-45"></div>
                                    <div className="absolute bottom-2 right-2 w-12 h-0.5 bg-gray-400 transform -rotate-45"></div> */}
                                </div>
                            </div>

                            {/* Business text */}
                            {/* <div className="absolute bottom-0 left-0 right-0 text-center">
                                <div className="text-xs text-gray-600 font-medium">WHY DOES YOUR BUSINESS NEED A UI UX STUDIO</div>
                            </div> */}
                        </div>
                    </div>
                );

            case 'analytics':
                return (
                    <div className={baseClasses}>
                        {/* Analytics Illustration */}
                        <div className="relative flex items-center justify-center">
                            {/* Charts and analytics */}
                            <div className="flex items-center gap-4">
                                {/* Pie chart */}
                                <div className="relative w-20 h-20">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="8"
                                            strokeDasharray="125.6" strokeDashoffset="37.7" />
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#f97316" strokeWidth="8"
                                            strokeDasharray="125.6" strokeDashoffset="75.4" />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-xs font-bold text-blue-600">70%</span>
                                    </div>
                                </div>

                                {/* Bar chart */}
                                <div className="flex items-end gap-1 h-16">
                                    <div className="w-2 h-8 bg-blue-500 rounded-t"></div>
                                    <div className="w-2 h-12 bg-orange-500 rounded-t"></div>
                                    <div className="w-2 h-6 bg-green-500 rounded-t"></div>
                                    <div className="w-2 h-10 bg-purple-500 rounded-t"></div>
                                </div>

                                {/* Percentage indicators */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm font-bold text-blue-600">50%</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                        <span className="text-sm font-bold text-orange-600">35%</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                        <span className="text-sm font-bold text-purple-600">60%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Analytics text */}
                            <div className="absolute bottom-2 left-0 right-0 text-center">
                                <div className="text-xs text-gray-600 font-medium">SUBSCRIPTION UI UX ANALYTICS</div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return (
                    <div className={baseClasses}>
                        <div className="text-4xl">📝</div>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        Blog Posts
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Latest Blogs
                    </h1>
                </div>

                {/* Blog Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">

                            {/* Blog Image/Illustration */}
                            <div className="p-4">
                                {renderIllustration(blog.illustration, blog.bgColor)}
                            </div>

                            {/* Blog Content */}
                            <div className="p-6">
                                {/* Category and Date */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                                        {blog.category}
                                    </span>
                                    <span className="text-sm text-gray-500">{blog.date}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                                    {blog.title}
                                </h3>

                                {/* Read More Button */}
                                <button
                                    onClick={() => handleReadMore(blog.id)}
                                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 flex items-center gap-2"
                                >
                                    Read Full Article
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Blogs Button */}
                <div className="text-center">
                    <button
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 mx-auto"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        View All Blogs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LatestBlogs;