import React from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import bg from './assets/bg9.svg'
import prof from './assets/prof.svg'
import Navbar2 from './Navbar2';
import { FaStar, FaRegStar } from 'react-icons/fa';
import Footer from './Footer';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
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
import red from './assets/RED.svg';
import arrow from './assets/arrow.svg';
import location from './assets/location.svg';
import bed from './assets/bed.svg';
import bath from './assets/bath.svg';
import square from './assets/Icon (13).svg';
import link from './assets/link4.jpg';
import links from './assets/links.jpg';
import links2 from './assets/links2.jpg';
const AgentCard = () => {
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
    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (index) => {
        setFavorites((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };
    return (
        <>
            <Navbar2 />
            {/* <div
                className="flex items-center text-white rounded overflow-hidden"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '20px 30px',
                }}
            >

                <div className="flex-shrink-0">
                    <img
                        src={prof}
                        alt="Agent"
                        className=""
                    />
                </div>


                <div style={{ fontFamily: 'Poppins' }} className="ml-12 grid grid-cols-3 gap-x-12 gap-y-8 w-full">
                    <div >
                        <h2 className="text-lg sm:text-[40px] font-bold">Jaydon Donin</h2>
                        <p className="text-sm sm:text-[25px] pt-6">Broker, Kaufman Hagan</p>
                        <p className="text-sm sm:text-[25px] pt-6">Denver, CO 80205</p>
                        <div className="flex items-center gap-2 mt-2 pt-16  cursor-pointer">
                            <FaRegCommentDots className='text-[32px]' />
                            <span className='sm:text-[32px] '>Send a Message</span>
                        </div>
                    </div>
                    <div className=''>
                        <h2 className="text-lg sm:text-[40px] font-bold">Specialities</h2>
                        <p className="text-sm sm:text-[25px] pt-6">Investments Sales Broker</p>
                        <p className="text-sm font-semibold sm:text-[32px] pt-6">Market</p>
                        <p className="text-sm sm:text-[25px] pt-6">Denver</p>
                        <div className="flex items-center gap-2 mt-2 pt-6  cursor-pointer">
                            <FaRegCommentDots className='text-[32px]' />
                            <span className='sm:text-[25px]'>Phone (720) 656-1478</span>
                        </div>
                    </div>
                    <div className=''>
                        <h2 className="text-lg sm:text-[40px] font-bold">Property Types</h2>
                        <p className="text-sm sm:text-[25px] pt-6">Land,Retail, Multi Family </p>
                        <p className="text-sm font-semibold sm:text-[32px] pt-6">Market</p>
                        <p className="text-sm sm:text-[25px] pt-6">Denver</p>

                    </div>


                </div>
            </div>
            <div className="px-20 py-4 bg-[#F7F7F7] font-[Poppins]">
                <h2 className="text-[#8A1538] font-bold text-[32px] mb-2">Bio</h2>

                <div className="border border-gray-400 rounded p-12 bg-white">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 text-[20px] text-gray-800">
                        <p>• Name: <span className="font-bold">Jaydon Donin</span></p>
                        <p>• Email: <span className="font-bold">example@gmail.com</span></p>
                        <p className="flex items-center gap-2">
                            • Ratings:
                            <span className="flex text-yellow-500 text-base">
                                <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
                            </span>
                        </p>

                        <p>• Phone Number: <span className="font-bold">+1 7761 784510</span></p>
                        <p>• Location: <span className="font-bold">ABC, Colony, 2456</span></p>
                        <p>• Response Time: <span className="font-bold">10 Mins</span></p>
                    </div>
                </div>
            </div> */}
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
    <img src={prof} alt="Agent" className=" object-cover" />
  </div>

  <div
    style={{ fontFamily: 'Poppins' }}
    className="ml-0 lg:ml-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 w-full"
  >
    <div>
      <h2 className="text-xl sm:text-[32px] font-bold">Jaydon Donin</h2>
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
        <span className="text-sm sm:text-[25px]">Phone (720) 656-1478</span>
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

<div className="px-4 sm:px-8 md:px-16 lg:px-20 py-6 bg-[#F7F7F7] font-[Poppins]">
  <h2 className="text-[#8A1538] font-bold text-[24px] sm:text-[32px] mb-4">Bio</h2>
  <div className="border border-gray-300 rounded p-6 sm:p-10 bg-white">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 text-[16px] sm:text-[18px] text-gray-800">
      <p>• Name: <span className="font-bold">Jaydon Donin</span></p>
      <p>• Email: <span className="font-bold">example@gmail.com</span></p>
      <p className="flex items-center gap-2">
        • Ratings:
        <span className="flex text-yellow-500 text-base">
          <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
        </span>
      </p>
      <p>• Phone Number: <span className="font-bold">+1 7761 784510</span></p>
      <p>• Location: <span className="font-bold">ABC, Colony, 2456</span></p>
      <p>• Response Time: <span className="font-bold">10 Mins</span></p>
    </div>
  </div>
</div>

            <div className="w-full px-4 bg-[#FFE0E9] sm:px-8 md:px-24 mt-12 py-8 overflow-hidden">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <div style={{ fontFamily: 'Poppins' }}>
                        <h2 style={{ fontWeight: '500' }} className="text-2xl sm:text-3xl md:text-2xl lg:text-[40px]">
                            Listings
                        </h2>
                        <p className="text-sm sm:text-base md:text-[17px] mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                    <select
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
                    </select>

                </div>

                {/* Swiper Slider */}
                <div className="relative">
                    <Swiper
                        modules={[Scrollbar]}
                        spaceBetween={10}
                        slidesPerView={1}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 2.5,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 2.5,
                                spaceBetween: 20,
                            },
                        }}
                        scrollbar={{ draggable: true, hide: false, el: '.custom-featured-scrollbar' }}
                        className="pb-8 featured-swiper"
                    >
                        {categories.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[447/408] bg-white">
                                    {/* Image Section */}
                                    <div className="relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-[179px] sm:h-[98px] lg:h-[220px] object-cover"
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
                                            <span><img src={location} alt="Location Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" /></span> {item.address}
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
                                                className={`text-[13px] sm:text-[12px] md:text-[14px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full ${item.status === 'For Rent'
                                                        ? 'bg-[#00C6DB] text-black'
                                                        : 'bg-[#1F4B43] text-white'
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
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Scrollbar Container */}
                    {/* <div className="flex justify-center">
                    <div className="custom-featured-scrollbar !mt-8"></div>
                </div> */}
                </div>

                {/* Custom Scrollbar Styling */}
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
            `}</style>
            </div>
            <Footer />
        </>
    );
};

export default AgentCard;
