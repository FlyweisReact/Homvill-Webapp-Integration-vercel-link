import React, { useState, useEffect } from 'react';
import propertyImage from './assets/cel.svg';
import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import Footer from './Footer';
import iv from './assets/iv.svg';
import heart from './assets/heart.svg';
import red from './assets/RED.svg';
import arrow from './assets/arrow.svg';
import location from './assets/location.svg';
import bed from './assets/bed.svg';
import bath from './assets/bath.svg';
import square from './assets/Icon (13).svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaEdit, FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectAuthToken } from '../store/slices/authSlice';

const FavoriteProperties = () => {
    const [favorites, setFavorites] = useState({});
    const [properties, setProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoadingProperties, setIsLoadingProperties] = useState(false);
    const itemsPerPage = 6;
    const [totalPages, setTotalPages] = useState(1);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const token = useSelector(selectAuthToken);
    const navigate = useNavigate();

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

    return (
        <>
            {isAuthenticated ? <Navbar2 /> : <Navbar />}
            <div className="flex flex-col md:flex-row items-center justify-between mx-12 px-6">
                <div className="md:w-1/2">
                    <img
                        src={propertyImage}
                        alt="Property"
                        className="rounded-md w-full h-auto object-cover shadow-md"
                    />
                </div>
                <div className="md:w-1/2 mb-8 ml-4 md:mb-0">
                    <h2 style={{ fontFamily: 'Poppins' }} className="text-2xl md:text-[46px] font-bold text-gray-800 md:mt-0 mt-6 leading-snug">
                        The properties you have for sale and for rent are listed here.
                    </h2>
                    <p style={{ fontFamily: 'Poppins' }} className="text-[20px] text-gray-600 mt-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>

            <div
                style={{ fontFamily: 'Poppins' }}
                className="px-4 sm:px-6 md:px-8 lg:px-12 mt-12 py-6 sm:py-8 bg-[#F7F7F7]"
            >
                <div className="flex flex-col sm:flex-row px-4 py-6">
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-medium text-gray-800 text-start">
                            Your Properties
                        </h2>
                        <p className="text-gray-600 mt-2 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-[17px] text-start">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                    <div className="ml-2">
                        <button className="flex items-center bg-[#FFE5EC] text-[#7A0E2E] px-4 py-2 rounded-lg text-[19px] font-medium shadow-sm hover:bg-[#ffdbe4] transition">
                            <img src={iv} className="mr-2 text-lg" />
                            Boost Properties
                        </button>
                    </div>
                </div>
                {isLoadingProperties ? (
                    <div className="flex justify-center items-center py-8">
                        <FaSpinner className="animate-spin text-[#8A1538] w-8 h-8" />
                        <span className="ml-2 text-gray-600">Loading Properties...</span>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {paginatedProperties.map((item, index) => (
                                <div
                                    key={item._id || index}
                                    className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[447/408] bg-white mx-auto"
                                >
                                    <div className="relative">
                                        <img
                                            src={item?.Property_photos?.[0]?.image || ''}
                                            alt={item?.Property_photos?.[0]?.Title || 'Property'}
                                            className="w-full h-[179px] sm:h-[98px] lg:h-[200px] object-cover"
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
                                        <div className="absolute bottom-2 right-2 bg-[#1A1A1A]/20 p-2 rounded-full">
                                            <button onClick={() => navigate('/boost')} className="flex items-center bg-[#FFE5EC] text-[#7A0E2E] px-4 py-2 rounded-lg text-[19px] font-medium shadow-sm hover:bg-[#ffdbe4] transition">
                                                <img src={iv} className="mr-2 text-lg" />
                                                Boost
                                            </button>
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
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm sm:text-[13px] md:text-[16px] text-[#1A1A1A] flex items-center gap-1 truncate">
                                                <img
                                                    src={location}
                                                    alt="Location Icon"
                                                    className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                                                />
                                                {item.Property_Address}, {item.Property_city}
                                            </p>
                                            <button onClick={() => navigate('/details')} className="flex items-center gap-2 bg-[#7A0E2E] text-white text-xs sm:text-sm px-3 py-1.5 rounded-full hover:bg-[#5d0a22] transition">
                                                <FaEdit className="text-sm" />
                                                Edit
                                            </button>
                                        </div>
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
                                                    item.Properties_Status_id?.Pro_Status === 'RENT' ? 'bg-[#00C6DB] text-black' : 'bg-[#1F4B43] text-white'
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
                            ))}
                        </div>
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
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default FavoriteProperties;