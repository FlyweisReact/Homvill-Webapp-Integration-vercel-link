import React, { useState } from 'react'
import frame from '../assets/Frame 9.svg'
import frame2 from '../assets/Frame 10.svg'
import frame3 from '../assets/Frame 11 (1).svg'
import { useNavigate, Link } from 'react-router-dom';
import red from '../assets/RED.svg';
import Navbar2 from '../Navbar2';
import heart from '../assets/heart.svg'
import arrow from '../assets/arrow.svg'
import search from '../assets/search.svg'
import sofa from '../assets/sofa.svg'
import sofa1 from '../assets/sofa1.jpg'
import sofa2 from '../assets/sofa2.jpg'
import sofa3 from '../assets/sofa3.jpg'
import sofa4 from '../assets/sofa4.svg'
import sofa5 from '../assets/sofa5.svg'
import sofa6 from '../assets/sofa6.png'
import sofa7 from '../assets/sofa6.svg'
import Footer from '../Footer';
import modern from '../assets/modern1.svg'
import modern2 from '../assets/modern2.svg'
import modern3 from '../assets/modern3.svg'
import modern4 from '../assets/modern4.svg'
import location from '../assets/location2.svg'
const ViewShop = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const products = [
        {
            id: 1,
            title: 'OLd Modern Soft Chair',
            image: sofa,
            price: '$70.00',
            rating: 4,
            originalPrice: 100.0,
            link: '/viewfurniture'
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
    const [favorites2, setFavorites2] = useState({});

    const toggleFavorite2 = (index) => {
        setFavorites2((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };
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
            {/* <div className="flex bg-gray-100">

                <div className="w-1/4 bg-white ps-12 pt-12 pe-6 sticky top-0 h-screen overflow-y-auto">
                    <h2 className="text-[32px] font-bold mb-4 sansation-bold">Shop By</h2>

                    <div className="mb-6">
                        <h3 className="text-[24px] font-semibold flex justify-between items-center">
                            Categories
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </h3>
                        <ul className="mt-2 space-y-2 text-[20px] text-gray-600">
                            <li>Wardrobes</li>
                            <li>Beds</li>
                            <li>Mattresses</li>
                            <li>Bedroom Ensemble</li>
                            <li>Wardobes</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-[24px] font-semibold flex justify-between items-center">
                            Color Family
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </h3>
                    </div>

                    <div>
                        <h3 className="text-[24px] font-semibold flex justify-between items-center">
                            Discount Range
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </h3>
                    </div>
                </div>

                <div className="w-3/4 p-6 bg-white">
                    <div className="grid grid-cols-3 gap-6">
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
                </div>
            </div> */}
            <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-4 bg-white text-gray-800 font-semibold flex items-center justify-between"
                    onClick={toggleSidebar}
                >
                    Shop By
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Sidebar */}
                <div
                    className={`${isSidebarOpen ? 'block' : 'hidden'
                        } md:block w-full md:w-1/4 bg-white p-6 lg:ps-12 md:pt-12 lg:pe-6 sticky top-0 h-auto md:h-screen overflow-y-auto`}
                >
                    <h2 className="text-2xl md:text-[32px] font-bold mb-4 sansation-bold">Shop By</h2>

                    <div className="mb-6">
                        <h3 className="text-xl md:text-[24px] font-semibold flex justify-between items-center">
                            Categories
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </h3>
                        <ul className="mt-2 space-y-2 text-base md:text-[20px] text-gray-600">
                            <li>Wardrobes</li>
                            <li>Beds</li>
                            <li>Mattresses</li>
                            <li>Bedroom Ensemble</li>
                            <li>Wardrobes</li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl md:text-[24px] font-semibold flex justify-between items-center">
                            Color Family
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </h3>
                    </div>

                    <div>
                        <h3 className="text-xl md:text-[24px] font-semibold flex justify-between items-center">
                            Discount Range
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </h3>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="w-full md:w-3/4 p-4 md:p-6 bg-white">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {products.map((product, index) => (
               <div
                  key={product.id}
                  className="bg-white rounded-2xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="relative">
                     <Link to={'/viewfurniture'}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-32 sm:h-40 md:h-[176px] object-cover p-2 rounded-3xl"
                    /></Link>
                    {/* <div className="z-10 absolute bg-[#1A1A1A]/20 p-2 rounded-full top-2 right-2">
                      <img src={heart} className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div> */}
                     <div
                                                            onClick={() => toggleFavorite2(index)}
                                                            className="absolute top-2 right-2 p-2 rounded-full cursor-pointer bg-[#1A1A1A]/20"
                                                        >
                                                            <img
                                                                src={favorites2[index] ? red : heart}
                                                                alt="Heart Icon"
                                                                className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                                                            />
                                                        </div>
                    <div className="z-10 absolute bg-[#1A1A1A]/20 p-2 rounded-full top-2 right-12">
                      <img src={arrow} className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div className="p-2 text-left">
                    <h3 className="text-[#8A1538] sansation-bold font-semibold text-lg sm:text-xl md:text-[24px] truncate">
                      {product.title}
                    </h3>
                    <div className="flex justify-start mt-1 mb-2 gap-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ABE7BF]" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ABD1E7]" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#CCABE7]" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#E7ABE1]" />
                    </div>
                    <div className="flex sansation-bold items-center gap-2 sm:gap-3 mt-2 sm:mt-4 md:mt-8 flex-wrap">
                      <div className="flex items-center gap-2">
                        <p className="text-[#000000] sansation-bold font-bold text-base sm:text-lg md:text-[20px]">
                          {product.price}
                        </p>
                        <p className="text-[#00000080] sansation-bold line-through text-xs sm:text-[12px]">
                          ${product.originalPrice}
                        </p>
                      </div>
                      <button className="text-xs sm:text-sm md:text-[14px] px-2 py-1 bg-[#e4e7fb] text-[#1A1A1A] rounded-full font-semibold shadow-sm">
                        Add to Cart
                      </button>
                      <button className="text-xs sm:text-sm md:text-[14px] px-2 py-1 bg-[#e4e7fb] text-[#1A1A1A] rounded-full font-semibold shadow-sm">
                        Buy it
                      </button>
                    </div>
                  </div>
                </div>
              ))}
                </div>
            </div>
        </div >
            <Footer />

        </>
    )
}

export default ViewShop