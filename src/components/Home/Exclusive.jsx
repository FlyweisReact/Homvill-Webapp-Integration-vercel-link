import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import heart from '../assets/heart.svg';
import red from '../assets/RED.svg';
import arrow from '../assets/arrow.svg';
import location from '../assets/location.svg';
import bed from '../assets/bed.svg';
import bath from '../assets/bath.svg';
import square from '../assets/Icon (13).svg';
import { selectAuthToken } from '../../store/slices/authSlice';
import { useSelector } from 'react-redux';

const FeaturedCategories = () => {
    const [favorites, setFavorites] = useState({});
    const [properties, setProperties] = useState([]);
           const token = useSelector(selectAuthToken); // Changed from isLoggedIn

    // Fetch API
  useEffect(() => {
    const fetchProperties = async () => {
        try {

            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/properties/getall`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, // attach token
                },
            });

            const data = await res.json();

            if (data.success) {
                setProperties(data.data || []);
            } else {
                console.error("API Error:", data.message);
            }
        } catch (error) {
            console.error("Error fetching properties:", error);
        }
    };

    fetchProperties();
}, []);


    const toggleFavorite = (index) => {
        setFavorites((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="w-full px-4 sm:px-8 md:px-24 py-8 overflow-hidden">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div style={{ fontFamily: 'Poppins' }}>
                    <h2 style={{ fontWeight: '500' }} className="text-2xl sm:text-3xl md:text-2xl lg:text-[40px]">
                        Exclusive Properties Only For You
                    </h2>
                    <p className="text-sm sm:text-base md:text-[17px] mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet
                    </p>
                </div>
                <a
                    style={{ fontFamily: 'Poppins' }}
                    href="#"
                    className="text-sm sm:text-[15px] font-medium text-black flex items-center gap-1 mt-4 sm:mt-0"
                >
                    View All Categories <span>→</span>
                </a>
            </div>

            {/* Swiper Slider */}
            <div className="relative">
                <Swiper
                    modules={[Scrollbar]}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        640: { slidesPerView: 2, spaceBetween: 15 },
                        768: { slidesPerView: 2.5, spaceBetween: 15 },
                        1024: { slidesPerView: 2.5, spaceBetween: 20 },
                    }}
                    scrollbar={{ draggable: true, hide: false, el: '.custom-featured-scrollbar' }}
                    className="pb-8 featured-swiper"
                >
                    {properties.map((item, index) => (
                        <SwiperSlide key={item._id || index}>
                            <div className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[447/408] bg-white">
                                {/* Image Section */}
                                <div className="relative">
                                    <img
                                        src={item?.Property_photos?.[0]?.image || ''}
                                        alt={item?.Property_photos?.[0]?.Title || 'Property'}
                                        className="w-full h-[179px] sm:h-[98px] lg:h-[220px] object-cover"
                                    />
                                    {/* Promoted Label - dummy for now */}
                                    {index % 2 === 0 && (
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
                                            {item.Property_Listing_Description || 'No Title'}
                                        </h3>
                                        <p className="text-[18px] sm:text-[16px] md:text-[17px] lg:text-[22px] font-semibold text-[#EB664E]">
                                            ${item.Property_Listing_Price}
                                        </p>
                                    </div>
                                    <p className="text-sm sm:text-[13px] md:text-[16px] text-[#1A1A1A] flex items-center gap-1 mt-1 truncate">
                                        <span>
                                            <img src={location} alt="Location Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                                        </span>{' '}
                                        {item.Property_Address}, {item.Property_city}
                                    </p>
                                    <div className="flex justify-between items-center mt-3 sm:mt-2 md:mt-3">
                                        <div className="flex gap-3 sm:gap-2 md:gap-3 text-sm sm:text-[12px] md:text-[13px] lg:text-[16px] text-[#1A1A1A]">
                                            <span className="flex items-center gap-1">
                                                <img src={bed} alt="Bed Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                                                {item.Property_Bed_rooms} Beds
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <img src={bath} alt="Bath Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                                                {item.Property_Full_Baths} Baths
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <img src={square} alt="Square Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                                                {item.Property_finished_Sq_ft}
                                            </span>
                                        </div>
                                    </div>
                                    {/* Status Label */}
                                    <div style={{ fontFamily: 'Poppins' }} className="mt-4 sm:mt-3 md:mt-4 flex items-center gap-2 flex-wrap">
                                        <span
                                            className={`text-[13px] sm:text-[12px] md:text-[14px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full ${
                                                item.Properties_Status_id?.Pro_Status === 'RENT'
                                                    ? 'bg-[#00C6DB] text-black'
                                                    : 'bg-[#1F4B43] text-white'
                                            }`}
                                        >
                                            {item.Properties_Status_id?.Pro_Status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Scrollbar */}
                <div className="flex justify-center">
                    <div className="custom-featured-scrollbar !mt-8"></div>
                </div>
            </div>

            {/* Keep your styles untouched */}
 <style jsx>{`
                /* Hide the default Swiper scrollbar for this instance */
                .featured-swiper .swiper-scrollbar:not(.custom-featured-scrollbar) {
                    display: none !important;
                }

                .custom-featured-scrollbar {
                    background: #f1d5d5; /* Light pink background */
                    height: 4px !important; /* Thin scrollbar */
                    width: 100% !important; /* Full width for responsiveness */
                    max-width: 329px; /* Match desktop design */
                    margin: 0 auto;
                }

                .featured-swiper .swiper-scrollbar-drag {
                    background: #e91e63 !important; /* Pinkish-red drag bar */
                    height: 4px !important;
                }

                /* Ensure Swiper slide width is responsive */
                .featured-swiper .swiper-slide {
                    width: calc(100vw - 2rem) !important; /* Full width for mobile */
                }

                @media (max-width: 639px) {
                    .featured-swiper .swiper-slide {
                        width: calc(100vw - 2rem) !important; /* Ensure slide fits within viewport */
                    }
                    .featured-swiper .swiper-slide > div {
                        width: 100% !important; /* Make card take full slide width */
                        max-width: none !important; /* Remove max-width constraint */
                        aspect-ratio: 447 / 408; /* Maintain aspect ratio */
                    }
                    .featured-swiper .swiper-slide img {
                        width: 100% !important; /* Ensure image scales with card */
                        height: auto !important; /* Allow image height to adjust */
                        max-height: 179px; /* Limit image height to prevent overflow */
                        object-fit: cover;
                    }
                    .featured-swiper {
                        padding-left: 0 !important;
                        padding-right: 0 !important;
                    }
                    .custom-featured-scrollbar {
                        max-width: 90% !important; /* Slightly smaller scrollbar on mobile */
                    }
                    /* Adjust the promoted label for smaller screens */
                    .featured-swiper .swiper-slide .relative > div:first-child {
                        left: -10px !important; /* Adjust position to reduce cutoff */
                        font-size: 10px !important; /* Smaller font for mobile */
                        padding-left: 3rem !important; /* Reduce padding to make label narrower */
                        padding-right: 3rem !important;
                    }
                    /* Adjust icon sizes for mobile */
                    .featured-swiper .swiper-slide .flex.justify-between .flex img {
                        width: 12px !important; /* Smaller icons on mobile */
                        height: 12px !important;
                    }
                    /* Adjust card padding and content layout for mobile */
                    .featured-swiper .swiper-slide .p-4 {
                        padding: 0.75rem !important; /* Reduce padding to 12px on mobile */
                    }
                    .featured-swiper .swiper-slide .flex.items-center.gap-1.mt-1 {
                        flex-wrap: wrap !important; /* Allow address to wrap */
                        white-space: normal !important; /* Prevent truncation */
                    }
                    .featured-swiper .swiper-slide .flex.justify-between .flex {
                        flex-wrap: wrap !important; /* Allow beds/baths/sqft to wrap */
                        gap: 0.5rem !important; /* Reduce gap to fit better */
                    }
                    .featured-swiper .swiper-slide .flex.justify-between .flex span {
                        font-size: 11px !important; /* Slightly smaller text to fit better */
                    }
                }

                @media (min-width: 640px) {
                    .featured-swiper .swiper-slide {
                        width: calc((100vw - 4rem) / 2) !important;
                    }
                }

                @media (min-width: 768px) {
                    .featured-swiper .swiper-slide {
                        width: calc((100vw - 5rem) / 2.5) !important;
                    }
                }

                @media (min-width: 1024px) {
                    .featured-swiper .swiper-slide {
                        width: 447px !important; /* Fixed width for desktop */
                    }
                }

                /* Ensure card content is centered and proportional */
                .featured-swiper .swiper-slide > div {
                    margin: 0 auto;
                }
            `}</style>        </div>
    );
};

export default FeaturedCategories;
