import React, { useState } from 'react'
import Navbar2 from '../../Navbar2'
import bg from '../../assets/bg8.svg'
import { FaArrowLeft } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import heart from '../../assets/heart.svg'
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow.svg'
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaEye } from 'react-icons/fa';
import sofa from '../../assets/sofa.svg'
import sofa1 from '../../assets/sofa1.jpg'
import sofa2 from '../../assets/sofa2.jpg'
import sofa3 from '../../assets/sofa3.jpg'
import sofa4 from '../../assets/sofa4.svg'
import sofa5 from '../../assets/sofa5.svg'
import sofa6 from '../../assets/sofa6.png'
import sofa7 from '../../assets/sofa6.svg'
import Footer from '../../Footer';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import modern from '../../assets/modern1.svg'
import modern2 from '../../assets/modern2.svg'
import modern3 from '../../assets/modern3.svg'
import modern4 from '../../assets/modern4.svg'
import search from '../../assets/search.svg'
const LivingRoom = () => {
    const tabs = [
        'Sofas & Sectionals',
        'Coffee & Side Tables',
        'TV Units',
        'Recliners & Chairs',
        'Cabinets & Storage',
    ];
     const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const handleClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const products = [
        {
            id: 1,
            title: 'OLd Modern Soft Chair',
            image: sofa,
            price: '$70.00',
            rating: 4,
            originalPrice: 100.0,
            link : '/viewfurniture'
        },
        {
            id: 2,
            title: 'Glass Coffee Table',
            image: sofa1,
            price: '$70.00',
            rating: 3,
            originalPrice: 100.0
        },
        {
            id: 3,
            title: 'White Morden Coffee Ta..',
            image: sofa2,
            price: '$70.00',
            rating: 2,
            originalPrice: 100.0
        },
        {
            id: 4,
            title: 'Wooden Bedside Tabel',
            image: sofa3,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 5,
            title: 'Morden Black TV Unite',
            image: sofa4,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 6,
            title: 'White TV Unit',
            image: sofa5,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 7,
            title: 'Modern Soft Chair',
            image: sofa6,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 8,
            title: 'Modern Chair',
            image: modern,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 9,
            title: 'Comfortable Soft Chair',
            image: sofa7,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 10,
            title: 'Morden TV Cabinert',
            image: modern2,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 11,
            title: 'Modern Table & Chair Set',
            image: modern3,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 12,
            title: 'Modern Soft Chair',
            image: modern4,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 1,
            title: 'OLd Modern Soft Chair',
            image: sofa,
            price: '$70.00',
            rating: 4,
            originalPrice: 100.0
        },
        {
            id: 2,
            title: 'Glass Coffee Table',
            image: sofa1,
            price: '$70.00',
            rating: 3,
            originalPrice: 100.0
        },
        {
            id: 3,
            title: 'White Morden Coffee Ta..',
            image: sofa2,
            price: '$70.00',
            rating: 2,
            originalPrice: 100.0
        },
        {
            id: 4,
            title: 'Wooden Bedside Tabel',
            image: sofa3,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 5,
            title: 'Morden Black TV Unite',
            image: sofa4,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 6,
            title: 'White TV Unit',
            image: sofa5,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 7,
            title: 'Modern Soft Chair',
            image: sofa6,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 8,
            title: 'Modern Chair',
            image: modern,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 9,
            title: 'Comfortable Soft Chair',
            image: sofa7,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 10,
            title: 'Morden TV Cabinert',
            image: modern2,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 11,
            title: 'Modern Table & Chair Set',
            image: modern3,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
        {
            id: 12,
            title: 'Modern Soft Chair',
            image: modern4,
            price: '$70.00',
            rating: 5,
            originalPrice: 100.0
        },
    ];
    return (
        <>
            <Navbar2 />
            <div className="relative w-full overflow-hidden">
                <div
                    style={{ backgroundImage: `url(${bg})` }}
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center object-cover z-0"
                ></div>

                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center md:h-full py-20 text-center px-4 text-white">
                    <h1 style={{ fontFamily: 'Poppins' }} className="text-3xl md:text-[64px] font-semibold mb-4">
                        Living Room
                    </h1>

                </div>
            </div>
            <div style={{ fontFamily: 'Poppins' }} className="flex items-center gap-6 bg-[#ffe9f0] py-3 px-6 md:px-12 overflow-x-auto whitespace-nowrap">
                <button  onClick={() => navigate(-1)}  className="text-[#8A1538] text-lg p-2">
                    <FaArrowLeft />
                </button>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className="border border-[#8A1538] text-[#8A1538] text-[20px] font-medium px-4 py-2 rounded-full bg-white hover:bg-[#FFE0E9]  transition"
                    >
                        • {tab}
                    </button>
                ))}
            </div>
            {/* <div className="p-4 px-10">
                <h2 style={{ fontFamily: 'Poppins' }} className="text-[32px] font-semibold text-[#1A1A1A] mb-3">Find your furniture</h2>
                <div className="flex w-full bg-[#fff0f5] p-1 rounded-lg">
                    <input style={{ fontFamily: 'Poppins' }}
                        type="text"
                        placeholder="Search for products..."
                        className="flex-1 border border-[#8A1538] rounded-md text-[20px]  h-[50px] px-4 py-2 text-sm focus:outline-none"
                    />
                    <select style={{ fontFamily: 'Poppins' }} className="border-t border-b border-[#8A1538] w-[325px] h-[50px] rounded-md px-4 py-2 text-[20px] text-gray-700 focus:outline-none">
                        <option>Select category</option>
                        <option>Living Room</option>
                        <option>Bedroom</option>
                        <option>Dining & Kitchen</option>
                        <option>Kids & Teens</option>
                        <option>Office & Study</option>
                        <option>Outdoor</option>
                        <option>Entryway & Hall</option>
                        <option>Storage & Utility</option>
                        <option>Accent & Decor</option>
                    </select>
                    <button className="bg-[#8A1538] text-white px-4 py-2 rounded-r-md">
                        <img src={search} className="w-8 h-8 filter brightness-0 invert"
                        />
                    </button>
                </div>
            </div> */}
            <div className="p-4 px-6 sm:px-10">
                <h2 style={{ fontFamily: 'Poppins' }} className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#1A1A1A] mb-3">
                    Find your furniture
                </h2>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 w-full bg-[#fff0f5] p-2 sm:p-1 rounded-lg">
                    {/* Search input */}
                    <input
                        type="text"
                        placeholder="Search for products..."
                        style={{ fontFamily: 'Poppins' }}
                        className="flex-1 border border-[#8A1538] rounded-md text-[16px] sm:text-[18px] lg:text-[20px] h-[45px] sm:h-[50px] px-4 py-2 focus:outline-none"
                    />

                    {/* Dropdown */}
                    <select
                        style={{ fontFamily: 'Poppins' }}
                        className="border border-[#8A1538] rounded-md text-[16px] sm:text-[18px] lg:text-[20px] h-[45px] sm:h-[50px] px-4 py-2 text-gray-700 focus:outline-none w-full sm:w-[260px] lg:w-[325px]"
                    >
                        <option>Select category</option>
                        <option>Living Room</option>
                        <option>Bedroom</option>
                        <option>Dining & Kitchen</option>
                        <option>Kids & Teens</option>
                        <option>Office & Study</option>
                        <option>Outdoor</option>
                        <option>Entryway & Hall</option>
                        <option>Storage & Utility</option>
                        <option>Accent & Decor</option>
                    </select>

                    {/* Search button */}
                    <button className="bg-[#8A1538] text-white rounded-md sm:rounded-r-md h-[45px] sm:h-[50px] flex items-center justify-center px-4">
                        <img src={search} className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-0 invert" alt="search" />
                    </button>
                </div>
            </div>
            {/* <div className="p-6 grid grid-cols-2 px-9 sm:grid-cols-3 md:grid-cols-4 gap-12">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl  transition-all duration-300 relative overflow-hidden">
                        <div className="relative">
                            <img src={product.image} alt={product.title} className="w-full h-[176px] object-cover p-2 rounded-3xl" />

                            <div className=" z-10  absolute bg-[#1A1A1A]/20 p-2 rounded-full top-2 right-2">
                                <img src={heart} className="w-5 h-5" />
                            </div>
                            <div className=" z-10 absolute bg-[#1A1A1A]/20 p-2 rounded-full top-2 right-12">
                                <img src={arrow} className="w-5 h-5" />
                            </div>

                        </div>
                        <div className="p-2 text-left">
                            <h3 className="text-[#8A1538] sansation-bold font-semibold text-[24px] truncate">{product.title}</h3>

                            <div className="flex justify-start mt-1 mb-2 gap-1">
                                <div className="w-3 h-3 rounded-full bg-[#ABE7BF]" />   
                                <div className="w-3 h-3 rounded-full bg-[#ABD1E7]" />  
                                <div className="w-3 h-3 rounded-full bg-[#CCABE7]" />  
                                <div className="w-3 h-3 rounded-full bg-[#E7ABE1]" /> 
                            </div>
                            <div className="flex sansation-bold  items-center gap-3 mt-8">
                    
                                <div className="flex items-center gap-2">
                                    <p className="text-[#000000] sansation-bold  font-bold text-[20px]">{product.price}</p>
                                    <p className="text-[#00000080] sansation-bold line-through text-[12px]">${product.originalPrice}</p>
                                </div>

                                <button className="text-[14px] px-2 sansation-bold py-1 bg-[#e4e7fb] text-[#1A1A1A] rounded-full font-semibold shadow-sm">
                                    Add to Cart
                                </button>
                                <button className="text-[14px] px-2 py-1 bg-[#e4e7fb] text-[#1A1A1A] rounded-full font-semibold shadow-sm">
                                    Buy it
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div> */}
            <div className="p-3 min-[450px]:p-4  sm:p-6 grid grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 md:grid-cols-2 gap-6 min-[450px]:gap-8 sm:gap-12 px-9">
                {products.map((product) => (
                    <Link to={product.link} key={product.id} className="bg-white rounded-2xl transition-all duration-300 relative overflow-hidden">
                        <div className="relative">
                            <img src={product.image} alt={product.title} className="w-full h-32 min-[450px]:h-40 sm:h-[176px] object-cover p-2 rounded-3xl" />
                            <div className="z-10 absolute bg-[#1A1A1A]/20 p-2 rounded-full top-2 right-2">
                                <img src={heart} className="w-4 h-4 min-[450px]:w-5 min-[450px]:h-5" />
                            </div>
                            <div className="z-10 absolute bg-[#1A1A1A]/20 p-2 rounded-full top-2 right-12">
                                <img src={arrow} className="w-4 h-4 min-[450px]:w-5 min-[450px]:h-5" />
                            </div>
                        </div>
                        <div className="p-2 text-left">
                            <h3 className="text-[#8A1538] sansation-bold font-semibold text-lg min-[450px]:text-xl sm:text-[24px] truncate">
                                {product.title}
                            </h3>
                            <div className="flex justify-start mt-1 mb-2 gap-1">
                                <div className="w-2 h-2 min-[450px]:w-3 min-[450px]:h-3 rounded-full bg-[#ABE7BF]" />
                                <div className="w-2 h-2 min-[450px]:w-3 min-[450px]:h-3 rounded-full bg-[#ABD1E7]" />
                                <div className="w-2 h-2 min-[450px]:w-3 min-[450px]:h-3 rounded-full bg-[#CCABE7]" />
                                <div className="w-2 h-2 min-[450px]:w-3 min-[450px]:h-3 rounded-full bg-[#E7ABE1]" />
                            </div>
                            <div className="flex sansation-bold items-center gap-3 mt-4 min-[450px]:mt-6 sm:mt-8">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#000000] sansation-bold font-bold text-base min-[450px]:text-lg sm:text-[20px]">
                                        {product.price}
                                    </p>
                                    <p className="text-[#00000080] sansation-bold line-through text-xs sm:text-[12px]">
                                        ${product.originalPrice}
                                    </p>
                                </div>
                                <button className="text-xs min-[450px]:text-sm sm:text-[14px] px-2 sansation-bold py-1 bg-[#e4e7fb] text-[#1A1A1A] rounded-full font-semibold shadow-sm">
                                    Add to Cart
                                </button>
                                <button className="text-xs min-[450px]:text-sm sm:text-[14px] px-2 py-1 bg-[#e4e7fb] text-[#1A1A1A] rounded-full font-semibold shadow-sm">
                                    Buy it
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex items-center justify-center pb-4 space-x-4 text-sm text-black">
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
                  ${isActive
                                    ? 'bg-pink-100 border border-[#832333] text-black'
                                    : 'hover:bg-gray-100'}`}
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
            <div className="p-6 md:p-12  mx-2 text-[#1A1A1A]" style={{ fontFamily: 'Poppins' }}>
                {/* Main Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    Lorem Ipsum is simply dummy text
                </h2>

                {/* Main Paragraph */}
                <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                {/* Numbered Sections */}
                {[1, 2, 3].map((num) => (
                    <div key={num} className="mb-6">
                        <h3 className="font-semibold text-sm md:text-base mb-1">
                            <span className="font-bold">{num}. </span>Lorem Ipsum is simply dummy text
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                ))}
            </div>
            <Footer />

        </>
    )
}

export default LivingRoom