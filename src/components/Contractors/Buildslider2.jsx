import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import profile from '../assets/Rectangle 34625623 (1).svg';
import recent from '../assets/recent.svg';
import recent2 from '../assets/recent2.svg';
import recent3 from '../assets/recent3.jpg';
import recent4 from '../assets/recent4.jpg';
import address from '../assets/entypo_address.svg';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import money from '../assets/Vector (71).svg';
import 'swiper/css/navigation';
import { FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';

const RecentWorks = () => {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
const navigate = useNavigate();
    const handleSwiper = (swiper) => {
        swiperRef.current = swiper;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const works = [
        {
            img: recent,
            address: 'Address: Lorem Ipsum is simply dummy text',
            cost: 'Cost (approx.): $100,000.00',
        },
        {
            img: recent2,
            address: 'Address: Lorem Ipsum is simply dummy text',
            cost: 'Cost (approx.): $100,000.00',
        },
        {
            img: recent3,
            address: 'Address: Lorem Ipsum is simply dummy text',
            cost: 'Cost (approx.): $100,000.00',
        },
        {
            img: recent4,
            address: 'Address: Lorem Ipsum is simply dummy text',
            cost: 'Cost (approx.): $100,000.00',
        },
    ];

    return (
        <div className="bg-gray-50 px-4 mt-12 sm:px-6 md:px-12 py-6 sm:py-8 md:py-10 mx-auto">
            <div className="flex flex-col min-[769px]:flex-row min-[769px]:[&>div]:w-3/4 min-[769px]:[&>div+div]:w-1/4 gap-4 sm:gap-6 md:gap-8">
                {/* Slider Section (On Left) */}
                <div className="w-full relative max-[768px]:w-full">
                    <h2 style={{ fontFamily: 'Poppins' }} className="text-xl sm:text-2xl md:text-[32px] font-bold mb-4 sm:mb-5 md:mb-6 text-black max-[768px]:text-2xl">
                        His Most Recent Works
                    </h2>

                    {/* Left Arrow (Visible when NOT at end, moves right) */}
                    {!isEnd && (
                        <div
                            className="absolute top-1/2 -left-0 z-10 w-8 sm:w-10 h-12 sm:h-16 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer transform -translate-y-1/2 max-[768px]:w-8 max-[768px]:h-12"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500 transform rotate-180 max-[768px]:w-4 max-[768px]:h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    )}

                    {/* Right Arrow (Visible when NOT at beginning, moves left) */}
                    {!isBeginning && (
                        <div
                            className="absolute top-1/2 -right-0 z-10 w-8 sm:w-10 h-12 sm:h-16 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer transform -translate-y-1/2 max-[768px]:w-8 max-[768px]:h-12"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500 max-[768px]:w-4 max-[768px]:h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    )}

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={1}
                        onSwiper={handleSwiper}
                        onSlideChange={(swiper) => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 1, spaceBetween: 10 },
                            769: { slidesPerView: 2, spaceBetween: 20 },
                            900: { slidesPerView: 2.5, spaceBetween: 20 },
                        }}
                        className="pb-6 sm:pb-8 md:pb-10 max-[768px]:pb-8"
                    >
                        {works.map((work, index) => (
                            <SwiperSlide key={index}>
                                <div className="rounded-2xl overflow-hidden shadow-md relative">
                                    <img
                                        src={work.img}
                                        alt="Work"
                                        className="w-full h-48 sm:h-56 md:h-60 object-cover max-[768px]:h-56"
                                    />
                                    <div
                                        style={{ fontFamily: 'Poppins' }}
                                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/10 to-white/10 backdrop-blur-xl text-white p-3 sm:p-4 rounded-b-2xl text-xs sm:text-sm max-[768px]:p-3 max-[768px]:text-sm"
                                    >
                                        <div className="flex items-center gap-1 mb-1 sm:mb-2 max-[768px]:mb-2">
                                            <img src={address} className="text-white w-3 sm:w-4 h-3 sm:h-4 max-[768px]:w-4 max-[768px]:h-4" />
                                            <span>{work.address}</span>
                                        </div>
                                        <div className="flex items-center gap-1 sm:gap-2 max-[768px]:gap-2">
                                            <img src={money} className="text-white w-3 sm:w-4 h-3 sm:h-4 max-[768px]:w-4 max-[768px]:h-4" />
                                            <span>{work.cost}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <p
                        style={{ fontFamily: 'Poppins' }}
                        className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-[17px] text-gray-700 max-w-full sm:max-w-2xl md:max-w-3xl max-[768px]:text-base max-[768px]:max-w-2xl"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                {/* Right Profile Section */}
                <div className="bg-[#FFE0E9] p-4 rounded-xl w-full flex flex-col items-center text-center max-[768px]:w-full">
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-full h-40 sm:h-48 md:h-[208px] rounded-lg object-cover mb-2 max-[768px]:h-48"
                    />
                    <h3 style={{ fontFamily: 'Poppins' }} className="text-xl sm:text-2xl md:text-[30px] text-[#000000] font-semibold max-[768px]:text-2xl">
                    Nolan Stanton
                    </h3>
                    <p style={{ fontFamily: 'Poppins' }} className="text-xs sm:text-sm mt-1 text-[#000000] max-[768px]:text-sm">
                        Experience: 10 years
                    </p>
                    <button onClick={() => navigate('/signin')}
                        style={{ fontFamily: 'Poppins' }}
                        className="mt-2 sm:mt-3 md:mt-4 bg-[#8A1538] text-white text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 rounded max-[768px]:mt-3 max-[768px]:text-sm"
                    >
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecentWorks;