// import React, { useState, useEffect } from 'react';
// import WhatWe from './WhatWe';
// import MadBrainsDropdown from './MadBrainsDropdown';
// import { useClerk, useUser, UserButton } from '@clerk/clerk-react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const BookIcon = () => (
//     <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
//         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
//     </svg>
// )

// const Navbar = () => {
//     const [openDropdown, setOpenDropdown] = useState(null);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [hoverTimeout, setHoverTimeout] = useState(null);

//     // Scroll effect
//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;
//             setIsScrolled(scrollPosition > 50);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     // Clean up timeout on unmount
//     useEffect(() => {
//         return () => {
//             if (hoverTimeout) {
//                 clearTimeout(hoverTimeout);
//             }
//         };
//     }, [hoverTimeout]);

//     const handleMouseEnter = (dropdownName) => {
//         if (hoverTimeout) {
//             clearTimeout(hoverTimeout);
//             setHoverTimeout(null);
//         }
//         setOpenDropdown(dropdownName);
//     };

//     const handleMouseLeave = () => {
//         const timeout = setTimeout(() => {
//             setOpenDropdown(null);
//         }, 100); // Small delay to prevent flickering
//         setHoverTimeout(timeout);
//     };

//     const closeDropdown = () => {
//         setOpenDropdown(null);
//         if (hoverTimeout) {
//             clearTimeout(hoverTimeout);
//             setHoverTimeout(null);
//         }
//     };

//     const { openSignIn } = useClerk()
//     const { user } = useUser()

//     const location = useLocation();
//     const navigate = useNavigate();

//     // Function to handle redirects
//     const handleRedirect = (path) => {
//         navigate(path);
//         closeDropdown();
//     };

//     return (
//         <div className={`text-lg w-full fixed top-0 z-50 ${isScrolled ? 'text-black' : 'text-white'}`}>
//             {/* Top banner */}
//             <div className="text-center text-sm font-medium py-2 bg-gradient-to-r from-gray-300 via-white to-[#f6f2f1]">
//                 <p className="text-black">
//                     Flexible ui/ux design packages for startups and enterprises alike{' '}
//                     <span className="underline underline-offset-2 text-orange-500">
//                         Explore Now
//                     </span>
//                 </p>
//             </div>

//             {/* Sticky Navbar with scroll effect */}
//             <nav className={`h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 transition-all duration-300 shadow-sm ${isScrolled ? 'bg-white text-black' : 'bg-black text-white'
//                 }`}>
//                 {/* Logo */}
//                 <span className='flex cursor-pointer' onClick={() => handleRedirect('/')}>
//                     <img className='' src="./Logo-1-9ea992.svg" alt="MadBrains" />
//                 </span>

//                 {/* Desktop Nav with Dropdowns */}
//                 <ul className="hidden md:flex items-center space-x-8 md:pl-28">
//                     {/* Who We Are Dropdown */}
//                     <li className="relative"
//                         onMouseEnter={() => handleMouseEnter('whoWeAre')}
//                         onMouseLeave={handleMouseLeave}
//                     >
//                         <button
//                             className="flex items-center space-x-1 py-2 hover:text-orange-500 transition-colors"
//                         >
//                             <span>Who We Are</span>
//                             <svg
//                                 className={`w-4 h-4 transition-transform ${openDropdown === 'whoWeAre' ? 'rotate-180' : ''}`}
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                             </svg>
//                         </button>
//                         {openDropdown === 'whoWeAre' && (
//                             <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-200 p-6 z-50">
//                                 {/* Header */}
//                                 <div className="mb-8">
//                                     <h3 className="text-gray-400 text-sm font-medium tracking-wider uppercase">WHO WE ARE</h3>
//                                 </div>

//                                 {/* Main Content Grid */}
//                                 <div className="grid grid-cols-2 gap-8">
//                                     {/* Left Side - Workbase Image */}
//                                     <div className="space-y-4">
//                                         <div className="flex items-center space-x-2 text-gray-800">
//                                             <span className="text-lg font-medium">Workbase</span>
//                                             <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                                             </svg>
//                                         </div>

