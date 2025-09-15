// RecommendedSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import heart from '../assets/heart.svg'
import arrow from '../assets/arrow.svg'
import { Link } from 'react-router-dom';
import comfort from '../assets/cont1.jpg'
import comfort2 from '../assets/cont2.jpg'
import comfort3 from '../assets/cont3.jpg'
import comfort4 from '../assets/cont4.jpg'
import comfort5 from '../assets/cont5.jpg'
import comfort6 from '../assets/cont6.jpg'
import "swiper/css";
import "swiper/css/navigation";

const products = [
    {
        id: 1,
        img: comfort,
        tag: "Top Rated",
        title: "Company Name",
        price: "Builder",
        oldPrice: "10 years",
       
    },
    {
        id: 2,
        img: comfort2,
        tag: "Top Rated",
        title: "Company Name",
        price: "Builder",
        oldPrice: "10 years",
         link:'/aboutbuild'
    },
    {
        id: 3,
        img: comfort3,
        tag: "Top Rated",
        title: "Company Name",
        price: "Builder",
        oldPrice: "10 years",
    },
    {
        id: 4,
        img: comfort4,
        tag: "Top Rated",
        title: "Company Name",
        price: "Builder",
        oldPrice: "10 years",
    },
    {
        id: 5,
        img: comfort5,
        tag: "Top Rated",
        title: "Company Name",
        price: "Builder",
        oldPrice: "10 years",
    },
    {
        id: 6,
        img: comfort6,
        tag: "Top Rated",
        title: "Company Name",
        price: "Builder",
        oldPrice: "10 years",
    },
];

const RecommendedSlider = () => {
    return (
        <>
        <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: red !important;
            background-color: white;
            padding: 12px;
            border-radius: 9999px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            width: auto;
            height: auto;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 16px !important;
            font-weight: bold;
          }

        
          }
        `}
      </style>
        <div className="px-4 md:px-24 py-8  mx-auto">
            <h2 className="text-xl md:text-[36px] mulish-font text-[#211E22] font-semibold text-gray-800 mb-4">Recommended for you</h2>
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={16}
                slidesPerView={1.5}
                breakpoints={{
                    640: { slidesPerView: 2.5 },
                    768: { slidesPerView: 3.5 },
                    1024: { slidesPerView: 4.5 },
                    1280: { slidesPerView: 5.5 },
                }}
            >
                {products.map((item) => (
                    <SwiperSlide  key={item.id}>
                        <Link to={item.link}>
                        <div className=" overflow-hidden bg-white">
                            <div className="relative">
                                <img src={item.img} alt={item.title} className="w-full h-40 rounded-lg object-cover" />
                                <div style={{fontFamily:'Poppins'}} className="absolute bottom-0 left-0 bg-[#7a0e2e] underline text-white text-xs px-2 py-[2px] rounded">
                                    {item.tag}
                                </div>
                                <div className=" z-10  absolute bg-[#1A1A1A]/20 p-2 rounded-full top-2 right-2">
                                    <img src={heart} className="w-5 h-5" />
                                </div>
                                <div className=" z-10 absolute bg-[#1A1A1A]/20 p-2 rounded-full top-2 right-12">
                                    <img src={arrow} className="w-5 h-5" />
                                </div>

                            </div>
                            <div style={{fontFamily:'Poppins'}} className="pt-2">
                                <p className="text-sm text-[#211E22] h-5">{item.title}</p>
                                <p className="text-sm text-[#211E22]  h-5">{item.title}</p>
                                <div className="mt-2">
                                    <span className="text-[#990E35] font-semibold mr-2">{item.price}</span>
                                    {item.oldPrice && (
                                        <span className=" text-sm text-gray-500">{item.oldPrice}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
          

        </div>
        </>
    );
};

export default RecommendedSlider;
