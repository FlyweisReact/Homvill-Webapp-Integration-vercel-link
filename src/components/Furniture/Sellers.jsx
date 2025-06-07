// RecommendedSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import heart from '../assets/heart.svg'
import arrow from '../assets/arrow.svg'
import comfort from '../assets/comfort.png'
import comfort2 from '../assets/comfort.jpg'
import comfort3 from '../assets/comfort2.png'
import comfort4 from '../assets/comfort3.png'
import comfort5 from '../assets/comfort4.png'
import comfort6 from '../assets/comfort5.png'
import "swiper/css";
import "swiper/css/navigation";

const products = [
    {
        id: 1,
        img: comfort,
        tag: "Spring Savings",
        title: "ComforPedic Loft from the Beautyrest 14'' Firm Gel...",
        price: "$449.99",
        oldPrice: "$1,683.99",
    },
    {
        id: 2,
        img: comfort2,
        tag: "Spring Savings",
        title: "Eddie Bauer Printed Cotton Percale Sheet Sets",
        price: "$28.82",
        oldPrice: "$38.69",
    },
    {
        id: 3,
        img: comfort3,
        tag: "Spring Savings",
        title: "Colleyville 72'' Double Bathroom Vanity",
        price: "$1,629.99",
        oldPrice: "$4,398.00",
    },
    {
        id: 4,
        img: comfort4,
        tag: "Spring Savings",
        title: "Olivia 3-in-1 Convertible Crib",
        price: "$199.99",
        oldPrice: "",
    },
    {
        id: 5,
        img: comfort5,
        tag: "Spring Savings",
        title: "Wayfair Sleep 13.5'' Medium Cooling Gel...",
        price: "$309.99",
        oldPrice: "$499.99",
    },
    {
        id: 6,
        img: comfort6,
        tag: "Spring Savings",
        title: "20 Pair Shoe Storage Cabinet",
        price: "$114.99",
        oldPrice: "$199.99",
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
        <div className="px-2 md:px-10 py-8  mx-6">
            <h2 className="text-xl md:text-[36px] mulish-font text-[#211E22] font-semibold text-gray-800 mb-4">Top Sellers</h2>
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
                    <SwiperSlide key={item.id}>
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
                                <p className="text-sm text-[#211E22] line-clamp-2 h-10">{item.title}</p>
                                <div className="mt-2">
                                    <span className="text-[#990E35] font-semibold mr-2">{item.price}</span>
                                    {item.oldPrice && (
                                        <span className="line-through text-sm text-gray-500">{item.oldPrice}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </>
    );
};

export default RecommendedSlider;
