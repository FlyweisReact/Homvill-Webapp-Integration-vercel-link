import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom';

import Install from '../Install'
import { FaSearch } from "react-icons/fa";
import { useAuth } from '../Authprovider/AuthContext';
import { FiHeart, FiArrowRight } from "react-icons/fi";
import { BsPlayFill } from "react-icons/bs";

import Navbar2 from '../Navbar2';
import Install2 from '../Install2'
import back from '../assets/back.jpg'
import buy from '../assets/buy.svg'
import sell from '../assets/sell.svg'
import rent from '../assets/rent.svg'
import cont from '../assets/cont.svg'
import fur from '../assets/furniture.svg'
import Slider from './Slider'
import Exclusive from './Exclusive'
import Advertisement from './Advertisement'
import wide from '../assets/wide.svg'
import buy2 from '../assets/Icon (14).svg'
import insu from '../assets/insu.svg'
import Midpage from './Midpage'
import bg from '../assets/bg.jpg'
import heart from '../assets/heart.svg';
import bed from '../assets/bed.svg';
import bath from '../assets/bath.svg';
import square from '../assets/Icon (13).svg';
import arrow from '../assets/arrow.svg'
import property from '../assets/villa5.jpg'
import room from '../assets/room.jpg'
import bgvid from '../assets/bgvid.svg'
import previous from '../assets/previous.svg'
import next from '../assets/next.svg'
import Footer from '../Footer';
import CountUp from "react-countup";

import {
    FaMapMarkerAlt,
    FaBed,
    FaBath,
    FaRulerCombined,
    FaHeart,
    FaRegHeart,
} from "react-icons/fa";
import slider from '../assets/slider.svg'
const Home = () => {
    const [activeTab, setActiveTab] = useState("Buy");
    const [showBanner, setShowBanner] = useState(true);
const { isLoggedIn } = useAuth();
    const tabs = ["Buy", "Sell", "Rent", "Contractor", "Furniture"];
    const services = [
        {
            title: 'Buy a home',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            button: 'Find homes',
            icon: buy,
            link:'/homeforsale'
        },
        {
            title: 'Sell a home',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            button: 'Sell Homes',
            icon: sell,
            link:'/review'
        },
        {
            title: 'Rent a home',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            button: 'Rent Homes',
            icon: rent,
             link:'/rent'
        },
        {
            title: 'Connect with Contractors',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            button: 'Find Contractor',
            icon: cont,
                  link: isLoggedIn ? '/contract' : '/signin'

        },
        {
            title: 'Furniture',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            button: 'Find Furniture',
            icon: fur,
            link: isLoggedIn ? '/furniture' : '/signin'
        },
    ];
      
       
    const features = [
        {
            icon: wide, // replace with your actual path
            title: "Wide Range of Properties",
            description:
                "We offer expert legal help for all related property items in USA",
        },
        {
            icon: buy2, // replace with your actual path
            title: "Buy or Rent Homes",
            description:
                "We sell your home at the best market price and very quickly as well.",
        },
        {
            icon: insu, // replace with your actual path
            title: "Trusted by Thousands",
            description:
                "We offer you free consultancy to get a loan for your new home.",
        },
    ];
    const [startCount, setStartCount] = useState(false);
    const sectionRef = useRef(null);
const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect(); // Run only once
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);
    return (
        <>
            {/* <Navbar />
            <Install /> */}
            <div className="fixed top-0 left-0 w-full z-50">
                {/* <Navbar /> */}
                {isLoggedIn ? <Navbar2 /> : <Navbar />}
                {/* <Install /> */}
                {/* {!isLoggedIn && <Install />} */}
                {/* {isLoggedIn ? <Install2 /> : <Install />} */}
                <div className={`${showBanner ? 'h-[144px] md:h-[189px]' : 'h-[61px]'}`}>
                    {showBanner && <Install onClose={() => setShowBanner(false)} />}
                </div>
            </div>


            {/* <div className="h-[320px] md:h-[220px]" />  */}
            {/* <div className={`${isLoggedIn ? 'h-[100px]' : 'h-[205px] md:h-[220px]'}`} /> */}
            <div className={`${showBanner ? 'h-[144px] md:h-[189px]' : 'h-[61px]'}`}>
                {/* {showBanner && <Install onClose={() => setShowBanner(false)} />} */}
            </div>


            <div
                className="flex flex-col justify-between h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${back})` }}
            >
                {/* Top Content */}
                <div style={{ fontFamily: "Poppins" }} className="px-4 md:px-24 py-8">
                    <h1 style={{ fontWeight: '500' }} className="text-3xl md:text-[50px] text-white mt-4 md:mt-4 leading-[1.2]">
                        The <span className="text-[#E7C873]">#1</span> site real estate <br className="hidden md:block" />
                        professionals trust*
                    </h1>
                    <p className="text-white text-sm md:text-base mt-6 md:mt-4">
                        From as low as <span className="text-yellow-400 font-semibold">$10</span> per day with limited time offer discounts.
                    </p>

                    <a href="#" className="text-sm text-[#E7C873] mt-6 md:mt-4 inline-block">
                        Browse More Properties
                    </a>

                    {/* Tabs and Input */}
                    <div className="mt-6 md:mt-4 flex flex-col w-full md:w-[540px]">
                        {/* <div className="flex flex-wrap items-end">
                            {tabs.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setActiveTab(item)}
                                    className={`px-3 text-sm font-medium rounded-t-md transition-all duration-200 ${activeTab === item
                                        ? "bg-red-800 text-white py-2"
                                        : "bg-white text-black border border-gray-300 py-0"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div> */}
                        <div className="flex flex-wrap items-end" style={{ height: '36px', paddingBottom: '4px' }}>
                            {tabs.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setActiveTab(item)}
                                    className={`px-3 text-sm font-medium rounded-t-md  ${activeTab === item
                                            ? "bg-red-800 text-white py-2"
                                            : "bg-white text-black border border-gray-300 py-0"
                                        }`}
                                    style={{ marginRight: '0px' }}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        <div className="w-full md:w-[540px] bg-white border border-t-0 border-gray-300 rounded-b-xl flex flex-row sm:flex-row items-stretch sm:items-center px-2 py-2">
                            <input
                                type="text"
                                placeholder="Enter your location"
                                className="w-full px-3 py-2 text-sm outline-none text-gray-700 placeholder-gray-400"
                            />
                            <button className="bg-red-800 p-2 mt-2 sm:mt-0 sm:ml-2 rounded-md flex justify-center items-center">
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div ref={sectionRef}
                    style={{ fontFamily: "Poppins" }}
                    className="bg-[#8A1538] rounded-tr-3xl px-6 lg:px-20 py-4 w-full max-w-3xl text-white text-left flex flex-col sm:flex-row flex-wrap sm:justify-between"
                >
                    <div className="mb-4 sm:mb-0 sm:mx-4">
                        {/* <h2 className="text-xl md:text-2xl font-bold">680</h2> */}
                        <h2 className="text-xl md:text-2xl font-bold">
                            {startCount && <CountUp end={680} duration={3} />}
                        </h2>
                        <p className="text-xs md:text-sm font-light">Award Winning</p>
                    </div>
                    <div className="mb-4 sm:mb-0 sm:mx-4">
                        {/* <h2 className="text-xl md:text-2xl font-bold">8K+</h2> */}
                        <h2 className="text-xl md:text-2xl font-bold">
                            {startCount && <CountUp end={8000} duration={3} suffix="+" />}
                        </h2>
                        <p className="text-xs md:text-sm font-light">Happy Customer</p>
                    </div>
                    <div className="sm:mx-4">
                        {/* <h2 className="text-xl md:text-2xl font-bold">500+</h2> */}
                        <h2 className="text-xl md:text-2xl font-bold">
                            {startCount && <CountUp end={500} duration={3} suffix="+" />}
                        </h2>
                        <p className="text-xs md:text-sm font-light">Property Ready</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 px-4 py-10 bg-white">
                {services.map((service, index) => (
                    <div
                        key={index}
                        style={{ fontFamily: 'Poppins' }}
                        className="bg-[#FFE0E9] rounded-xl text-center p-6 w-full sm:w-[280px] md:w-[250px] lg:w-[230px]  shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
                    >
                        <div className="flex justify-center mb-4">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow">
                                <img src={service.icon} alt={service.title} className="w-12 h-12" />
                            </div>
                        </div>
                        <h3 className="text-[20px] sm:text-[22px] font-semibold mb-2">{service.title}</h3>
                        <p className="text-[14px] text-gray-600 mb-4">{service.description}</p>
                        <div className="mt-auto">
                            <button onClick={() => navigate(service.link)} className="border border-[#6C0A17] text-[#6C0A17] px-4 py-2 rounded-md hover:bg-[#6C0A17] hover:text-white transition">
                                {service.button}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Slider />
            <Exclusive />
            <Advertisement />
            <section style={{ fontFamily: 'Poppins' }} className="text-center py-16 px-4 bg-white">
                <h2 style={{ fontWeight: '500' }} className="text-2xl md:text-[40px] mb-2">
                    Why You Should Work With Us
                </h2>
                <p className="text-gray-500 mb-10 md:text-[17px] mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center px-4">
                            <img src={feature.icon} alt={feature.title} className="w-10 h-10 mb-4" />
                            <h3 style={{ fontWeight: '500' }} className=" text-[21px] mb-2">{feature.title}</h3>
                            <p className="text-[15px] text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Midpage />
            <section
                className="relative bg-cover bg-center bg-no-repeat h-[455px] mt-12 flex items-center justify-center"
                style={{ backgroundImage: `url(${bg})`, fontFamily: 'Poppins' }} // Replace with your image path
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-0"></div>

                {/* Content */}
                <div className="relative z-10 text-center text-white px-4 max-w-3xl">
                    <h1 style={{ fontWeight: '500' }} className="text-3xl md:text-[60px] leading-tight mb-4">
                        Discover a place you'll <br /> love to live
                    </h1>
                    <p className="text-sm md:text-[16px] mb-6">
                        Pellentesque egestas elementum egestas faucibus sem. Velit nunc
                        egestas ut morbi. Leo diam diam
                    </p>
                    <button className="bg-[#E7C873] text-black font-medium px-6 py-2 rounded-xl hover:bg-yellow-500 transition inline-flex items-center gap-2">
                        View Properties <span>→</span>
                    </button>
                </div>
            </section>
            <div
                style={{ fontFamily: 'Poppins' }}
                className="flex flex-col lg:flex-row items-center gap-6 bg-white p-4 sm:p-6 rounded-lg  max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto"
            >
                {/* Image + Badges */}
                <div className="relative w-full lg:w-1/2">
                    <img
                        src={slider}
                        alt="Villa"
                        className="rounded-xl w-full object-cover max-h-[300px] sm:max-h-full"
                    />
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex gap-1 sm:gap-2 flex-wrap">
                        <span className="bg-[#1F4B43] text-white text-[13px] sm:text-[13px] font-semibold px-2 sm:px-3 py-1.5 sm:py-2 rounded-full">
                            FOR SALE
                        </span>
                        <span className="bg-[#E7C873] text-black text-[13px] sm:text-[13px] font-semibold px-2 sm:px-3 py-1.5 sm:py-2 rounded-full">
                            FEATURED
                        </span>
                        <span className="bg-[#E95C24] text-white text-[13px] sm:text-[13px] font-semibold px-2 sm:px-3 py-1.5 sm:py-2 rounded-full">
                            PROMOTED
                        </span>
                    </div>

                    {/* Action icons */}
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-1 sm:gap-2">
                        <button className="text-white bg-black/50 p-1.5 sm:p-2 rounded-full">
                            <img src={arrow} className="w-4 sm:w-5" />
                        </button>
                        <button className="text-white bg-black/50 p-1.5 sm:p-2 rounded-full">
                            <img src={heart} className="w-4 sm:w-5" />
                        </button>
                    </div>
                </div>

                {/* Info */}
                <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 text-center sm:text-left">
                    <h2 style={{ fontWeight: '500' }} className="text-[28px] sm:text-[40px]">Villa One Hyde Park</h2>

                    <div className="flex items-center justify-center sm:justify-start text-black text-[15px] sm:text-[16px] gap-2">
                        <FaMapMarkerAlt className="text-[#1A1A1A]" />
                        <span>2050 Bloomingdale Ave</span>
                    </div>

                    <p className="text-[#1A1A1A] text-[15px] sm:text-[16px] leading-relaxed">
                        Enchanting three bedroom, three bath home with spacious one bedroom, one bath
                        cabana, in-laws quarters. Charming living area features fireplace and fabulous
                        art deco details. ...
                    </p>

                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-[15px] sm:text-[16px] text-gray-700 mt-2">
                        <div className="flex items-center gap-1">
                            <img src={bed} className="w-5" /> 4 Beds
                        </div>
                        <div className="flex items-center gap-1">
                            <img src={bath} className="w-5" /> 2 Baths
                        </div>
                        <div className="flex items-center gap-1">
                            <img src={square} className="w-5" /> 350 sqft
                        </div>
                    </div>

                    <div className="text-[22px] sm:text-[26px] text-red-600 font-semibold">$120,000</div>

                    <button className="mt-2 bg-[#8A1538] hover:bg-[#5e1530] text-white px-5 sm:px-6 py-2 rounded-xl text-[14px] sm:text-[15px] transition">
                        Learn More →
                    </button>
                </div>
            </div>
            <section style={{ fontFamily: 'Poppins' }} className="bg-[#1A1A1A] text-white py-12 px-4 mb-12">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-10">
                        <h2 style={{ fontWeight: '500' }} className="text-[40px] sm:text-[40px] md:text-[40px] sm:text-2xl xs:text-xl">
                            Exclusive Properties
                        </h2>
                        <p className="text-gray-300 mt-3 md:text-sm sm:text-xs xs:text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 md:gap-4 sm:gap-3 xs:grid-cols-1">
                        <div className="relative rounded-2xl overflow-hidden w-full">
                            <img
                                src={property}
                                alt="Property"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                                <span className="bg-[#1F4B43] text-white text-[10px] font-semibold px-3 py-1.5 rounded-full sm:text-[13px] sm:px-3 sm:py-2">
                                    FOR SALE
                                </span>
                                <span className="bg-[#E7C873] text-black text-[10px] font-semibold px-3 py-1.5 rounded-full sm:text-[13px] sm:px-3 sm:py-2">
                                    FEATURED
                                </span>
                                <span className="bg-[#E95C24] text-white text-[10px] font-semibold px-3 py-1.5 rounded-full sm:text-[13px] sm:px-3 sm:py-2">
                                    PROMOTED
                                </span>
                            </div>

                            {/* Action Icons */}
                            <div className="absolute top-4 right-4 flex gap-2">
                                <button className="text-white bg-black/50 p-2 rounded-full sm:p-1.5">
                                    <img src={arrow} />
                                </button>
                                <button className="text-white bg-black/50 p-2 rounded-full sm:p-1.5">
                                    <img src={heart} />
                                </button>
                            </div>

                            {/* Overlay Info Section */}
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent p-5 text-white sm:p-3 xs:p-2">
                                <h3 className="text-[26px] font-semibold mb-1 md:text-xl sm:text-lg xs:text-base">
                                    Villa One Hyde Park
                                </h3>

                                <div className="flex items-center text-[16px] mb-2 gap-2 md:text-sm sm:text-xs xs:text-[10px]">
                                    <FaMapMarkerAlt className="text-white/80 sm:w-4 sm:h-4 xs:w-3 xs:h-3" />
                                    <span>2050 Bloomingdale Ave</span>
                                </div>

                                <div className="flex gap-6 text-sm mb-2 sm:gap-4 xs:gap-3">
                                    <div className="text-[21px] font-semibold text-white md:text-lg sm:text-base xs:text-sm">
                                        $120,000
                                    </div>
                                    <div className="flex items-center gap-1 md:text-sm sm:text-xs xs:text-[10px]">
                                        <img src={bed} alt="bed" className="w-4 filter invert sm:w-3 xs:w-2.5" /> 4
                                    </div>
                                    <div className="flex items-center gap-1 md:text-sm sm:text-xs xs:text-[10px]">
                                        <img src={bath} alt="bath" className="w-4 filter invert sm:w-3 xs:w-2.5" /> 2
                                    </div>
                                    <div className="flex items-center gap-1 md:text-sm sm:text-xs xs:text-[10px]">
                                        <img src={square} alt="area" className="w-4 filter invert sm:w-3 xs:w-2.5" /> 350
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-4 md:gap-3 sm:gap-2">
                            {/* Top Wide Card */}
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src={room}
                                    alt="Living Room"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                                {/* Left Arrow */}
                                <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full sm:p-1.5">
                                    <img src={previous} className="" />
                                </button>
                                {/* Right Arrow */}
                                <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full sm:p-1.5">
                                    <img src={next} />
                                </button>
                            </div>

                            {/* Bottom Row: 2 Columns */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-3 sm:gap-2">
                                {/* Video Card */}
                                <div className="relative rounded-2xl overflow-hidden">
                                    <img
                                        src={bgvid}
                                        alt="Living Room 2"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                    <button className="absolute inset-0 flex items-center justify-center text-white text-3xl sm:text-2xl xs:text-xl">
                                        <BsPlayFill />
                                    </button>
                                </div>

                                {/* Stats Card */}
                                <div className="bg-[#E7C873] text-black rounded-2xl p-10 flex flex-col justify-between md:p-6 sm:p-4 xs:p-3">
                                    <h3 className="text-[40px] font-bold mb-2 md:text-3xl sm:text-2xl xs:text-xl">
                                        280+
                                    </h3>
                                    <p className="text-[15px] flex-1 mt-8 md:text-sm sm:text-xs xs:text-[10px]">
                                        Explore our wide variety of properties to find your dream home today
                                    </p>
                                    <button className="mt-4 self-end bg-white text-black p-2 rounded-full sm:p-1.5 xs:p-1">
                                        <FiArrowRight className="sm:w-4 sm:h-4 xs:w-3 xs:h-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home