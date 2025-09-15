
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import rental from '../assets/rental.svg';
import land from '../assets/land.svg';
import town from '../assets/town.svg';
import modern from '../assets/modern.svg';
import apart from '../assets/apart.jpg';
import re from '../assets/re.jpg';
import office from '../assets/office.jpg';
import contract from '../assets/contract.jpg';
import home from '../assets/home.jpg';
import builder from '../assets/builders.jpg';

const categories = [
    {
        title: 'Rentals/Lease Apartment',
        properties: '2 Properties',
        image: rental,
    },
    {
        title: 'Land',
        properties: '10 Properties',
        image: land,
    },
    {
        title: 'Town House',
        properties: '2 Properties',
        image: town,
    },
    {
        title: 'Modern Villa',
        properties: '10 Properties',
        image: modern,
    },
    {
        title: 'Apartment',
        properties: '3 Properties',
        image: apart,
    },
    {
        title: 'Single Family',
        properties: '5 Properties',
        image: re,
    },
    {
        title: 'Office',
        properties: '3 Properties',
        image: office,
    },
    {
        title: 'Find a Contractor',
        properties: '3 Properties',
        image: contract,
    },
    {
        title: 'Home For Sell',
        properties: '5 Properties',
        image: home,
    },
    {
        title: 'Home Builders',
        properties: '3 Properties',
        image: builder,
    },
];

const FeaturedCategories = () => {
    return (
        <div className="w-full px-4 sm:px-8 lg:px-24 !py-10 overflow-hidden">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div style={{ fontFamily: 'Poppins' }}>
                    <h2 style={{fontWeight:'500'}} className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px]">
                        Featured Categories
                    </h2>
                    <p className="text-sm sm:text-base md:text-[17px]  mt-4  text-gray-500">
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
                            slidesPerView: 3.5,
                            spaceBetween: 20,
                        },
                    }}
                    scrollbar={{ draggable: true, hide: false, el: '.custom-swiper-scrollbar' }}
                    className="pb-8"
                >
                    {categories.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="rounded-xl overflow-hidden relative group shadow-md w-full max-w-[328px] aspect-[338/408]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay Title (Top) */}
                                <div
                                    style={{
                                        fontFamily: 'Poppins',
                                        background:
                                            'linear-gradient(180deg, rgba(26, 26, 26, 0.8) 0%, rgba(26, 26, 26, 0.1) 60%, rgba(0, 0, 0, 0) 100%)',
                                    }}
                                    className="absolute top-0 left-0 w-full p-4 sm:p-6 text-white"
                                >
                                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-semibold leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-base sm:text-lg md:text-xl mt-4 lg:text-[24px]">
                                        {item.properties}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Scrollbar Container */}
                <div className="flex justify-center">
                    <div className="custom-swiper-scrollbar !mt-4"></div>
                </div>
            </div>

            {/* Custom Scrollbar Styling */}
            <style jsx>{`
                /* Hide the default Swiper scrollbar */
                .swiper-scrollbar:not(.custom-swiper-scrollbar) {
                    display: none !important;
                }

                .custom-swiper-scrollbar {
                    background: #f1d5d5; /* Light pink background */
                    height: 4px !important; /* Thin scrollbar */
                    width: 100% !important; /* Full width for responsiveness */
                    max-width: 329px; /* Match desktop design */
                    margin: 0 auto;
                }

                .swiper-scrollbar-drag {
                    background: #e91e63; /* Pinkish-red drag bar */
                    height: 4px !important;
                }

                /* Ensure Swiper slide width is responsive */
                .swiper-slide {
                    width: calc(100vw - 2rem) !important; /* Full width for mobile */
                }

                @media (min-width: 640px) {
                    .swiper-slide {
                        width: calc((100vw - 4rem) / 2) !important;
                    }
                }

                @media (min-width: 768px) {
                    .swiper-slide {
                        width: calc((100vw - 5rem) / 2.5) !important;
                    }
                }

                @media (min-width: 1024px) {
                    .swiper-slide {
                        width: 338px !important; /* Fixed width for desktop */
                    }
                }
            `}</style>
        </div>
    );
};

export default FeaturedCategories;