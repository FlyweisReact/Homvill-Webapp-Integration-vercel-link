// import React, { useState } from "react";
// import { FaRegCommentDots } from "react-icons/fa";
// import brokerImg from "../assets/profile2.svg";      // circular profile image
// import bgImg from "../assets/bg10.svg";     // background image
// import Navbar2 from "../Navbar2"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Scrollbar } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/scrollbar';
// import rental from '../assets/link.svg';
// import land from '../assets/link2.svg';
// import town from '../assets/link3.svg';
// import modern from '../assets/modern.svg';
// import apart from '../assets/apart.jpg';
// import re from '../assets/re.jpg';
// import office from '../assets/office.jpg';
// import contract from '../assets/contract.jpg';
// import home from '../assets/home.jpg';
// import builder from '../assets/builders.jpg';
// import heart from '../assets/heart.svg';
// import red from '../assets/RED.svg';
// import arrow from '../assets/arrow.svg';
// import location from '../assets/location.svg';
// import bed from '../assets/bed.svg';
// import bath from '../assets/bath.svg';
// import square from '../assets/Icon (13).svg';
// import link from '../assets/link4.jpg';
// import links from '../assets/links.jpg';
// import links2 from '../assets/links2.jpg';
// import Footer from "../Footer";
// import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

// const BrokerProfileCard = () => {
//     const categories = [
//         {
//             title: 'Skyper Pool Apartment',
//             price: '$280,000',
//             address: '1020 Bloomingdale AVE',
//             beds: 4,
//             baths: 2,
//             size: '450 sqft',
//             status: 'For Sale',
//             promoted: true,
//             image: rental,
//         },
//         {
//             title: 'North Dillard Street',
//             price: '$250/month',
//             address: '4330 Bell Shoals RD',
//             beds: 4,
//             baths: 2,
//             size: '400 sqft',
//             status: 'For Rent',
//             promoted: true,
//             image: land,
//         },
//         {
//             title: 'Eaton Garth Penthouse',
//             price: '$180,000',
//             address: '7722 18th AVE, Brooklyn',
//             beds: 4,
//             baths: 2,
//             size: '450 sqft',
//             status: 'For Sale',
//             promoted: false,
//             featured: true,
//             image: town,
//         },
//         {
//             title: 'Skyper Pool Apartment',
//             price: '$280,000',
//             address: '1020 Bloomingdale AVE',
//             beds: 4,
//             baths: 2,
//             size: '450 sqft',
//             status: 'For Sale',
//             promoted: false,
//             image: link,
//         },
//         {
//             title: 'North Dillard Street',
//             price: '$250/month',
//             address: '4330 Bell Shoals RD',
//             beds: 4,
//             baths: 2,
//             size: '400 sqft',
//             status: 'For Rent',
//             promoted: false,
//             image: links,
//         },
//         {
//             title: 'Eaton Garth Penthouse',
//             price: '$180,000',
//             address: '7722 18th AVE, Brooklyn',
//             beds: 4,
//             baths: 2,
//             size: '450 sqft',
//             status: 'For Sale',
//             promoted: false,
//             featured: true,
//             image: links2,
//         },
//     ];
//     const [favorites, setFavorites] = useState({});

//     const toggleFavorite = (index) => {
//         setFavorites((prev) => ({
//             ...prev,
//             [index]: !prev[index],
//         }));
//     };

//     return (
//         <>
//             <Navbar2 />


//             <div
//                 className="relative w-full h-auto flex items-center px-12 py-4"
//                 style={{
//                     backgroundImage: `url(${bgImg})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                 }}
//             >
//                 {/* Profile image */}
//                 <img
//                     src={brokerImg}
//                     alt="Broker"

//                 />

//                 {/* Text content */}
//                 <div style={{ fontFamily: 'Poppins' }} className="ml-4 text-white">
//                     <h2 className="font-bold text-[40px] leading-tight">Phillip Lipshutz</h2>
//                     <p className="text-[32px] leading-tight">Broker, Kaufman Hagan</p>
//                     <p className="text-[32px] leading-tight">Denver, CO 80205</p>
//                     <button className=" mt-4 flex items-center bg-[#8A1538] text-white text-[24px] font-medium px-3 py-[3px] rounded-md">
//                         <FaRegCommentDots className="mr-1" />
//                         Message
//                     </button>
//                 </div>


//             </div>
//             <div className="p-6 md:p-10 space-y-8">
//                 {/* About Section */}
//                 <div>
//                     <h2 className="text-[36px] mulish-font font-bold text-gray-900 mb-2">About Phillip</h2>
//                     <p style={{ fontFamily: 'Poppins' }} className="text-gray-700 text-[17px] leading-relaxed">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                         industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
//                         scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
//                         electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
//                         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
//                         PageMaker including versions of Lorem Ipsum.
//                     </p>
//                 </div>

//                 {/* Contact Information */}
//                 <div>
//                     <h3 style={{ fontFamily: 'Poppins' }} className="text-[32px] font-semibold text-[#8A1538] mb-3">Contact Information</h3>
//                     <div style={{ fontFamily: 'Poppins' }} className="border border-gray-300 rounded-md p-5 bg-white grid grid-cols-1 md:grid-cols-3 gap-4 text-[24px] text-gray-800">
//                         <p><strong>Name:</strong> Jaydon Donin</p>
//                         <p><strong>Email:</strong> example@gmail.com</p>
//                         <p><strong>Phone Number:</strong> +1 7761 784510</p>
//                         <p><strong>Location:</strong> ABC, Colony, 2456</p>
//                         <p className="flex items-center gap-2">
//                             <strong>Ratings:</strong>
//                             <span className="flex text-yellow-400">
//                                 <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
//                             </span>
//                         </p>
//                         <p><strong>Response Time:</strong> <span className="text-yellow-500 font-medium">10 Mins</span></p>
//                     </div>
//                 </div>

//                 {/* Services Section */}
//                 <div>
//                     <h3 style={{ fontFamily: 'Poppins' }} className="text-[32px] font-semibold text-[#8A1538] mb-3">Services</h3>
//                     <div style={{ fontFamily: 'Poppins' }} className="bg-white border border-gray-300 rounded-md p-5 text-[24px] text-[#1D1D1D] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
//                         <p>• Build Houses</p>
//                         <p>• Lorem Ipsum is simply dummy</p>
//                         <p>• Lorem Ipsum is simply dummy</p>
//                         <p>• Lorem Ipsum is simply dummy</p>
//                         <p>• Lorem Ipsum is simply dummy</p>
//                         <p>• Lorem Ipsum is simply dummy</p>
//                     </div>
//                 </div>
//             </div>
//             <div style={{ fontFamily: 'Poppins' }} className="px-12 py-8 bg-[#FFE0E9] ">
//                 <h2 className="text-[40px] font-medium text-gray-800 text-start lg:text-[40px] md:text-3xl sm:text-2xl xs:text-xl px-4">
//         His Recent Works
//       </h2>
//       <p className="text-gray-600 mb-8 mt-4 text-start lg:text-[17px] md:text-sm sm:text-xs xs:text-xs px-4">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       </p>

