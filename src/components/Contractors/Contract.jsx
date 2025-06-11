
import React from 'react'
import Navbar2 from '../Navbar2'
import { useNavigate, Link } from 'react-router-dom';
import workerIcon from '../assets/worker.svg'
import frame from '../assets/frame3.svg'
import frame2 from '../assets/frame4.svg'
import frame3 from '../assets/frame5.svg'
import search from '../assets/search.svg'
import location from '../assets/location2.svg'
import LivingRoomIcon from "../assets/vector1.svg";
import BedroomIcon from "../assets/vector2.svg";
import DiningIcon from "../assets/vector3.svg";
import KidsIcon from "../assets/vector4.svg";
import heart from '../assets/heart.svg'
import arrow from '../assets/arrow.svg'
import OfficeIcon from "../assets/vector5.svg";
import OutdoorIcon from "../assets/vector6.svg";
import EntrywayIcon from "../assets/vector7.svg";
import StorageIcon from "../assets/vector8.svg";
import CoRecom from "./CoRecom"
import shop from "../assets/build3.svg"
import shop1 from "../assets/profile.svg"
import shop3 from "../assets/Rectangle 34625623 (1).svg"
import shop4 from "../assets/cont2.jpg"
import shop5 from "../assets/cont8.jpg"
import shop6 from "../assets/cont9.jpg"
import shop7 from "../assets/cont10.jpg"
import shop8 from "../assets/cont11.jpg"
import shop9 from "../assets/cont12.jpg"
import sofaImg from "../assets/build.jpg";
import bedImg from "../assets/build2.jpg";
import chairImg from "../assets/build3.jpg";
import rating from "../assets/rating 2 (1).svg"
// import FurnitureSlider from './FurnitureSlider'
// import Sellers from '../'
// import ShopSlider from './ShopSlider'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ContSlider from './ContSlider'
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
    // const categories = [
    //     { icon: LivingRoomIcon, label: "Electrical Contractors", link: '/living' },
    //     { icon: BedroomIcon, label: "Plumbing Contractors" },
    //     { icon: DiningIcon, label: "HVAC Contractors" },
    //     { icon: KidsIcon, label: "Roofing Contractors" },
    //     { icon: OfficeIcon, label: "Masonry Contractors" },
    //     { icon: OutdoorIcon, label: "Carpentry Contractors" },
    //     { icon: EntrywayIcon, label: "Painting Contractors" },
    //     { icon: StorageIcon, label: "Landscaping Contractors" },

    // ];
    const categories = [
        { icon: LivingRoomIcon, label: "Electrical\nContractors", link: "/living" },
        { icon: BedroomIcon, label: "Plumbing\nContractors" },
        { icon: DiningIcon, label: "HVAC\nContractors" },
        { icon: KidsIcon, label: "Roofing\nContractors" },
        { icon: OfficeIcon, label: "Masonry\nContractors" },
        { icon: OutdoorIcon, label: "Carpentry\nContractors" },
        { icon: EntrywayIcon, label: "Painting\nContractors" },
        { icon: StorageIcon, label: "Landscaping\nContractors" },
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
            name: "Abc Construction",
            worker: "Phillip Lipshutz",
            service:"New York",
            experience: "10 years",
            established: "2002",
            img: shop1,
        },
        {
            id: 2,
            name: "Abc Construction",
            worker:"Carla George",
             service:"New York",
            experience: "10 years",
            img: shop,
        },
        {
            id: 3,
            name: "Abc Construction",
            worker:"Abram Lubin",
             service:"New York",
            experience: "10 years",
            img: shop3,
        },
        {
            id: 4,
             name: "Abc Construction",
            worker:"Jakob Westervelt",
             service:"New York",
            experience: "10 years",
            img: shop4,
        },
        {
            id: 5,
              name: "Abc Construction",
            worker:"Lincoln Curtis",
             service:"New York",
            experience: "10 years",
            img: shop5,
        },
        {
            id: 6,
             name: "Abc Construction",
            worker:"Tatiana Philips",
             service:"New York",
            experience: "10 years",
            img: shop6,
        },
        {
            id: 7,
             name: "Abc Construction",
            worker:"Jaxson Gouse",
             service:"New York",
            experience: "10 years",
            img: shop7,
        },
        {
            id: 8,
              name: "Abc Construction",
            worker:"Charlie Levin",
             service:"New York",
            experience: "10 years",
            img: shop8,
        },
        {
            id: 9,
             name: "Abc Construction",
            worker:"Jaydon Mango",
             service:"New York",
            experience: "10 years",
            img: shop9,
        },
    ];
    const categories2 = [
        {
            title: "Builder",
            image: sofaImg,
            gradient: "",
        },
        {
            title: "Electrician",
            image: bedImg,
            gradient: "from-[#D9D9D9] to-[#7E7E7E]",
        },
        {
            title: "Plumber",
            image: chairImg,
            gradient: "from-[#F2E2C4] to-[#B18040]",
        },
    ];
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
            <Navbar2 />
            <div className="font-[Poppins] ">
                {/* Top Content */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-4 sm:p-6 lg:p-0 lg:ps-12 lg:pe-12">
                    {/* Left Section */}
                    <div className="max-w-xl w-full text-center lg:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold leading-tight sm:leading-snug md:leading-[1.8]">
                            Find Our Experienced <br />
                            <span className="text-[#000000]">Contractors</span>
                        </h1>
                        <p className="mt-4 text-[#000000] text-sm sm:text-base md:text-lg lg:text-[24px] leading-snug">
                            Shop the Latest Fashion Items and Stay <br />
                            ahead of the style game
                        </p>
                        <div className="mt-4">
                            {/* Top line with text and dropdown */}
                            <div className="flex items-center gap-2 text-lg font-bold ">
                                <span className="font-bold  mulish-font sm:text-2xl md:text-3xl lg:text-[36px]">I am a</span>
                                <select className="border border-[#5b003b] text-black text-lg sm:text-xl md:text-2xl lg:text-[30px] font-bold px-2 py-1 lg:py-0 rounded focus:outline-none w-full sm:w-auto">
                                    <option>Electrical Contractors</option>
                                    <option>Plumbing Contractors</option>
                                    <option>HVAC Contractors</option>
                                    <option>Roofing Contractors</option>
                                    <option>Masonry Contractors</option>
                                    <option>Maintenance personal</option>
                                    <option>Carpentry Contractors</option>
                                    <option>Paintaing Contractors</option>
                                    <option>Landscaping</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            {/* Icon and description row */}
                            <div style={{ fontFamily: 'Poppins' }} className="flex mt-4 items-start gap-4">
                                <img src={workerIcon} alt="Worker" className="w-16 h-16" />
                                <p className="md:text-[24px] font-medium text-[#000000]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>

                        <button onClick={() => {
                            navigate('/subscriptions');
                        }} className="mt-6 w-full sm:w-auto px-6 sm:px-10 md:px-20 py-2 sm:py-3 bg-[#8A1538] text-white text-base sm:text-lg md:text-[22px] rounded-md transition-all lg:mt-12">
                            Click Here To Register With Us
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
                        Find your contractor
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
                            CONTRACTOR CATEGORIES
                        </h2>
                        <div className="absolute left-0 right-0  h-[3px] bg-[#7a0e2e] rounded"></div>
                    </div>
                    <div className="flex-grow h-px bg-[#b67d91]"></div>
                </div>


                {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
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
                </div> */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                    {categories.map((item, index) => (
                        <Link to={item.link}
                            key={index}
                            className="w-full max-w-[170px] h-[195px] sm:max-w-[170px] flex flex-col items-center p-2 pt-4  transition bg-white"
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="w-auto h-[101px] mb-4 transition duration-300 "
                            />
                            {/* <p className="text-center text-[14px] lg:text-[18px] font-medium text-gray-700  ">
                                {item.label}
                            </p> */}
                            <p className="text-center text-[14px] lg:text-[18px] font-medium text-gray-700 whitespace-pre-line">
                                {item.label}
                            </p>

                        </Link>
                    ))}
                </div>

            </div>
            {/* <FurnitureSlider /> */}
            <CoRecom/>
            <div className=" mx-10 px-4 py-12">
                {/* <h2 className="text-2xl md:text-[36px] mulish-font font-bold text-gray-800 mb-1">
                    Our trusted Furniture Partners
                </h2> */}
                <div className="flex items-center gap-2 text-lg font-bold ">
                                <span className="font-bold  mulish-font sm:text-2xl md:text-3xl lg:text-[36px]">Our Professional</span>
                                <select className="border border-[#5b003b] text-black text-lg sm:text-xl md:text-2xl lg:text-[30px] font-bold px-2 py-1 lg:py-0 rounded focus:outline-none w-full sm:w-auto">
                                    <option>Maintenance personal</option>
                                    <option>Plumbing Contractors</option>
                                    <option>HVAC Contractors</option>
                                    <option>Roofing Contractors</option>
                                    <option>Masonry Contractors</option>
                                    <option>Electrical Contractors </option>
                                    <option>Carpentry Contractors</option>
                                    <option>Paintaing Contractors</option>
                                    <option>Landscaping</option>
                                    <option>Other</option>
                                </select>
                            </div>
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
                                <h3 className="text-[20px]  text-[#000000]">
                                    {partner.worker}
                                </h3>
                                <p className="text-[20px] text-[#000000]">
                                    Experience: {partner.experience}
                                </p>
                                <p className="text-[20px] text-[#000000]">
                                    Service Location: {partner.service}
                                </p>
                                <button onClick={() => {
                                    navigate('/aboutbuild');
                                }} className="mt-3 px-6 py-2 text-[22px] font-medium text-white bg-[#7a0e2e] rounded-md">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ContSlider/>
            {/* <Sellers />
            <ShopSlider /> */}
            <div className=" mx-12 px-4 pb-12">
                <h2 className="text-xl md:text-[36px] mulish-font font-semibold text-[#1A1A1A] mb-6">
                    Indoor-outdoor style.
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
                                className={`absolute mulish-font bottom-0 left-0 right-0 py-3 text-center bg-black/30 backdrop-blur-md text-white font-semibold text-[36px] bg-blur`}
                            >
                                {cat.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Furniture