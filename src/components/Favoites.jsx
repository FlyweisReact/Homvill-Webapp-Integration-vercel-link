import React, { useState } from 'react';
import propertyImage from './assets/homes.jpg'; // replace with your actual image path
import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from './Authprovider/AuthContext';
import rental from './assets/link.svg';
import land from './assets/link2.svg';
import town from './assets/link3.svg';
import modern from './assets/modern.svg';
import apart from './assets/apart.jpg';
import re from './assets/re.jpg';
import office from './assets/office.jpg';
import contract from './assets/contract.jpg';
import home from './assets/home.jpg';
import builder from './assets/builders.jpg';
import heart from './assets/heart.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import red from './assets/RED.svg';
import arrow from './assets/arrow.svg';
import location from './assets/location.svg';
import bed from './assets/bed.svg';
import bath from './assets/bath.svg';
import square from './assets/Icon (13).svg';
import link from './assets/link4.jpg';
import links from './assets/links.jpg';
import links2 from './assets/links2.jpg';

// Categories data
const categories = [
    {
        title: 'Skyper Pool Apartment',
        price: '$280,000',
        address: '1020 Bloomingdale AVE',
        beds: 4,
        baths: 2,
        size: '450 sqft',
        status: 'For Sale',
        promoted: true,
        image: rental,
    },
    {
        title: 'North Dillard Street',
        price: '$250/month',
        address: '4330 Bell Shoals RD',
        beds: 4,
        baths: 2,
        size: '400 sqft',
        status: 'For Rent',
        promoted: true,
        image: land,
    },
    {
        title: 'Eaton Garth Penthouse',
        price: '$180,000',
        address: '7722 18th AVE, Brooklyn',
        beds: 4,
        baths: 2,
        size: '450 sqft',
        status: 'For Sale',
        promoted: false,
        featured: true,
        image: town,
    },
    {
        title: 'Skyper Pool Apartment',
        price: '$280,000',
        address: '1020 Bloomingdale AVE',
        beds: 4,
        baths: 2,
        size: '450 sqft',
        status: 'For Sale',
        promoted: false,
        image: link,
    },
    {
        title: 'North Dillard Street',
        price: '$250/month',
        address: '4330 Bell Shoals RD',
        beds: 4,
        baths: 2,
        size: '400 sqft',
        status: 'For Rent',
        promoted: false,
        image: links,
    },
    {
        title: 'Eaton Garth Penthouse',
        price: '$180,000',
        address: '7722 18th AVE, Brooklyn',
        beds: 4,
        baths: 2,
        size: '450 sqft',
        status: 'For Sale',
        promoted: false,
        featured: true,
        image: links2,
    },
];
const FavoriteProperties = () => {
    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (index) => {
        setFavorites((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const handleClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const { isLoggedIn } = useAuth();
    return (
        <>
            {isLoggedIn ? <Navbar2 /> : <Navbar />}
            <div className="flex flex-col md:flex-row items-center justify-between  mx-12 px-6 ">
                {/* Text Section */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 style={{ fontFamily: 'Poppins' }} className="text-2xl md:text-[46px] font-bold text-gray-800 md:mt-0 mt-6 leading-snug">
                        Your favorite properties <br /> listed here
                    </h2>
                    <p style={{ fontFamily: 'Poppins' }} className="text-[20px] text-gray-600 mt-4">
                        Save and revisit your preferred properties anytime. Keep track of your top choices effortlessly.
                    </p>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2">
                    <img
                        src={propertyImage}
                        alt="Property"
                        className="rounded-md w-full h-auto object-cover shadow-md"
                    />
                </div>
            </div>
            {/* Grid Layout (Responsive) */}

            <div
                style={{ fontFamily: 'Poppins' }}
                className="px-4 sm:px-6 md:px-8 lg:px-12 mt-12 py-6 sm:py-8 bg-[#FFE0E9]"
            >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-medium text-gray-800 text-start px-4">
                    Your Favorite Properties
                </h2>
                <p className="text-gray-600 mb-4 sm:mb-6 mt-2 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-[17px] text-start px-4">
                    Lorem ipsum dolor sit amet
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[447/408] bg-white mx-auto"
                        >
                            {/* Image Section */}
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-[179px] sm:h-[98px] lg:h-[200px] object-cover"
                                />
                                {item.promoted && (
                                    <div
                                        style={{ fontFamily: 'Roboto' }}
                                        className="absolute top-4 left-[-30px] bg-orange-500 text-white text-[12px] sm:text-[11px] md:text-[12px] font-semibold px-8 py-1 rotate-[-45deg] shadow-md z-10"
                                    >
                                        PROMOTED
                                    </div>
                                )}
                                <div
                                    onClick={() => toggleFavorite(index)}
                                    className="absolute top-2 right-2 p-2 rounded-full cursor-pointer bg-[#1A1A1A]/20"
                                >
                                    <img
                                        src={favorites[index] ? red : heart}
                                        alt="Heart Icon"
                                        className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                                    />
                                </div>
                                {/* Arrow Icon */}
                                <div className="absolute top-2 right-14 bg-[#1A1A1A]/20 p-2 rounded-full">
                                    <img src={arrow} alt="Arrow Icon" className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                </div>
                            </div>

                            {/* Property Details */}
                            <div style={{ fontFamily: 'Poppins' }} className="p-4 sm:p-3 md:p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-[16px] sm:text-[14px] md:text-[15px] lg:text-[19px] font-semibold text-[#1A1A1A] truncate">
                                        {item.title}
                                    </h3>
                                    <p className="text-[18px] sm:text-[16px] md:text-[17px] lg:text-[22px] font-semibold text-[#EB664E]">
                                        {item.price}
                                    </p>
                                </div>
                                <p className="text-sm sm:text-[13px] md:text-[16px] text-[#1A1A1A] flex items-center gap-1 mt-1 truncate">
                                    <span>
                                        <img src={location} alt="Location Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                                    </span>{' '}
                                    {item.address}
                                </p>
                                <div className="flex justify-between items-center mt-3 sm:mt-2 md:mt-3">
                                    <div className="flex gap-3 sm:gap-2 md:gap-3 text-sm sm:text-[12px] md:text-[13px] lg:text-[16px] text-[#1A1A1A]">
                                        <span className="flex items-center gap-1">
                                            <img src={bed} alt="Bed Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                                            {item.beds} Beds
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <img src={bath} alt="Bath Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                                            {item.baths} Baths
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <img src={square} alt="Square Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                                            {item.size}
                                        </span>
                                    </div>
                                </div>

                                {/* Status Label with Featured */}
                                <div style={{ fontFamily: 'Poppins' }} className="mt-4 sm:mt-3 md:mt-4 flex items-center gap-2 flex-wrap">
                                    <span
                                        className={`text-[13px] sm:text-[12px] md:text-[14px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full ${item.status === 'For Rent' ? 'bg-[#00C6DB] text-black' : 'bg-[#1F4B43] text-white'
                                            }`}
                                    >
                                        {item.status.toUpperCase()}
                                    </span>
                                    {item.promoted && <span>🔥</span>}
                                    {item.featured && (
                                        <span className="text-[13px] sm:text-[12px] md:text-[13px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full bg-[#E7C873] text-black">
                                            FEATURED
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center mt-8 justify-center pb-4 space-x-4 text-sm text-black">
                    <button
                        onClick={() => handleClick(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="disabled:text-gray-300"
                    >
                        <FiChevronLeft />
                    </button>

                    {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        const isActive = page === currentPage;
                        return (
                            <button
                                key={page}
                                onClick={() => handleClick(page)}
                                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all
                              ${isActive
                                        ? 'bg-pink-100 border border-[#832333] text-black'
                                        : 'hover:bg-gray-100'}`}
                            >
                                {page}
                            </button>
                        );
                    })}

                    <button
                        onClick={() => handleClick(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="disabled:text-gray-300"
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </div>

            <Footer />

        </>
    );
};

export default FavoriteProperties;
