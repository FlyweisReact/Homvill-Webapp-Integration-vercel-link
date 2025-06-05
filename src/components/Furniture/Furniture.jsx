
import React from 'react'
import Navbar2 from '../Navbar2'
import { useNavigate, Link } from 'react-router-dom';

import frame from '../assets/Frame 9.svg'
import frame2 from '../assets/Frame 10.svg'
import frame3 from '../assets/Frame 11 (1).svg'
import search from '../assets/search.svg'
import location from '../assets/location2.svg'
import LivingRoomIcon from "../assets/living.svg";
import BedroomIcon from "../assets/living2.svg";
import DiningIcon from "../assets/living3.svg";
import KidsIcon from "../assets/living4.svg";
import heart from '../assets/heart.svg'
import arrow from '../assets/arrow.svg'
import OfficeIcon from "../assets/living5.svg";
import OutdoorIcon from "../assets/living6.svg";
import EntrywayIcon from "../assets/living7.svg";
import StorageIcon from "../assets/living8.svg";
import AccentIcon from "../assets/living9.svg";
import shop from "../assets/shop.jpg"
import shop1 from "../assets/shop1.jpg"
import shop3 from "../assets/shop3.jpg"
import shop4 from "../assets/shop2.jpg"
import shop5 from "../assets/shop5.jpg"
import shop6 from "../assets/shop6.jpg"
import shop7 from "../assets/shop7.jpg"
import shop8 from "../assets/shop8.jpg"
import shop9 from "../assets/shop9.jpg"
import sofaImg from "../assets/sofa.jpg";
import bedImg from "../assets/bed.jpg";
import chairImg from "../assets/chair.jpg";
import rating from "../assets/rating 2 (1).svg"
import FurnitureSlider from './FurnitureSlider'
import Sellers from './Sellers'
import ShopSlider from './ShopSlider'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import comfort from '../assets/comfort.png'
import comfort2 from '../assets/comfort.jpg'
import comfort3 from '../assets/comfort2.png'
import comfort4 from '../assets/comfort3.png'
import comfort5 from '../assets/comfort4.png'
import comfort6 from '../assets/comfort5.png'
import Footer from '../Footer'
import "swiper/css";
import "swiper/css/navigation";
const Furniture = () => {
    const categories = [
        { icon: LivingRoomIcon, label: "Living Room" },
        { icon: BedroomIcon, label: "Bedroom" },
        { icon: DiningIcon, label: "Dining & Kitchen" },
        { icon: KidsIcon, label: "Kids & Teens" },
        { icon: OfficeIcon, label: "Office & Study" },
        { icon: OutdoorIcon, label: "Outdoor" },
        { icon: EntrywayIcon, label: "Entryway & Hall" },
        { icon: StorageIcon, label: "Storage & Utility" },
        { icon: AccentIcon, label: "Accent & Decor" },
    ];
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
    const navigate = useNavigate();
    const partners = [
        {
            id: 1,
            name: "Shop Name",
            experience: "10 years",
            established: "2002",
            img: shop1,
        },
        {
            id: 2,
            name: "Shop Name",
            experience: "10 years",
            established: "2002",
            img: shop,
        },
        {
            id: 3,
            name: "Shop Name",
            experience: "10 years",
            established: "2002",
            img: shop3,
        },
        {
            id: 4,
            name: "Shop Name",
            experience: "10 years",
            established: "2002",
            img: shop4,
        },
        {
            id: 5,
            name: "Shop Name",
            experience: "10 years",
            established: "2002",
            img: shop5,
        },
        {
            id: 6,
            name: "Shop Name",
            experience: "10 years",
            established: "2002",
            img: shop6,
        },
        {
            id: 7,
            name: "Shop Name",
            experience: "10 years",
            established: "2002",
            img: shop7,
        },
        {
            id: 8,
            name: "Shop Name",
            experience: "10 years",
            established: "2002",
            img: shop8,
        },
        {
            id: 9,
            name: "Shop Name",
            experience: "10 years",
            established: "2002",
            img: shop9,
        },
    ];
    const categories2 = [
        {
            title: "Sofas",
            image: sofaImg,
            gradient: "from-[#F2E3E9] to-[#BFA4AA]",
        },
        {
            title: "Beds",
            image: bedImg,
            gradient: "from-[#D9D9D9] to-[#7E7E7E]",
        },
        {
            title: "Chairs",
            image: chairImg,
            gradient: "from-[#F2E2C4] to-[#B18040]",
        },
    ];
    return (
        <>
            <Navbar2 />
            <div className="font-[Poppins] ">
                {/* Top Content */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-4 sm:p-6 lg:p-0 lg:ps-12 lg:pe-12">
                    {/* Left Section */}
                    <div className="max-w-xl w-full text-center lg:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold leading-tight sm:leading-snug md:leading-[1.8]">
                            Discover the Latest <br />
                            <span className="text-[#000000]">Furniture Trends</span>
                        </h1>
                        <p className="mt-4 text-[#000000] text-sm sm:text-base md:text-lg lg:text-[24px] leading-snug">
                            Shop the Latest Fashion Items and Stay <br />
                            ahead of the style game
                        </p>
                        <button onClick={() => {
                    navigate('/sellfurniture');
                  }} className="mt-6 w-full sm:w-auto px-6 sm:px-10 md:px-20 py-2 sm:py-3 bg-[#8A1538] text-white text-base sm:text-lg md:text-[22px] rounded-md transition-all lg:mt-24">
                            Click Here To Sell Your Furniture
                        </button>
                    </div>

                    {/* Right Section - Images */}
                    <div className="grid grid-cols-2 gap-4 w-full max-w-lg sm:max-w-xl  lg:pe-12 mt-6 lg:mt-0">
                        <div className="relative rounded-xl overflow-hidden">
                            <img src={frame} alt="Chair" className="rounded-xl w-full h-auto object-cover" />
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                            <img src={frame2} alt="Lounge" className="rounded-xl w-full h-auto object-cover" />
                        </div>
                        <div className="col-span-2 relative rounded-xl overflow-hidden">
                            <img src={frame3} alt="Sofa" className="rounded-xl w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>

                {/* Search Box */}
                <div className="mt-8 sm:mt-12 px-4 sm:px-6 md:px-8 lg:px-12 mb-8 sm:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold mb-3 text-center sm:text-left">
                        Find your furniture
                    </h2>
                    <div className="flex flex-col md:flex-row items-stretch border-2 border-[#8A1538] rounded-lg overflow-hidden shadow-sm w-full mx-auto">
                        <div className="flex items-center gap-2 px-4 py-2 sm:py-3 flex-1">
                            <img src={search} className="text-[#8A1538] w-5 h-5 sm:w-6 sm:h-6" />
                            <input
                                type="text"
                                placeholder="Find furniture..."
                                className="w-full outline-none text-sm sm:text-base"
                            />
                        </div>
                        <div className="w-full md:w-auto flex items-center gap-2 px-4 py-2 sm:py-3 border-t md:border-t-0 md:border-l border-[#8A1538] flex-1">
                            <img src={location} className="text-[#8A1538] w-5 h-5 sm:w-6 sm:h-6" />
                            <input
                                type="text"
                                placeholder="Add location..."
                                className="w-full outline-none text-sm sm:text-base"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12 px-8 ">
                {/* <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 border-b-2 border-[#9d1c47] inline-block pb-1 mb-10">
                    FURNITURE CATEGORIES
                </h2> */}
                <div className="flex items-end justify-center w-full mb-10">
                    <div className="flex-grow h-px bg-[#b67d91]"></div>
                    <div className="relative px-4">
                        <h2 className="text-center text-xl md:text-[36px] mb-2 mulish-font font-semibold text-[#1a1a1a]">
                            FURNITURE CATEGORIES
                        </h2>
                        <div className="absolute left-0 right-0  h-[3px] bg-[#7a0e2e] rounded"></div>
                    </div>
                    <div className="flex-grow h-px bg-[#b67d91]"></div>
                </div>


                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[170px] h-[195px] sm:max-w-[170px] flex flex-col items-center p-2 pt-4 border border-[#00000059] border-[3px] rounded hover:shadow-md transition"
                        >
                            <img src={item.icon} alt={item.label} className="w-auto h-[101px] mb-8" />
                            <p className="text-center text-[14px] lg:text-[18px] font-medium text-gray-700">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <FurnitureSlider />
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-2xl md:text-[36px] mulish-font font-bold text-gray-800 mb-1">
                    Our trusted Furniture Partners
                </h2>
                <p style={{ fontFamily: 'Poppins' }} className="text-sm md:text-[15px] pt-2 text-[#1A1A1A] mb-8">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-24">
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="bg-[#FFE0E9] rounded-xl shadow-md overflow-hidden"
                        >
                            <div className="relative">
                                <img
                                    src={partner.img}
                                    alt={partner.name}
                                    className="w-full h-44 p-2 rounded-2xl object-cover"
                                />
                                <div className="absolute bg-[#1A1A1A]/20 pt-1 rounded-lg bottom-4 right-4">
                                    <img className="w-auto h-auto" src={rating} alt="rating stars" />
                                </div>
                                <div className=" z-10  absolute bg-[#1A1A1A]/20 p-2 rounded-full top-3 right-4">
                                    <img src={heart} className="w-5 h-5" />
                                </div>
                                <div className=" z-10 absolute bg-[#1A1A1A]/20 p-2 rounded-full top-3 right-14">
                                    <img src={arrow} className="w-5 h-5" />
                                </div>

                            </div>
                            <div style={{ fontFamily: 'Poppins' }} className="pb-4 text-center">
                                <h3 className="text-[32px] font-semibold text-[#000000]">
                                    {partner.name}
                                </h3>
                                <p className="text-[20px] text-[#000000]">
                                    Experience: {partner.experience}
                                </p>
                                <p className="text-[20px] text-[#000000]">
                                    Established in {partner.established}
                                </p>
                                <button className="mt-3 px-6 py-2 text-[22px] font-medium text-white bg-[#7a0e2e] rounded-md">
                                    View Shop
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Sellers />
            <ShopSlider />
            <div className="max-w-7xl mx-auto px-4 pb-12">
                <h2 className="text-xl md:text-[36px] mulish-font font-semibold text-[#1A1A1A] mb-6">
                    Trending Categories
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories2.map((cat, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl overflow-hidden shadow-md relative group`}
                        >
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-[500px] object-cover"
                            />
                            <div
                                className={`absolute mulish-font bottom-0 left-0 right-0 py-3 text-center text-white font-semibold text-[36px] bg-gradient-to-t ${cat.gradient}`}
                            >
                                {cat.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
             <div className="px-4 md:px-10 py-8  mx-auto">
                        <h2 className="text-xl md:text-[36px] mulish-font text-[#211E22] font-semibold text-gray-800 mb-4">Exclusive deals</h2>
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
                    <Footer/>
        </>
    )
}

export default Furniture