//                                         {/* Workbase Screenshot */}
//                                         <div className="bg-gray-100 rounded-lg p-4 border">
//                                             <div className="bg-white rounded-lg shadow-sm p-4">
//                                                 <div className="flex items-center justify-between mb-4">
//                                                     <div className="text-xs text-gray-500">workbase</div>
//                                                     <div className="flex space-x-2">
//                                                         <div className="w-2 h-2 bg-red-400 rounded-full"></div>
//                                                         <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//                                                         <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="space-y-3">
//                                                     <h4 className="text-lg font-semibold text-gray-800">Employee platform</h4>
//                                                     <h4 className="text-lg font-semibold text-gray-800">Increased productivity</h4>
//                                                     <p className="text-xs text-gray-600">Automate payroll and HR processes to boost efficiency. Reduce manual tasks and focus on strategic initiatives.</p>
//                                                     <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">Learn about workflow</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Right Side - Menu Items */}
//                                     <div className="space-y-6">
//                                         {/* About Us */}
//                                         <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
//                                             <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
//                                                 <div className="w-4 h-4 bg-red-500 rounded-full"></div>
//                                             </div>
//                                             <div>
//                                                 <h4 className="text-lg font-semibold text-gray-800 mb-1">About Us</h4>
//                                                 <p className="text-sm text-gray-500">Learn more about our mission, values.</p>
//                                             </div>
//                                         </div>

//                                         {/* Our Team */}
//                                         <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
//                                             <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
//                                                 <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
//                                                     <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
//                                                 </svg>
//                                             </div>
//                                             <div>
//                                                 <h4 className="text-lg font-semibold text-gray-800 mb-1">Our Team</h4>
//                                                 <p className="text-sm text-gray-500">Meet the passionate and dedicated team.</p>
//                                             </div>
//                                         </div>

//                                         {/* Career */}
//                                         <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
//                                             <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
//                                                 <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
//                                                     <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2V8c0-1.11.89-2 2-2h16z" />
//                                                 </svg>
//                                             </div>
//                                             <div>
//                                                 <h4 className="text-lg font-semibold text-gray-800 mb-1">Career</h4>
//                                                 <p className="text-sm text-gray-500">Explore exciting career opportunities and join our team</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Bottom Section */}
//                                 <div className="mt-8 pt-6 border-t border-gray-200">
//                                     <div className="flex items-center justify-between">
//                                         <div>
//                                             <h4 className="text-lg font-semibold text-gray-800 mb-1">Need Different solutions ?</h4>
//                                             <p className="text-sm text-gray-500">Upwork connects us with a global network of clients</p>
//                                         </div>
//                                         <button
//                                             onClick={openSignIn}
//                                             className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center space-x-2"
//                                         >
//                                             Book A Call
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </li>

//                     {/* What We Do Dropdown */}
//                     <li className="relative"
//                         onMouseEnter={() => handleMouseEnter('whatWeDo')}
//                         onMouseLeave={handleMouseLeave}
//                     >
//                         <button
//                             className="flex items-center space-x-1 py-2 hover:text-orange-500 transition-colors"
//                         >
//                             <span>What We Do</span>
//                             <svg
//                                 className={`w-4 h-4 transition-transform ${openDropdown === 'whatWeDo' ? 'rotate-180' : ''}`}
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                             </svg>
//                         </button>
//                         {openDropdown === 'whatWeDo' && (
//                             <WhatWe />
//                         )}
//                     </li>

//                     {/* Why Mad Brains Dropdown */}
//                     <li className="relative"
//                         onMouseEnter={() => handleMouseEnter('whyMadBrains')}
//                         onMouseLeave={handleMouseLeave}
//                     >
//                         <button
//                             className="flex items-center space-x-1 py-2 hover:text-orange-500 transition-colors"
//                         >
//                             <span>Why Mad Brains</span>
//                             <svg
//                                 className={`w-4 h-4 transition-transform ${openDropdown === 'whyMadBrains' ? 'rotate-180' : ''}`}
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                             </svg>
//                         </button>
//                         {openDropdown === 'whyMadBrains' && (
//                             <MadBrainsDropdown />
//                         )}
//                     </li>