//                 <div className="relative">
//                     <Swiper
//                         modules={[Scrollbar]}
//                         spaceBetween={10}
//                         slidesPerView={1}
//                         breakpoints={{
//                             320: {
//                                 slidesPerView: 1,
//                                 spaceBetween: 10,
//                             },
//                             640: {
//                                 slidesPerView: 2,
//                                 spaceBetween: 15,
//                             },
//                             768: {
//                                 slidesPerView: 2.5,
//                                 spaceBetween: 15,
//                             },
//                             1024: {
//                                 slidesPerView: 2.5,
//                                 spaceBetween: 20,
//                             },
//                         }}
//                         scrollbar={{ draggable: true, hide: false, el: '.custom-featured-scrollbar' }}
//                         className="pb-8 featured-swiper"
//                     >
//                         {categories.map((item, index) => (
//                             <SwiperSlide key={index}>
//                                 <div className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[498/408] bg-white">
//                                     {/* Image Section */}
//                                     <div className="relative">
//                                         <img
//                                             src={item.image}
//                                             alt={item.title}
//                                             className="w-full h-[179px] sm:h-[98px] lg:h-[220px] object-cover"
//                                         />
//                                         {item.promoted && (
//                                             <div
//                                                 style={{ fontFamily: 'Roboto' }}
//                                                 className="absolute top-4 left-[-30px] bg-orange-500 text-white text-[12px] sm:text-[11px] md:text-[12px] font-semibold px-8 py-1 rotate-[-45deg] shadow-md z-10"
//                                             >
//                                                 PROMOTED
//                                             </div>
//                                         )}
//                                         <div
//                                             onClick={() => toggleFavorite(index)}
//                                             className="absolute top-2 right-2 p-2 rounded-full cursor-pointer bg-[#1A1A1A]/20"
//                                         >
//                                             <img
//                                                 src={favorites[index] ? red : heart}
//                                                 alt="Heart Icon"
//                                                 className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5"
//                                             />
//                                         </div>
//                                         {/* Arrow Icon */}
//                                         <div className="absolute top-2 right-14 bg-[#1A1A1A]/20 p-2 rounded-full">
//                                             <img src={arrow} alt="Arrow Icon" className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
//                                         </div>
//                                     </div>
//                                     {/* Property Details */}
//                                     <div style={{ fontFamily: 'Poppins' }} className="p-4 sm:p-3 md:p-4">
//                                         <div className="flex justify-between items-center">
//                                             <h3 className="text-[16px] sm:text-[14px] md:text-[15px] lg:text-[19px] font-semibold text-[#1A1A1A] truncate">
//                                                 {item.title}
//                                             </h3>
//                                             <p className="text-[18px] sm:text-[16px] md:text-[17px] lg:text-[22px] font-semibold text-[#EB664E]">
//                                                 {item.price}
//                                             </p>
//                                         </div>
//                                         <p className="text-sm sm:text-[13px] md:text-[16px] text-[#1A1A1A] flex items-center gap-1 mt-1 truncate">
//                                             <span><img src={location} alt="Location Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" /></span> {item.address}
//                                         </p>
//                                         <div className="flex justify-between items-center mt-3 sm:mt-2 md:mt-3">
//                                             <div className="flex gap-3 sm:gap-2 md:gap-3 text-sm sm:text-[12px] md:text-[13px] lg:text-[16px] text-[#1A1A1A]">
//                                                 <span className="flex items-center gap-1">
//                                                     <img src={bed} alt="Bed Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                                     {item.beds} Beds
//                                                 </span>
//                                                 <span className="flex items-center gap-1">
//                                                     <img src={bath} alt="Bath Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                                     {item.baths} Baths
//                                                 </span>
//                                                 <span className="flex items-center gap-1">
//                                                     <img src={square} alt="Square Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                                     {item.size}
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         {/* Status Label with Featured */}
//                                         {/* <div style={{ fontFamily: 'Poppins' }} className="mt-4 sm:mt-3 md:mt-4 flex items-center gap-2 flex-wrap">
//                                             <span
//                                                 className={`text-[13px] sm:text-[12px] md:text-[14px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full ${item.status === 'For Rent'
//                                                     ? 'bg-[#00C6DB] text-black'
//                                                     : 'bg-[#1F4B43] text-white'
//                                                     }`}
//                                             >
//                                                 {item.status.toUpperCase()}
//                                             </span>
//                                             {item.promoted && <span>🔥</span>}
//                                             {item.featured && (
//                                                 <span className="text-[13px] sm:text-[12px] md:text-[13px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full bg-[#E7C873] text-black">
//                                                     FEATURED
//                                                 </span>
//                                             )}
//                                         </div> */}
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                 </div>
//                 </div>

//             <Footer />
//         </>
//     );
// };

