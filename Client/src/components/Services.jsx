import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Adept Development Services",
            color: "bg-sky-300",
            textColor: "text-gray-800"
        },
        {
            title: "User-Friendly & Satisfying Designing Services",
            color: "bg-yellow-200",
            textColor: "text-gray-800"
        },
        {
            title: "Expert UX Auditing Services",
            color: "bg-blue-200",
            textColor: "text-gray-800"
        },
        {
            title: "Strategic Branding Services",
            color: "bg-pink-200",
            textColor: "text-gray-800"
        }
    ];



    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <p className="text-gray-600 text-sm font-medium mb-4 tracking-wide">
                        Our Services
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Extensive Services To Become Your One-Stop Shop
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        With our comprehensive{' '}
                        <span className="font-semibold text-gray-800">
                            UI UX design and development
                        </span>{' '}
                        services, we aim to become your one-stop shop for your needs
                    </p>
                </div>

                {/* Services Cards - Centered with empty left/right sides */}
                <div className="flex justify-center items-center">
                    {/* Left empty space */}
                    <div className="flex-1"></div>
                    
                    {/* Center service bars */}
                    <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`
                                    ${service.color} 
                                    ${service.textColor}
                                    w-24 h-64 md:w-28 md:h-80 lg:w-32 lg:h-96
                                    rounded-3xl 
                                    flex items-center justify-center 
                                    p-4
                                    shadow-lg 
                                    hover:shadow-xl 
                                    transition-all 
                                    duration-300 
                                    hover:scale-105
                                    cursor-pointer
                                `}
                            >
                                <div className="text-center">
                                    <h3 className="font-semibold text-xs md:text-sm lg:text-base leading-tight writing-vertical-upward">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Right empty space */}
                    <div className="flex-1"></div>
                </div>
            </div>

            {/* Custom CSS for vertical text */}
            <style jsx>{`
                .writing-vertical-upward {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    transform: rotate(180deg);
                }
            `}</style>
        </div>
    );
};

export default Services;