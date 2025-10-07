import React, { useState, useEffect } from 'react';
import { FaRegCommentDots, FaStar, FaRegStar, FaSpinner } from 'react-icons/fa';
import bg from './assets/bg9.svg';
import prof from './assets/prof.svg';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import heart from './assets/heart.svg';
import red from './assets/RED.svg';
import arrow from './assets/arrow.svg';
import location from './assets/location.svg';
import bed from './assets/bed.svg';
import bath from './assets/bath.svg';
import square from './assets/Icon (13).svg';
import { useGetUserByAuthQuery } from '../store/api/userApiSlice';
import { selectAuthToken } from '../store/slices/authSlice';
import { useSelector } from 'react-redux';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const AgentCard = () => {
    const { data: user, isLoading, isError, error } = useGetUserByAuthQuery();
    const token = useSelector(selectAuthToken);
    const [favorites, setFavorites] = useState({});
    const [properties, setProperties] = useState([]);
    const [isLoadingProperties, setIsLoadingProperties] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchProperties = async () => {
            if (!token) return;
            setIsLoadingProperties(true);
            try {
                const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/properties/getall`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await res.json();
                if (data.success) {
                    setProperties(data.data || []);
                    setTotalPages(Math.ceil((data.count || 0) / itemsPerPage));
                } else {
                    console.error('API Error:', data.message);
                }
            } catch (error) {
                console.error('Error fetching properties:', error);
            } finally {
                setIsLoadingProperties(false);
            }
        };

        fetchProperties();
    }, [token]);

    const toggleFavorite = (index) => {
        setFavorites((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProperties = properties.slice(startIndex, startIndex + itemsPerPage);

    const handleClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const defaultUser = {
        Name: 'Jaydon',
        last_name: 'Donin',
        email: 'example@gmail.com',
        phone: '+1 7761 784510',
        user_id: 1,
    };

    const userData = isLoading || isError ? defaultUser : user;

    return (
        <>
            <Navbar2 />
            {isLoading && (
                <div className="flex justify-center items-center py-8">
                    <FaSpinner className="animate-spin text-[#8A1538] w-8 h-8" />
                    <span className="ml-2 text-gray-600">Loading Agent Details...</span>
                </div>
            )}
            {isError && (
                <div className="text-center text-red-600 py-8">
                    <p>Error loading agent data: {error?.data?.message || 'An error occurred'}</p>
                    <p>Displaying fallback data.</p>
                </div>
            )}
            {!isLoading && !isError && (
                <div
                    className="flex flex-col lg:flex-row items-center text-white rounded overflow-hidden"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: '20px 20px',
                    }}
                >
                    <div className="flex-shrink-0 mb-6 lg:mb-0">
                        <img
                            src={userData.user_image || prof}
                            alt="Agent"
                            className="object-cover"
                        />
                    </div>
                    <div
                        style={{ fontFamily: 'Poppins' }}
                        className="ml-0 lg:ml-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 w-full"
                    >
                        <div>
                            <h2 className="text-xl sm:text-[32px] font-bold">
                                {userData.Name} {userData.last_name}
                            </h2>
                            <p className="text-sm sm:text-[25px] pt-4">Broker, Kaufman Hagan</p>
                            <p className="text-sm sm:text-[25px] pt-2">Denver, CO 80205</p>
                            <div className="flex items-center gap-2 mt-6 cursor-pointer">
                                <FaRegCommentDots className="text-[20px] sm:text-[28px]" />
                                <span className="text-sm sm:text-[25px]">Send a Message</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-[32px] font-bold">Specialities</h2>
                            <p className="text-sm sm:text-[25px] pt-4">Investments Sales Broker</p>
                            <p className="text-sm font-semibold sm:text-[25px] pt-4">Market</p>
                            <p className="text-sm sm:text-[25px] pt-2">Denver</p>
                            <div className="flex items-center gap-2 mt-4 cursor-pointer">
                                <FaRegCommentDots className="text-[20px] sm:text-[24px]" />
                                <span className="text-sm sm:text-[25px]">{userData.phone}</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-[32px] font-bold">Property Types</h2>
                            <p className="text-sm sm:text-[25px] pt-4">Land, Retail, Multi Family</p>
                            <p className="text-sm font-semibold sm:text-[25px] pt-4">Market</p>
                            <p className="text-sm sm:text-[25px] pt-2">Denver</p>
                        </div>
                    </div>
                </div>
            )}
            {!isLoading && !isError && (
                <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-6 bg-[#F7F7F7] font-[Poppins]">
                    <h2 className="text-[#8A1538] font-bold text-[24px] sm:text-[32px] mb-4">Bio</h2>
                    <div className="border border-gray-300 rounded p-6 sm:p-10 bg-white">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 text-[16px] sm:text-[18px] text-gray-800">
                            <p>
                                • Name: <span className="font-bold">{userData.Name} {userData.last_name}</span>
                            </p>
                            <p>• Email: <span className="font-bold">{userData.email}</span></p>
                            <p className="flex items-center gap-2">
                                • Ratings:
                                <span className="flex text-yellow-500 text-base">
                                    <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
                                </span>
                            </p>
                            <p>• Phone Number: <span className="font-bold">{userData.phone}</span></p>
                            <p>• Location: <span className="font-bold">ABC, Colony, 2456</span></p>
                            <p>• Response Time: <span className="font-bold">10 Mins</span></p>
                        </div>
                    </div>
                </div>
            )}
            <div className="w-full px-4 bg-[#FFE0E9] sm:px-8 md:px-24 mt-12 py-8 overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <div style={{ fontFamily: 'Poppins' }}>
                        <h2 style={{ fontWeight: '500' }} className="text-2xl sm:text-3xl md:text-2xl lg:text-[40px]">
                            Listings
                        </h2>
                        <p className="text-sm sm:text-base md:text-[17px] mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                    {/* <select
                        className="text-sm sm:text-[15px] font-medium text-black bg-white border border-gray-300 rounded px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8A1538]"
                        style={{ fontFamily: 'Poppins' }}
                    >
                        <option value="all">All</option>
                        <option value="furniture">Furniture</option>
                        <option value="electronics">Electronics</option>
                        <option value="appliances">Appliances</option>
                        <option value="kitchenware">Kitchenware</option>
                        <option value="decor">Décor</option>
                        <option value="lighting">Lighting</option>
                        <option value="outdoor">Outdoor</option>
                    </select> */}
                </div>
                {isLoadingProperties ? (
                    <div className="flex justify-center items-center py-8">
                        <FaSpinner className="animate-spin text-[#8A1538] w-8 h-8" />
                        <span className="ml-2 text-gray-600">Loading Properties...</span>
                    </div>
                ) : (
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
                            {paginatedProperties.map((item, index) => (
                                <SwiperSlide key={item._id || index}>
                                    <div className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[447/408] bg-white">
                                        <div className="relative">
                                            <img
                                                src={item?.Property_photos?.[0]?.image || ''}
                                                alt={item?.Property_photos?.[0]?.Title || 'Property'}
                                                className="w-full h-[179px] sm:h-[98px] lg:h-[220px] object-cover"
                                            />
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
                                            <div className="absolute top-2 right-14 bg-[#1A1A1A]/20 p-2 rounded-full">
                                                <img src={arrow} alt="Arrow Icon" className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                            </div>
                                        </div>
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
                                                <span><img src={location} alt="Location Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" /></span> {item.Property_Address}, {item.Property_city}
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
                                                {index % 2 === 0 && <span>🔥</span>}
                                                {item.featured && (
                                                    <span className="text-[13px] sm:text-[12px] md:text-[13px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full bg-[#E7C873] text-black">
                                                        FEATURED
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
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
                                            ${isActive ? 'bg-pink-100 border border-[#832333] text-black' : 'hover:bg-gray-100'}`}
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
                )}
                <style jsx>{`
                    .featured-swiper .swiper-scrollbar:not(.custom-featured-scrollbar) {
                        display: none !important;
                    }
                    .custom-featured-scrollbar {
                        background: #f1d5d5;
                        height: 4px !important;
                        width: 100% !important;
                        max-width: 329px;
                        margin: 0 auto;
                    }
                    .featured-swiper .swiper-scrollbar-drag {
                        background: #e91e63 !important;
                        height: 4px !important;
                    }
                    .featured-swiper .swiper-slide {
                        width: calc(100vw - 2rem) !important;
                    }
                    @media (max-width: 639px) {
                        .featured-swiper .swiper-slide {
                            width: calc(100vw - 2rem) !important;
                        }
                        .featured-swiper .swiper-slide > div {
                            width: 100% !important;
                            max-width: none !important;
                            aspect-ratio: 447 / 408;
                        }
                        .featured-swiper .swiper-slide img {
                            width: 100% !important;
                            height: auto !important;
                            max-height: 179px;
                            object-fit: cover;
                        }
                        .featured-swiper {
                            padding-left: 0 !important;
                            padding-right: 0 !important;
                        }
                        .custom-featured-scrollbar {
                            max-width: 90% !important;
                        }
                        .featured-swiper .swiper-slide .relative > div:first-child {
                            left: -10px !important;
                            font-size: 10px !important;
                            padding-left: 3rem !important;
                            padding-right: 3rem !important;
                        }
                        .featured-swiper .swiper-slide .flex.justify-between .flex img {
                            width: 12px !important;
                            height: 12px !important;
                        }
                        .featured-swiper .swiper-slide .p-4 {
                            padding: 0.75rem !important;
                        }
                        .featured-swiper .swiper-slide .flex.items-center.gap-1.mt-1 {
                            flex-wrap: wrap !important;
                            white-space: normal !important;
                        }
                        .featured-swiper .swiper-slide .flex.justify-between .flex {
                            flex-wrap: wrap !important;
                            gap: 0.5rem !important;
                        }
                        .featured-swiper .swiper-slide .flex.justify-between .flex span {
                            font-size: 11px !important;
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
                            width: 447px !important;
                        }
                    }
                    .featured-swiper .swiper-slide > div {
                        margin: 0 auto;
                    }
                `}</style>
            </div>
            <Footer />
        </>
    );
};

export default AgentCard;