// export default BrokerProfileCard;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegCommentDots, FaSpinner } from 'react-icons/fa';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Navbar2 from '../Navbar2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import brokerImg from '../assets/profile2.svg';
import bgImg from '../assets/bg10.svg';
import heart from '../assets/heart.svg';
import red from '../assets/RED.svg';
import arrow from '../assets/arrow.svg';
import location from '../assets/location.svg';
import bed from '../assets/bed.svg';
import bath from '../assets/bath.svg';
import square from '../assets/Icon (13).svg';
import Footer from '../Footer';
import { useGetContractorByIdQuery } from '../../store/api/contractorsApiSlice';

// Static fallback images for properties
const propertyImages = {
    1: '../assets/link.svg',
    2: '../assets/link2.svg',
    3: '../assets/link3.svg',
    4: '../assets/link4.jpg',
    5: '../assets/links.jpg',
    6: '../assets/links2.jpg',
};

const BrokerProfileCard = () => {
    const { id } = useParams(); // Get contractor ID from URL
    const { data: contractor, isLoading, error } = useGetContractorByIdQuery(id);

    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (index) => {
        setFavorites((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    // Static categories for properties (since no API for properties is provided)
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
            image: propertyImages[1],
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
            image: propertyImages[2],
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
            image: propertyImages[3],
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
            image: propertyImages[4],
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
            image: propertyImages[5],
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
            image: propertyImages[6],
        },
    ];

    if (isLoading) return <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-[#870A28] w-16 h-16" />
    </div>
    if (error) return <div>Error loading contractor details</div>;

    return (
        <>
            <Navbar2 />
            <div
                className="relative w-full h-auto flex flex-col sm:flex-row items-center px-4 sm:px-8 md:px-12 py-4"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <img
                    src={contractor.contracter_img || brokerImg} // Fallback image
                    alt="Broker"
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
                />
                <div style={{ fontFamily: 'Poppins' }} className="ml-0 sm:ml-4 mt-4 sm:mt-0 text-white text-center sm:text-left">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
                        {contractor.owner}
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-tight">
                        {contractor.company_id?.Contracts_Company_name || 'Unknown Company'}
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-tight">
                        {contractor.address}
                    </p>
                    <button className="mt-4 flex items-center justify-center sm:justify-start bg-[#8A1538] text-white text-base sm:text-lg md:text-xl lg:text-[24px] font-medium px-3 py-1.5 sm:py-2 rounded-md">
                        <FaRegCommentDots className="mr-1" />
                        Message
                    </button>
                </div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 space-y-6 sm:space-y-8">
                <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] mulish-font font-bold text-gray-900 mb-2">
                        About {contractor.owner}
                    </h2>
                    <p style={{ fontFamily: 'Poppins' }} className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-[17px] leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <div>
                    <h3 style={{ fontFamily: 'Poppins' }} className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#8A1538] mb-3">
                        Contact Information
                    </h3>
                    <div
                        style={{ fontFamily: 'Poppins' }}
                        className="border border-gray-300 rounded-md p-4 sm:p-5 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base md:text-lg lg:text-[24px] text-gray-800"
                    >
                        <p>
                            <strong>Name:</strong> {contractor.owner}
                        </p>
                        <p>
                            <strong>Email:</strong> {contractor.CreateBy?.email || 'N/A'}
                        </p>
                        <p>
                            <strong>Phone Number:</strong> {contractor.contact}
                        </p>
                        <p>
                            <strong>Location:</strong> {contractor.address}
                        </p>
                        <p className="flex items-center gap-2">
                            <strong>Ratings:</strong>
                            <span className="flex text-yellow-400">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                                <FaRegStar />
                            </span>
                        </p>
                        <p>
                            <strong>Response Time:</strong> <span className="text-yellow-500 font-medium">10 Mins</span>
                        </p>
                    </div>
                </div>
                <div>
                    <h3 style={{ fontFamily: 'Poppins' }} className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#8A1538] mb-3">
                        Services
                    </h3>
                    <div
                        style={{ fontFamily: 'Poppins' }}
                        className="bg-white border border-gray-300 rounded-md p-4 sm:p-5 text-sm sm:text-base md:text-lg lg:text-[24px] text-[#1D1D1D] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
                    >
                        <p>• {contractor.category_id?.Contracts_Category_id ? 'Contractor Services' : 'N/A'}</p>
                        <p>• Lorem Ipsum is simply dummy</p>
                        <p>• Lorem Ipsum is simply dummy</p>
                        <p>• Lorem Ipsum is simply dummy</p>
                        <p>• Lorem Ipsum is simply dummy</p>
                        <p>• Lorem Ipsum is simply dummy</p>
                    </div>
                </div>
            </div>
            <div style={{ fontFamily: 'Poppins' }} className="px-4 sm:px-8 md:px-10 lg:px-12 py-6 sm:py-8 bg-[#FFE0E9]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-gray-800 text-start px-4">
                    His Recent Works
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-8 mt-2 sm:mt-4 text-start text-xs sm:text-sm md:text-base lg:text-[17px] px-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="relative">
                    <Swiper
                        modules={[Scrollbar]}
                        spaceBetween={10}
                        slidesPerView={1}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 1.5, spaceBetween: 12 },
                            768: { slidesPerView: 2, spaceBetween: 15 },
                            1024: { slidesPerView: 2.5, spaceBetween: 20 },
                            1280: { slidesPerView: 3, spaceBetween: 20 },
                        }}
                        scrollbar={{ draggable: true, hide: false, el: '.custom-featured-scrollbar' }}
                        className="pb-8 featured-swiper"
                    >
                        {categories.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[498/408] bg-white">
                                    <div className="relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-[150px] sm:h-[150px] md:h-[180px] lg:h-[220px] object-cover"
                                        />
                                        {item.promoted && (
                                            <div
                                                style={{ fontFamily: 'Roboto' }}
                                                className="absolute top-3 sm:top-4 left-[-25px] sm:left-[-30px] bg-orange-500 text-white text-[10px] sm:text-[11px] md:text-[12px] font-semibold px-6 sm:px-8 py-1 rotate-[-45deg] shadow-md z-10"
                                            >
                                                PROMOTED
                                            </div>
                                        )}
                                        <div
                                            onClick={() => toggleFavorite(index)}
                                            className="absolute top-2 right-2 p-1.5 sm:p-2 rounded-full cursor-pointer bg-[#1A1A1A]/20"
                                        >
                                            <img
                                                src={favorites[index] ? red : heart}
                                                alt="Heart Icon"
                                                className="w-4 h-4 sm:w-5 sm:h-5"
                                            />
                                        </div>
                                        <div className="absolute top-2 right-10 sm:right-14 bg-[#1A1A1A]/20 p-1.5 sm:p-2 rounded-full">
                                            <img src={arrow} alt="Arrow Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                    </div>
                                    <div style={{ fontFamily: 'Poppins' }} className="p-3 sm:p-4">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-sm sm:text-base md:text-lg lg:text-[19px] font-semibold text-[#1A1A1A] truncate">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm sm:text-base md:text-lg lg:text-[22px] font-semibold text-[#EB664E]">
                                                {item.price}
                                            </p>
                                        </div>
                                        <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-[#1A1A1A] flex items-center gap-1 mt-1 truncate">
                                            <span>
                                                <img src={location} alt="Location Icon" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                            </span>{' '}
                                            {item.address}
                                        </p>
                                        <div className="flex justify-between items-center mt-2 sm:mt-3">
                                            <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm md:text-base lg:text-[16px] text-[#1A1A1A]">
                                                <span className="flex items-center gap-1">
                                                    <img src={bed} alt="Bed Icon" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                    {item.beds} Beds
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <img src={bath} alt="Bath Icon" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                    {item.baths} Baths
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <img src={square} alt="Square Icon" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                    {item.size}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BrokerProfileCard;
