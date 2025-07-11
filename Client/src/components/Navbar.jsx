import React, { useState } from 'react';
import WhatWe from './WhatWe';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    const closeDropdown = () => {
        setOpenDropdown(null);
    };


    // Function to handle redirects
    const handleRedirect = (path) => {
        // In a real React app with React Router, you would use:
        // navigate(path) or history.push(path)
        // For now, we'll use window.location or you can replace with your routing solution
        console.log(`Redirecting to ${path}`);

        // window.location.href = path; // Uncomment this for actual redirect
    };

    // Dropdown menu items for each category (removed blog and uiuxPlans)
    const menuItems = {
        whoWeAre: [
            { title: "About Us", href: "#" },
            { title: "Our Team", href: "#" },
            { title: "Career", href: "#" },
        ],
        whatWeDo: [
            { title: "UI/UX Design", href: "#" },
            { title: "Web Development", href: "#" },
            { title: "Mobile Apps", href: "#" },
            { title: "Branding", href: "#" },
            { title: "Digital Marketing", href: "#" },
        ],
        whyMadBrains: [
            { title: "Our Process", href: "#" },
            { title: "Quality Assurance", href: "#" },
            { title: "Client Testimonials", href: "#" },
            { title: "Case Studies", href: "#" },
        ],
    };

    return (
        <div className="text-lg text-white w-full fixed top-0 z-50">
            {/* Top banner */}
            <div className="text-center text-xl font-medium py-2 bg-gradient-to-r from-white via-white to-[#f6f2f1]">
                <p className="text-black">
                    Flexible ui/ux design packages for startups and enterprises alike{' '}
                    <span className="underline underline-offset-2 text-orange-500">
                        Explore Now
                    </span>
                </p>
            </div>

            {/* Sticky Navbar */}
            <nav className="h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-black text-white transition-all shadow-sm">
                {/* Logo */}
                <span className='flex'>
                    {/* <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="./Logo-1-9ea992.svg">
                        <path d="M47.904 28.28q-1.54 0-2.744-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.82 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.868 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.456.924-3.276.924m-7.196 5.32V14.56h3.08v3.612l-.532 3.276.532 3.248V33.6zm6.692-8.232q1.12 0 1.96-.504a3.6 3.6 0 0 0 1.344-1.456q.504-.924.504-2.128t-.504-2.128a3.43 3.43 0 0 0-1.344-1.428q-.84-.532-1.96-.532t-1.988.532a3.43 3.43 0 0 0-1.344 1.428q-.476.924-.476 2.128t.476 2.128a3.6 3.6 0 0 0 1.344 1.456q.868.504 1.988.504M56.95 28V14.56h3.08V28zm3.08-7.476-1.064-.532q0-2.548 1.12-4.116 1.148-1.596 3.444-1.596 1.008 0 1.82.364.812.365 1.512 1.176l-2.016 2.072a2.1 2.1 0 0 0-.812-.56 3 3 0 0 0-1.036-.168q-1.287 0-2.128.812-.84.811-.84 2.548m14.156 7.756q-2.016 0-3.64-.896a7 7 0 0 1-2.548-2.52q-.924-1.596-.924-3.584t.924-3.556a6.87 6.87 0 0 1 2.492-2.52q1.596-.924 3.528-.924 1.876 0 3.304.868a6.05 6.05 0 0 1 2.268 2.38q.84 1.512.84 3.444 0 .336-.056.7a7 7 0 0 1-.112.756H69.23v-2.52h9.436l-1.148 1.008q-.056-1.232-.476-2.072a3 3 0 0 0-1.204-1.288q-.756-.448-1.876-.448-1.176 0-2.044.504a3.43 3.43 0 0 0-1.344 1.428q-.476.896-.476 2.156t.504 2.212 1.428 1.484q.924.504 2.128.504 1.037 0 1.904-.364a4 4 0 0 0 1.512-1.064l1.96 1.988a6.3 6.3 0 0 1-2.38 1.736 7.6 7.6 0 0 1-2.968.588m15.91 0q-1.54 0-2.745-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.821 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.869 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.455.924-3.276.924M82.898 28V7.84h3.08v10.024l-.532 3.248.532 3.276V28zm6.692-2.632q1.12 0 1.96-.504a3.6 3.6 0 0 0 1.344-1.456q.504-.924.504-2.128t-.504-2.128a3.43 3.43 0 0 0-1.344-1.428q-.84-.532-1.96-.532t-1.988.532a3.43 3.43 0 0 0-1.344 1.428q-.476.924-.476 2.128.001 1.204.476 2.128a3.6 3.6 0 0 0 1.344 1.456q.87.504 1.988.504m15.067 2.912q-1.708 0-3.052-.756a5.5 5.5 0 0 1-2.072-2.072q-.728-1.344-.728-3.08V14.56h3.08v7.672q0 .98.308 1.68.336.672.952 1.036.644.364 1.512.364 1.344 0 2.044-.784.728-.812.728-2.296V14.56h3.08v7.812q0 1.764-.756 3.108a5.3 5.3 0 0 1-2.044 2.072q-1.317.728-3.052.728m8.976-.28V14.56h3.08V28zm1.54-15.904q-.783 0-1.316-.532-.504-.532-.504-1.316t.504-1.316a1.8 1.8 0 0 1 1.316-.532q.813 0 1.316.532t.504 1.316q0 .784-.504 1.316t-1.316.532M120.169 28V7.84h3.08V28zm8.552 0V8.96h3.08V28zm-3.22-10.64v-2.8h9.52v2.8zm17.274 10.92q-1.708 0-3.052-.756a5.5 5.5 0 0 1-2.072-2.072q-.728-1.344-.728-3.08V14.56h3.08v7.672q0 .98.308 1.68.336.672.952 1.036.643.364 1.512.364 1.344 0 2.044-.784.728-.812.728-2.296V14.56h3.08v7.812q0 1.764-.756 3.108a5.3 5.3 0 0 1-2.044 2.072q-1.317.728-3.052.728m8.977-.28V14.56h3.08V28zm1.54-15.904q-.785 0-1.316-.532-.504-.532-.504-1.316t.504-1.316a1.8 1.8 0 0 1 1.316-.532q.812 0 1.316.532t.504 1.316-.504 1.316-1.316.532" fill="#000" />
                        <path d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585" stroke="#4F39F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> */}
                    <img className='' src="./Logo-1-9ea992.svg" alt="MadBrains" />

                </span>

                {/* Desktop Nav with Dropdowns */}
                <ul className="hidden md:flex items-center space-x-8 md:pl-28">
                    {/* Who We Are Dropdown */}
                    <li className="relative">
                        <button
                            onClick={() => toggleDropdown('whoWeAre')}
                            className="flex items-center space-x-1 py-2 hover:text-gray-600 transition-colors"
                        >
                            <span>Who We Are</span>
                            <svg
                                className={`w-4 h-4 transition-transform ${openDropdown === 'whoWeAre' ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openDropdown === 'whoWeAre' && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-200 p-6 z-50">
                                {/* Header */}
                                <div className="mb-8">
                                    <h3 className="text-gray-400 text-sm font-medium tracking-wider uppercase">WHO WE ARE</h3>
                                </div>

                                {/* Main Content Grid */}
                                <div className="grid grid-cols-2 gap-8">
                                    {/* Left Side - Workbase Image */}
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-2 text-gray-800">
                                            <span className="text-lg font-medium">Workbase</span>
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>

                                        {/* Workbase Screenshot */}
                                        <div className="bg-gray-100 rounded-lg p-4 border">
                                            <div className="bg-white rounded-lg shadow-sm p-4">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="text-xs text-gray-500">workbase</div>
                                                    <div className="flex space-x-2">
                                                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <h4 className="text-lg font-semibold text-gray-800">Employee platform</h4>
                                                    <h4 className="text-lg font-semibold text-gray-800">Increased productivity</h4>
                                                    <p className="text-xs text-gray-600">Automate payroll and HR processes to boost efficiency. Reduce manual tasks and focus on strategic initiatives.</p>
                                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">Learn about workflow</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side - Menu Items */}
                                    <div className="space-y-6">
                                        {/* About Us */}
                                        <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                                                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-800 mb-1">About Us</h4>
                                                <p className="text-sm text-gray-500">Learn more about our mission, values.</p>
                                            </div>
                                        </div>

                                        {/* Our Team */}
                                        <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-800 mb-1">Our Team</h4>
                                                <p className="text-sm text-gray-500">Meet the passionate and dedicated team.</p>
                                            </div>
                                        </div>

                                        {/* Career */}
                                        <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2V8c0-1.11.89-2 2-2h16z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-800 mb-1">Career</h4>
                                                <p className="text-sm text-gray-500">Explore exciting career opportunities and join our team</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Section */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800 mb-1">Need Different solutions ?</h4>
                                            <p className="text-sm text-gray-500">Upwork connects us with a global network of clients</p>
                                        </div>
                                        {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center space-x-2">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                            </svg>
                                            <span>Talk to Sales</span>
                                        </button> */}
                                        <button
                                            onClick={() => window.location.href = '/contact'}
                                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center space-x-2"
                                        >
                                            Book A Call
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>

                    {/* What We Do Dropdown */}
                    <li className="relative">
                        <button
                            onClick={() => toggleDropdown('whatWeDo')}
                            className="flex items-center space-x-1 py-2 hover:text-orange-500 transition-colors"
                        >
                            <span>What We Do</span>
                            <svg
                                className={`w-4 h-4 transition-transform ${openDropdown === 'whatWeDo' ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openDropdown === 'whatWeDo' && (
                            // <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                            //     {menuItems.whatWeDo.map((item, index) => (
                            //         <a
                            //             key={index}
                            //             href={item.href}
                            //             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            //             onClick={closeDropdown}
                            //         >
                            //             {item.title}
                            //         </a>
                            //     ))}
                            // </div>
                            <WhatWe />
                        )}
                    </li>

                    {/* Why Mad Brains Dropdown */}
                    <li className="relative">
                        <button
                            onClick={() => toggleDropdown('whyMadBrains')}
                            className="flex items-center space-x-1 py-2 hover:text-gray-600 transition-colors"
                        >
                            <span>Why Mad Brains</span>
                            <svg
                                className={`w-4 h-4 transition-transform ${openDropdown === 'whyMadBrains' ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openDropdown === 'whyMadBrains' && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                {menuItems.whyMadBrains.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                        onClick={closeDropdown}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        )}
                    </li>

                    {/* Blog - Direct Link (No Dropdown) */}
                    <li>
                        <button
                            onClick={() => handleRedirect('/blog')}
                            className="py-2 hover:text-gray-600 transition-colors"
                        >
                            Blog
                        </button>
                    </li>

                    {/* Try UIUX Plans - Direct Link (No Dropdown) */}
                    <li>
                        <button
                            onClick={() => handleRedirect('/uiux-plans')}
                            className="py-2 hover:text-gray-600 transition-colors"
                        >
                            Try UIUX Plans
                        </button>
                    </li>
                </ul>

                {/* Get Started Button */}
                {/* <button
                    onClick={() => window.location.href = '/contact'}
                    className="md:inline hidden bg-orange-500 text-black hover:bg-gray-50 border border-gray-300 ml-20 px-9 py-2 rounded-full active:scale-95 transition-all"
                >
                    Book A Call
                </button> */}
                <button
                    onClick={() => window.location.href = '/contact'}
                    className="md:inline hidden bg-orange-500 text-black border border-gray-300 ml-20 px-9 py-2 rounded-full active:scale-95 transition-all duration-400 hover:transform hover:-translate-y-1 hover:scale-85 hover:shadow-xl hover:shadow-orange-500/30 hover:brightness-110"
                >
                    Book A Call
                </button>

                {/* Mobile Menu Button */}
                <button aria-label="menu-btn" type="button" className="menu-btn inline-block md:hidden active:scale-90 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                        <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
                    </svg>
                </button>

                {/* Mobile Nav */}
                <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 hidden md:hidden">
                    <ul className="flex flex-col space-y-4 text-lg">
                        <li><a href="#" className="text-sm">Who We Are</a></li>
                        <li><a href="#" className="text-sm">What We Do</a></li>
                        <li><a href="#" className="text-sm">Why Mad Brains</a></li>
                        <li>
                            <button
                                onClick={() => handleRedirect('/blog')}
                                className="text-sm text-left"
                            >
                                Blog
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleRedirect('/uiux-plans')}
                                className="text-sm text-left"
                            >
                                Try UIUX Plans
                            </button>
                        </li>
                    </ul>
                    <button type="button" className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full">
                        Book A Call
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;