//                     {/* Blog - Direct Link (No Dropdown) */}
//                     <li>
//                         <button
//                             onClick={() => navigate('/Blog')}
//                             className="py-2 hover:text-orange-500 transition-colors"
//                         >
//                             Blog
//                         </button>
//                     </li>

//                     {/* Try UIUX Plans - Direct Link (No Dropdown) */}
//                     <li>
//                         <button
//                             onClick={() => handleRedirect('/uiux-plans')}
//                             className={`py-2 transition-colors ${isScrolled ? 'hover:text-orange-500' : 'hover:text-gray-300'
//                                 }`}
//                         >
//                             Try UIUX Plans
//                         </button>
//                     </li>
//                 </ul>

//                 {/* Get Started Button */}
//                 {user ?
//                     (<UserButton>
//                         <UserButton.MenuItems>
//                             <UserButton.Action label="My Bookings" labelIcon={<BookIcon />} onClick={() => navigate('/my-bookings')} />
//                         </UserButton.MenuItems>
//                     </UserButton>) : (<button
//                         onClick={openSignIn}
//                         className={`md:inline hidden bg-orange-500 border border-gray-300 ml-20 px-9 py-2 rounded-full active:scale-95 transition-all duration-400 hover:transform hover:-translate-y-1 hover:scale-85 hover:shadow-xl hover:shadow-orange-500/30 hover:brightness-110 ${isScrolled ? 'text-white' : 'text-black'
//                             }`}
//                     >
//                         Book A Call
//                     </button>)}

//                 {/* Mobile Menu Button */}
//                 <button aria-label="menu-btn" type="button" className="menu-btn inline-block md:hidden active:scale-90 transition">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
//                         <path stroke="currentColor" d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
//                     </svg>
//                 </button>

