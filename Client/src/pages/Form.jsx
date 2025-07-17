import { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        fullName: '',
        workEmail: '',
        phone: '',
        companyWebsite: '',
        helpNeeded: '',
        projectStart: '',
        budget: '',
        agreeToTerms: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const helpOptions = [
        'UX Audits',
        'UI/UX Design',
        'Branding',
        'E-commerce Solutions',
        'Shopify Development',
        'WordPress Development',
        'Other'
    ];

    const projectTimeline = [
        'ASAP',
        'Within 1 month',
        'Within 2-3 months',
        'Within 6 months',
        'Not sure yet'
    ];

    const budgetRanges = [
        '$5,000 - $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        '$50,000 - $100,000',
        '$100,000+'
    ];

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.workEmail.trim()) {
            newErrors.workEmail = 'Work email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
            newErrors.workEmail = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        }

        if (!formData.helpNeeded) {
            newErrors.helpNeeded = 'Please select what you need help with';
        }

        if (!formData.projectStart) {
            newErrors.projectStart = 'Please select when you want to start';
        }

        if (!formData.budget) {
            newErrors.budget = 'Please select your estimated budget';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to terms and conditions';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            alert('Form submitted successfully! We will contact you soon.');
            setFormData({
                fullName: '',
                workEmail: '',
                phone: '',
                companyWebsite: '',
                helpNeeded: '',
                projectStart: '',
                budget: '',
                agreeToTerms: false
            });
        } catch (error) {
            alert('There was an error submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };


    const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 6)); // July 2025

  const timeSlots = {
    am: [
      { time: '09:00 AM', available: true },
      { time: '10:00 AM', available: true },
      { time: '11:00 AM', available: true }
    ],
    pm: [
      { time: '12:00 PM', available: true },
      { time: '01:00 PM', available: true },
      { time: '02:00 PM', available: true },
      { time: '03:00 PM', available: true },
      { time: '04:00 PM', available: true },
      { time: '05:00 PM', available: true }
    ]
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const formatDate = (date) => {
    const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  const getMonthName = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const handleDateClick = (day) => {
    if (day) {
      const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      setSelectedDate(newDate);
      setSelectedTime(null); // Reset time when date changes
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      alert(`Appointment scheduled for ${formatDate(selectedDate)} at ${selectedTime}`);
    } else {
      alert('Please select both date and time');
    }
  };

  const days = getDaysInMonth(currentMonth);
  const today = new Date();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Mad Brains: Power Up!
                    </h1>
                    <p className="text-lg text-gray-600">
                        Transform your vision into reality with our expertise
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Form Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.fullName ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                                        }`}
                                />
                                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                            </div>

                            {/* Work Email */}
                            <div>
                                <input
                                    type="email"
                                    name="workEmail"
                                    placeholder="Work Email *"
                                    value={formData.workEmail}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.workEmail ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                                        }`}
                                />
                                {errors.workEmail && <p className="text-red-500 text-sm mt-1">{errors.workEmail}</p>}
                            </div>

                            {/* Phone */}
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone*"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                                        }`}
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>

                            {/* Company Website */}
                            <div>
                                <input
                                    type="url"
                                    name="companyWebsite"
                                    placeholder="Company Website"
                                    value={formData.companyWebsite}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                                />
                            </div>

                            {/* What do you need help with */}
                            <div>
                                <select
                                    name="helpNeeded"
                                    value={formData.helpNeeded}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.helpNeeded ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                                        }`}
                                >
                                    <option value="">What do you need help with?*</option>
                                    {helpOptions.map((option) => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                {errors.helpNeeded && <p className="text-red-500 text-sm mt-1">{errors.helpNeeded}</p>}
                            </div>

                            {/* Project Timeline */}
                            <div>
                                <select
                                    name="projectStart"
                                    value={formData.projectStart}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.projectStart ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                                        }`}
                                >
                                    <option value="">How soon you want to Start Project</option>
                                    {projectTimeline.map((option) => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                {errors.projectStart && <p className="text-red-500 text-sm mt-1">{errors.projectStart}</p>}
                            </div>

                            {/* Budget */}
                            <div>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.budget ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                                        }`}
                                >
                                    <option value="">What is your estimated budget for this project?</option>
                                    {budgetRanges.map((range) => (
                                        <option key={range} value={range}>{range}</option>
                                    ))}
                                </select>
                                {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                            </div>

                            {/* Terms and Conditions */}
                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleInputChange}
                                    className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                />
                                <div className="text-sm">
                                    <label className="text-gray-700">
                                        I agree to <span className="text-orange-600 underline cursor-pointer">terms & conditions</span> provided by the company. By providing my phone number, I agree to receive text messages from the business.
                                    </label>
                                    {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-6 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Booking...' : 'Book a Call'}
                            </button>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="mb-8">
                            <p className="text-orange-500 font-semibold mb-2">CONTACT US</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Transform Your Vision into Reality with{' '}
                                <span className="text-orange-500">Our Expertise</span>
                            </h2>
                        </div>

                        {/* Service Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {['UX Audits', 'UI/UX Design', 'Branding', 'E-commerce Solutions', 'Shopify Development', 'WordPress Development'].map((service) => (
                                <span
                                    key={service}
                                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>

                        {/* Service Details */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                <div>
                                    <p className="font-semibold text-gray-900">UX Audits –</p>
                                    <p className="text-gray-600">Identify usability challenges and enhance user experience with our comprehensive UX audits.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                <div>
                                    <p className="font-semibold text-gray-900">UI/UX Design –</p>
                                    <p className="text-gray-600">Create intuitive and visually compelling interfaces that engage users and drive results.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                <div>
                                    <p className="font-semibold text-gray-900">Branding –</p>
                                    <p className="text-gray-600">Build a memorable brand identity that resonates with your audience and leaves a lasting impression.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                <div>
                                    <p className="font-semibold text-gray-900">E-commerce Solutions –</p>
                                    <p className="text-gray-600">Boost Sales with Seamless E-commerce Experiences</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                <div>
                                    <p className="font-semibold text-gray-900">Shopify Development –</p>
                                    <p className="text-gray-600">Launch, scale, and optimize your Shopify store with custom solutions designed for success.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                <div>
                                    <p className="font-semibold text-gray-900">WordPress Development –</p>
                                    <p className="text-gray-600">Develop a robust, secure, and scalable WordPress site tailored to your specific needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Companies Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 mt-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Join <span className="text-orange-500">Over 5,000 Companies</span> from Small Business to Enterprise
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
                        {/* Instacart */}
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-green-500 rounded"></div>
                            <span className="text-lg font-semibold text-gray-800">Instacart</span>
                        </div>

                        {/* JustTravel */}
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                            <span className="text-lg font-semibold text-gray-800">JustTravel</span>
                        </div>

                        {/* Creationsoft */}
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-blue-600 rounded"></div>
                            <span className="text-lg font-semibold text-gray-800">creationsoft</span>
                        </div>

                        {/* Barbecue */}
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-orange-500 rounded"></div>
                            <span className="text-lg font-semibold text-gray-800">BARBECUE</span>
                        </div>

                        {/* Prograd */}
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-green-600 rounded"></div>
                            <span className="text-lg font-semibold text-gray-800">prograd</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            Book a Call to Get
                        </h2>
                        <h3 className="text-4xl font-bold text-gray-900">
                            Your Custom Strategy
                        </h3>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {/* Site Audit */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center">
                                        <div className="w-8 h-10 bg-gray-800 rounded-sm flex items-center justify-center">
                                            <div className="w-4 h-6 bg-white rounded-sm"></div>
                                        </div>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-16 h-12 bg-blue-500 rounded-lg transform rotate-12"></div>
                                    <div className="absolute -bottom-2 -left-2 w-16 h-12 bg-green-400 rounded-lg transform -rotate-12"></div>
                                    <div className="absolute top-4 right-8 w-12 h-8 bg-orange-400 rounded-lg transform rotate-45"></div>
                                </div>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                                Site Audit
                            </h4>
                            <p className="text-gray-600 text-center leading-relaxed">
                                A comprehensive review of your website's health to uncover issues and enhance performance.
                            </p>
                        </div>

                        {/* Action Plan */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                                        <div className="w-8 h-8 bg-white rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-0 border-4 border-orange-500 rounded-full"></div>
                                    <div className="absolute top-1 left-1 w-4 h-4 bg-orange-600 rounded-full"></div>
                                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-orange-600 rounded-full"></div>
                                    <div className="absolute top-1 right-1 w-4 h-4 bg-orange-600 rounded-full"></div>
                                    <div className="absolute bottom-1 left-1 w-4 h-4 bg-orange-600 rounded-full"></div>
                                    <div className="absolute -top-3 -right-3 w-12 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                                        <div className="w-6 h-4 bg-yellow-400 rounded-sm"></div>
                                    </div>
                                </div>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                                Action Plan
                            </h4>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Strategically crafted steps to address audit findings and drive measurable improvements.
                            </p>
                        </div>

                        {/* Quote */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                                        <span className="text-white text-xs font-medium">Transparent</span>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
                                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
                                    <div className="absolute top-6 -right-4 bg-white rounded-lg p-2 shadow-md">
                                        <span className="text-xs text-gray-600">Time estimate</span>
                                    </div>
                                    <div className="absolute -bottom-4 right-2 w-12 h-8 bg-purple-400 rounded-lg"></div>
                                </div>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                                Quote
                            </h4>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Get a detailed and transparent estimate tailored to your specific needs and long-term goals.
                            </p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full inline-flex items-center space-x-2 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                            </svg>
                            <span>Book a call</span>
                        </button>
                    </div>
                </div>
            </div>


            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
          {/* <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.09-.21 2.16-.58 3.16-1.1-1.18-1.46-1.91-3.32-1.91-5.4 0-4.42 3.58-8 8-8 .34 0 .67.03 1 .07V7L12 2z"/>
          </svg> */}
          
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Pick a Date and Time</h2>
          
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={handlePrevMonth}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <h3 className="text-lg font-medium">{getMonthName(currentMonth)}</h3>
            
            <button 
              onClick={handleNextMonth}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
            
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => handleDateClick(day)}
                disabled={!day}
                className={`
                  h-10 w-10 rounded-full text-sm font-medium transition-colors
                  ${!day ? 'invisible' : ''}
                  ${day && selectedDate && selectedDate.getDate() === day 
                    ? 'bg-blue-500 text-white' 
                    : 'hover:bg-gray-100 text-gray-700'
                  }
                  ${day === today.getDate() && 
                    currentMonth.getMonth() === today.getMonth() && 
                    currentMonth.getFullYear() === today.getFullYear()
                    ? 'bg-blue-100 text-blue-600' : ''
                  }
                `}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Timezone */}
          <div className="text-sm text-gray-500 mb-4">
            <select className="border rounded px-2 py-1">
              <option>GMT+05:30 Asia/Calcutta (GMT+5:30)</option>
            </select>
          </div>

          {/* Selected Date Display */}
          {selectedDate && (
            <div className="text-sm text-blue-600 mb-4">
              Available Starting times for {formatDate(selectedDate)}
            </div>
          )}
        </div>

        {/* Time Slots Section */}
        <div>
          {selectedDate ? (
            <div className="space-y-6">
              {/* AM Slots */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">AM</h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.am.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => handleTimeClick(slot.time)}
                      disabled={!slot.available}
                      className={`
                        p-3 rounded-lg text-sm font-medium transition-colors
                        ${selectedTime === slot.time 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }
                        ${!slot.available ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>

              {/* PM Slots */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">PM</h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.pm.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => handleTimeClick(slot.time)}
                      disabled={!slot.available}
                      className={`
                        p-3 rounded-lg text-sm font-medium transition-colors
                        ${selectedTime === slot.time 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }
                        ${!slot.available ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Load More */}
              <button className="text-blue-500 text-sm hover:underline">
                Load More
              </button>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              Please select a date to view available times
            </div>
          )}
        </div>
      </div>

      {/* Confirm Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handleConfirm}
          disabled={!selectedDate || !selectedTime}
          className={`
            px-8 py-3 rounded-lg font-medium transition-colors
            ${selectedDate && selectedTime 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          Select Date & Time
        </button>
      </div>

      {/* Selected Summary */}
      {selectedDate && selectedTime && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg text-center">
          <p className="text-sm text-blue-700">
            Selected: {formatDate(selectedDate)} at {selectedTime}
          </p>
        </div>
      )}
    </div>
        </div>
    );
}

export default Form;