//                 {/* Mobile Nav */}
//                 <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 hidden md:hidden">
//                     <ul className="flex flex-col space-y-4 text-lg">
//                         <li><a href="#" className="text-sm text-gray-700">Who We Are</a></li>
//                         <li><a href="#" className="text-sm text-gray-700">What We Do</a></li>
//                         <li><a href="#" className="text-sm text-gray-700">Why Mad Brains</a></li>
//                         <li>
//                             <button
//                                 onClick={() => handleRedirect('/blog')}
//                                 className="text-sm text-left text-gray-700 hover:text-orange-500 transition-colors"
//                             >
//                                 Blog
//                             </button>
//                         </li>
//                         <li>
//                             <button
//                                 onClick={() => handleRedirect('/uiux-plans')}
//                                 className="text-sm text-left text-gray-700 hover:text-orange-500 transition-colors"
//                             >
//                                 Try UIUX Plans
//                             </button>
//                         </li>
//                     </ul>
//                     <button onClick={openSignIn} type="button" className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full">
//                         Book A Call
//                     </button>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import WhatWe from './WhatWe';
import MadBrainsDropdown from './MadBrainsDropdown';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    // Replace this with your actual Google Form URL
    const GOOGLE_FORM_URL = 'https://forms.google.com/your-form-id-here';

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Clean up timeout on unmount
    useEffect(() => {
        return () => {
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
            }
        };
    }, [hoverTimeout]);

    const handleMouseEnter = (dropdownName) => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
        setOpenDropdown(dropdownName);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setOpenDropdown(null);
        }, 100); // Small delay to prevent flickering
        setHoverTimeout(timeout);
    };

    const closeDropdown = () => {
        setOpenDropdown(null);
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
    };

    const location = useLocation();
    // const navigate = useNavigate();

    // Function to handle redirects
    const handleRedirect = (path) => {
        navigate(path);
        closeDropdown();
    };

    // Function to open Google Form
    const openBookingForm = () => {
        window.open(GOOGLE_FORM_URL, '_blank');
        closeDropdown();
    };


    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/Form');
        navigate('/SubscriptionLanding');
    };

    return (
        <div className={`text-lg w-full fixed top-0 z-50 ${isScrolled ? 'text-black' : 'text-white'}`}>
            {/* Top banner */}
            <div className="text-center text-sm font-medium py-2 bg-gradient-to-r from-gray-300 via-white to-[#f6f2f1]">
                <p className="text-black">
                    Flexible ui/ux design packages for startups and enterprises alike{' '}
                    <span className="underline underline-offset-2 text-orange-500">
                        Explore Now
                    </span>
                </p>
            </div>

            {/* Sticky Navbar with scroll effect */}
            <nav className={`h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 transition-all duration-300 shadow-sm ${isScrolled ? 'bg-white text-black' : 'bg-black text-white'
                }`}>
                {/* Logo */}
                <span className='flex cursor-pointer' onClick={() => handleRedirect('/')}>
                    <img className='' src="./Logo-1-9ea992.svg" alt="MadBrains" />
                </span>

                {/* Desktop Nav with Dropdowns */}
                <ul className="hidden md:flex items-center space-x-8 md:pl-28">
                    {/* Who We Are Dropdown */}
                    <li className="relative"
                        onMouseEnter={() => handleMouseEnter('whoWeAre')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            className="flex items-center space-x-1 py-2 hover:text-orange-500 transition-colors"
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
                                        <button
                                            onClick={() => navigate('/Form')}
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
                    <li className="relative"
                        onMouseEnter={() => handleMouseEnter('whatWeDo')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
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
                            <WhatWe />
                        )}
                    </li>

                    {/* Why Mad Brains Dropdown */}
                    <li className="relative"
                        onMouseEnter={() => handleMouseEnter('whyMadBrains')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            className="flex items-center space-x-1 py-2 hover:text-orange-500 transition-colors"
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
                            <MadBrainsDropdown />
                        )}
                    </li>

                    {/* Blog - Direct Link (No Dropdown) */}
                    <li>
                        <button
                            onClick={() => navigate('/Blog')}
                            className="py-2 hover:text-orange-500 transition-colors"
                        >
                            Blog
                        </button>
                    </li>

                    {/* Try UIUX Plans - Direct Link (No Dropdown) */}
                    <li>
                        <button
                            onClick={() => navigate('/SubscriptionLanding')}
                            className={`py-2 transition-colors ${isScrolled ? 'hover:text-orange-500' : 'hover:text-gray-300'
                                }`}
                        >
                            Try UIUX Plans
                        </button>
                    </li>
                </ul>

                {/* Get Started Button */}
                <button
                    // onClick={openBookingForm}
                    onClick={() => navigate('/Form')}
                    className={`md:inline hidden bg-orange-500 border border-gray-300 ml-20 px-9 py-2 rounded-full active:scale-95 transition-all duration-400 hover:transform hover:-translate-y-1 hover:scale-85 hover:shadow-xl hover:shadow-orange-500/30 hover:brightness-110 ${isScrolled ? 'text-white' : 'text-black'
                        }`}
                >
                    Book A Call
                </button>

                {/* Mobile Menu Button */}
                <button aria-label="menu-btn" type="button" className="menu-btn inline-block md:hidden active:scale-90 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                        <path stroke="currentColor" d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
                    </svg>
                </button>

                {/* Mobile Nav */}
                <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 hidden md:hidden">
                    <ul className="flex flex-col space-y-4 text-lg">
                        <li><a href="#" className="text-sm text-gray-700">Who We Are</a></li>
                        <li><a href="#" className="text-sm text-gray-700">What We Do</a></li>
                        <li><a href="#" className="text-sm text-gray-700">Why Mad Brains</a></li>
                        <li>
                            <button
                                onClick={() => handleRedirect('/blog')}
                                className="text-sm text-left text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                Blog
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => navigate('/SubscriptionLanding')}
                                className="text-sm text-left text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                Try UIUX Plans
                            </button>
                        </li>
                    </ul>
                    <button
                        onClick={openBookingForm}
                        type="button"
                        className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
                    >
                        Book A Call
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;