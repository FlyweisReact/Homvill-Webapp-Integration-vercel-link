// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import iv from './assets/iv.svg'

// import bgImage from './assets/rect.svg'
// import Navbar2 from './Navbar2'
// import { FaSortAmountDown, FaEdit } from 'react-icons/fa';
// import rental from './assets/link.svg';
// import link2 from './assets/link2.jpg'
// import link3 from './assets/link3.jpg'
// import skyper from './assets/link.jpg'
// import land from './assets/link2.svg';
// import town from './assets/link3.svg';
// import modern from './assets/modern.svg';
// import apart from './assets/apart.jpg';
// import re from './assets/re.jpg';
// import office from './assets/office.jpg';
// import contract from './assets/contract.jpg';
// import home from './assets/home.jpg';
// import builder from './assets/builders.jpg';
// import heart from './assets/heart.svg';
// import tourGif from './assets/active.gif'
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// import red from './assets/RED.svg';
// import arrow from './assets/arrow.svg';
// import Footer from './Footer';
// import bed from './assets/bed.svg';
// import bath from './assets/bath.svg';
// import square from './assets/Icon (13).svg';
// import link from './assets/link4.jpg';
// import links from './assets/links.jpg';
// import links2 from './assets/links2.jpg';
// import location1 from './assets/location.svg';

// const tabs = [
//     'Saved homes',
//     'Saved searches',
//     'Your home',
//     'Renter Hub',
//     'Recently Viewed',
//     'Manage tours',
// ];
// const RecentActivity = () => {
//     const [activeTab, setActiveTab] = useState('Your home');
//     const location = useLocation(); // detect route changes

//     useEffect(() => {
//         const storedTab = localStorage.getItem('activeTab');
//         if (storedTab && tabs.includes(storedTab)) {
//             setActiveTab(storedTab);
//             localStorage.removeItem('activeTab'); // optional cleanup
//         }
//     }, [location]);
//     const renderSavedHomes = () => (
//         <>
//             <div className="grid grid-cols-1 sm:grid-cols-1 mx-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {categories.map((item, index) => (
//                     <div
//                         key={index}
//                         className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[447/408] bg-white mx-auto"
//                     >
//                         {/* Image Section */}
//                         <div className="relative">
//                             <img
//                                 src={item.image}
//                                 alt={item.title}
//                                 className="w-full h-[179px] sm:h-[98px] lg:h-[200px] object-cover"
//                             />
//                             {item.promoted && (
//                                 <div
//                                     style={{ fontFamily: 'Roboto' }}
//                                     className="absolute top-4 left-[-30px] bg-orange-500 text-white text-[12px] sm:text-[11px] md:text-[12px] font-semibold px-8 py-1 rotate-[-45deg] shadow-md z-10"
//                                 >
//                                     PROMOTED
//                                 </div>
//                             )}
//                             <div
//                                 onClick={() => toggleFavorite(index)}
//                                 className="absolute top-2 right-2 p-2 rounded-full cursor-pointer bg-[#1A1A1A]/20"
//                             >
//                                 <img
//                                     src={favorites[index] ? red : heart}
//                                     alt="Heart Icon"
//                                     className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5"
//                                 />
//                             </div>
//                             {/* Arrow Icon */}
//                             <div className="absolute top-2 right-14 bg-[#1A1A1A]/20 p-2 rounded-full">
//                                 <img src={arrow} alt="Arrow Icon" className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
//                             </div>
//                         </div>

//                         {/* Property Details */}
//                         <div style={{ fontFamily: 'Poppins' }} className="p-4 sm:p-3 md:p-4">
//                             <div className="flex justify-between items-center">
//                                 <h3 className="text-[16px] sm:text-[14px] md:text-[15px] lg:text-[19px] font-semibold text-[#1A1A1A] truncate">
//                                     {item.title}
//                                 </h3>
//                                 <p className="text-[18px] sm:text-[16px] md:text-[17px] lg:text-[22px] font-semibold text-[#EB664E]">
//                                     {item.price}
//                                 </p>
//                             </div>
//                             <p className="text-sm sm:text-[13px] md:text-[16px] text-[#1A1A1A] flex items-center gap-1 mt-1 truncate">
//                                 <span>
//                                     {/* <img src={location} alt="Location Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" /> */}
//                                 </span>{' '}
//                                 {item.address}
//                             </p>
//                             <div className="flex justify-between items-center mt-3 sm:mt-2 md:mt-3">
//                                 <div className="flex gap-3 sm:gap-2 md:gap-3 text-sm sm:text-[12px] md:text-[13px] lg:text-[16px] text-[#1A1A1A]">
//                                     <span className="flex items-center gap-1">
//                                         <img src={bed} alt="Bed Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                         {item.beds} Beds
//                                     </span>
//                                     <span className="flex items-center gap-1">
//                                         <img src={bath} alt="Bath Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                         {item.baths} Baths
//                                     </span>
//                                     <span className="flex items-center gap-1">
//                                         <img src={square} alt="Square Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                         {item.size}
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Status Label with Featured */}
//                             <div style={{ fontFamily: 'Poppins' }} className="mt-4 sm:mt-3 md:mt-4 flex items-center gap-2 flex-wrap">
//                                 <span
//                                     className={`text-[13px] sm:text-[12px] md:text-[14px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full ${item.status === 'For Rent' ? 'bg-[#00C6DB] text-black' : 'bg-[#1F4B43] text-white'
//                                         }`}
//                                 >
//                                     {item.status.toUpperCase()}
//                                 </span>
//                                 {item.promoted && <span>🔥</span>}
//                                 {item.featured && (
//                                     <span className="text-[13px] sm:text-[12px] md:text-[13px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full bg-[#E7C873] text-black">
//                                         FEATURED
//                                     </span>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex items-center mt-8 justify-center pb-4 space-x-4 text-sm text-black">
//                 <button
//                     onClick={() => handleClick(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className="disabled:text-gray-300"
//                 >
//                     <FiChevronLeft />
//                 </button>

//                 {[...Array(totalPages)].map((_, index) => {
//                     const page = index + 1;
//                     const isActive = page === currentPage;
//                     return (
//                         <button
//                             key={page}
//                             onClick={() => handleClick(page)}
//                             className={`w-7 h-7 rounded-full flex items-center justify-center transition-all
//                                          ${isActive
//                                     ? 'bg-pink-100 border border-[#832333] text-black'
//                                     : 'hover:bg-gray-100'}`}
//                         >
//                             {page}
//                         </button>
//                     );
//                 })}

//                 <button
//                     onClick={() => handleClick(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className="disabled:text-gray-300"
//                 >
//                     <FiChevronRight />
//                 </button>
//             </div>
//         </>
//     );
//     const renderSavedHomes2 = () => (
//         <>
//             <div className="grid grid-cols-1 sm:grid-cols-1 mx-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {categories2.map((item, index) => (
//                     <div
//                         key={index}
//                         className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[447/408] bg-white mx-auto"
//                     >
//                         {/* Image Section */}
//                         <div className="relative">
//                             <img
//                                 src={item.image}
//                                 alt={item.title}
//                                 className="w-full h-[179px] sm:h-[98px] lg:h-[200px] object-cover"
//                             />
//                             {item.promoted && (
//                                 <div
//                                     style={{ fontFamily: 'Roboto' }}
//                                     className="absolute top-4 left-[-30px] bg-orange-500 text-white text-[12px] sm:text-[11px] md:text-[12px] font-semibold px-8 py-1 rotate-[-45deg] shadow-md z-10"
//                                 >
//                                     PROMOTED
//                                 </div>
//                             )}
//                             <div
//                                 onClick={() => toggleFavorite(index)}
//                                 className="absolute top-2 right-2 p-2 rounded-full cursor-pointer bg-[#1A1A1A]/20"
//                             >
//                                 <img
//                                     src={favorites[index] ? red : heart}
//                                     alt="Heart Icon"
//                                     className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5"
//                                 />
//                             </div>
//                             {/* Arrow Icon */}
//                             <div className="absolute top-2 right-14 bg-[#1A1A1A]/20 p-2 rounded-full">
//                                 <img src={arrow} alt="Arrow Icon" className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
//                             </div>
//                         </div>

//                         {/* Property Details */}
//                         <div style={{ fontFamily: 'Poppins' }} className="p-4 sm:p-3 md:p-4">
//                             <div className="flex justify-between items-center">
//                                 <h3 className="text-[16px] sm:text-[14px] md:text-[15px] lg:text-[19px] font-semibold text-[#1A1A1A] truncate">
//                                     {item.title}
//                                 </h3>
//                                 <p className="text-[18px] sm:text-[16px] md:text-[17px] lg:text-[22px] font-semibold text-[#EB664E]">
//                                     {item.price}
//                                 </p>
//                             </div>
//                             <p className="text-sm sm:text-[13px] md:text-[16px] text-[#1A1A1A] flex items-center gap-1 mt-1 truncate">
//                                 <span>
//                                     <img src={location1} alt="Location Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                 </span>{' '}
//                                 {item.address}
//                             </p>
//                             <div className="flex justify-between items-center mt-3 sm:mt-2 md:mt-3">
//                                 <div className="flex gap-3 sm:gap-2 md:gap-3 text-sm sm:text-[12px] md:text-[13px] lg:text-[16px] text-[#1A1A1A]">
//                                     <span className="flex items-center gap-1">
//                                         <img src={bed} alt="Bed Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                         {item.beds} Beds
//                                     </span>
//                                     <span className="flex items-center gap-1">
//                                         <img src={bath} alt="Bath Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                         {item.baths} Baths
//                                     </span>
//                                     <span className="flex items-center gap-1">
//                                         <img src={square} alt="Square Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                         {item.size}
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Status Label with Featured */}
//                             <div style={{ fontFamily: 'Poppins' }} className="mt-4 sm:mt-3 md:mt-4 flex items-center gap-2 flex-wrap">
//                                 <span
//                                     className={`text-[13px] sm:text-[12px] md:text-[14px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full ${item.status === 'For Rent' ? 'bg-[#00C6DB] text-black' : 'bg-[#1F4B43] text-white'
//                                         }`}
//                                 >
//                                     {item.status.toUpperCase()}
//                                 </span>
//                                 {item.promoted && <span>🔥</span>}
//                                 {item.featured && (
//                                     <span className="text-[13px] sm:text-[12px] md:text-[13px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full bg-[#E7C873] text-black">
//                                         FEATURED
//                                     </span>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex items-center mt-8 justify-center pb-4 space-x-4 text-sm text-black">
//                 <button
//                     onClick={() => handleClick(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className="disabled:text-gray-300"
//                 >
//                     <FiChevronLeft />
//                 </button>

//                 {[...Array(totalPages)].map((_, index) => {
//                     const page = index + 1;
//                     const isActive = page === currentPage;
//                     return (
//                         <button
//                             key={page}
//                             onClick={() => handleClick(page)}
//                             className={`w-7 h-7 rounded-full flex items-center justify-center transition-all
//                                          ${isActive
//                                     ? 'bg-pink-100 border border-[#832333] text-black'
//                                     : 'hover:bg-gray-100'}`}
//                         >
//                             {page}
//                         </button>
//                     );
//                 })}

//                 <button
//                     onClick={() => handleClick(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className="disabled:text-gray-300"
//                 >
//                     <FiChevronRight />
//                 </button>
//             </div>
//         </>
//     );

//     const renderSavedHomes3 = () => (
//         <>
//             <div className="grid grid-cols-1 sm:grid-cols-1 mx-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {categories3.map((item, index) => (
//                     <div
//                         key={index}
//                         className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[447/408] bg-white mx-auto"
//                     >
//                         {/* Image Section */}
//                         <div className="relative">
//                             <img
//                                 src={item.image}
//                                 alt={item.title}
//                                 className="w-full h-[179px] sm:h-[98px] lg:h-[200px] object-cover"
//                             />
//                             {item.promoted && (
//                                 <div
//                                     style={{ fontFamily: 'Roboto' }}
//                                     className="absolute top-4 left-[-30px] bg-orange-500 text-white text-[12px] sm:text-[11px] md:text-[12px] font-semibold px-8 py-1 rotate-[-45deg] shadow-md z-10"
//                                 >
//                                     PROMOTED
//                                 </div>
//                             )}

//                             {/* Arrow Icon */}
//                             <div className="absolute top-2 right-2 bg-[#1A1A1A]/20 p-2 rounded-full">
//                                 <img src={arrow} alt="Arrow Icon" className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
//                             </div>
//                             <div className="absolute bottom-2 right-2 bg-[#1A1A1A]/20 p-2 rounded-full">
//                                 <button className="flex items-center bg-[#FFE5EC] text-[#7A0E2E] px-4 py-2 rounded-lg text-[19px] font-medium shadow-sm hover:bg-[#ffdbe4] transition">
//                                     <img src={iv} className="mr-2 text-lg" />
//                                     Boost
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Property Details */}
//                         <div style={{ fontFamily: 'Poppins' }} className="p-4 sm:p-3 md:p-4">
//                             <div className="flex justify-between items-center">
//                                 <h3 className="text-[16px] sm:text-[14px] md:text-[15px] lg:text-[19px] font-semibold text-[#1A1A1A] truncate">
//                                     {item.title}
//                                 </h3>
//                                 <p className="text-[18px] sm:text-[16px] md:text-[17px] lg:text-[22px] font-semibold text-[#EB664E]">
//                                     {item.price}
//                                 </p>
//                             </div>
//                             {/* <p className="text-sm sm:text-[13px] md:text-[16px] text-[#1A1A1A] flex items-center gap-1 mt-1 truncate">
//                                                <span>
//                                                    <img src={location} alt="Location Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                                </span>{' '}
//                                                {item.address}
//                                            </p> */}
//                             <div className="flex items-center justify-between">
//                                 {/* Left: Address */}
//                                 <p className="text-sm sm:text-[13px] md:text-[16px] text-[#1A1A1A] flex items-center gap-1 truncate">
//                                     <img
//                                         src={location1}
//                                         alt="Location Icon"
//                                         className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
//                                     />
//                                     {item.address}
//                                 </p>

//                                 {/* Right: Edit button */}
//                                 <button className="flex items-center gap-2 bg-[#7A0E2E] text-white text-xs sm:text-sm px-3 py-1.5 rounded-full hover:bg-[#5d0a22] transition">
//                                     <FaEdit className="text-sm" />
//                                     Edit
//                                 </button>
//                             </div>
//                             <div className="flex justify-between items-center mt-3 sm:mt-2 md:mt-3">
//                                 <div className="flex gap-3 sm:gap-2 md:gap-3 text-sm sm:text-[12px] md:text-[13px] lg:text-[16px] text-[#1A1A1A]">
//                                     <span className="flex items-center gap-1">
//                                         <img src={bed} alt="Bed Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                         {item.beds} Beds
//                                     </span>
//                                     <span className="flex items-center gap-1">
//                                         <img src={bath} alt="Bath Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                         {item.baths} Baths
//                                     </span>
//                                     <span className="flex items-center gap-1">
//                                         <img src={square} alt="Square Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                         {item.size}
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Status Label with Featured */}
//                             <div style={{ fontFamily: 'Poppins' }} className="mt-4 sm:mt-3 md:mt-4 flex items-center gap-2 flex-wrap">
//                                 <span
//                                     className={`text-[13px] sm:text-[12px] md:text-[14px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full ${item.status === 'For Rent' ? 'bg-[#00C6DB] text-black' : 'bg-[#1F4B43] text-white'
//                                         }`}
//                                 >
//                                     {item.status.toUpperCase()}
//                                 </span>
//                                 {item.promoted && <span>🔥</span>}
//                                 {item.featured && (
//                                     <span className="text-[13px] sm:text-[12px] md:text-[13px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full bg-[#E7C873] text-black">
//                                         FEATURED
//                                     </span>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="flex items-center mt-8 justify-center pb-4 space-x-4 text-sm text-black">
//                 <button
//                     onClick={() => handleClick(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className="disabled:text-gray-300"
//                 >
//                     <FiChevronLeft />
//                 </button>

//                 {[...Array(totalPages)].map((_, index) => {
//                     const page = index + 1;
//                     const isActive = page === currentPage;
//                     return (
//                         <button
//                             key={page}
//                             onClick={() => handleClick(page)}
//                             className={`w-7 h-7 rounded-full flex items-center justify-center transition-all
//                                          ${isActive
//                                     ? 'bg-pink-100 border border-[#832333] text-black'
//                                     : 'hover:bg-gray-100'}`}
//                         >
//                             {page}
//                         </button>
//                     );
//                 })}

//                 <button
//                     onClick={() => handleClick(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className="disabled:text-gray-300"
//                 >
//                     <FiChevronRight />
//                 </button>
//             </div>
//         </>
//     );
//     const renderSavedHomes4 = () => (
//         <>
//             <div className="grid grid-cols-1 sm:grid-cols-1 mx-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {categories4.map((item, index) => (
//                     <div
//                         key={index}
//                         className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[447/408] bg-white mx-auto"
//                     >
//                         {/* Image Section */}
//                         <div className="relative">
//                             <img
//                                 src={item.image}
//                                 alt={item.title}
//                                 className="w-full h-[179px] sm:h-[98px] lg:h-[200px] object-cover"
//                             />
//                             {item.promoted && (
//                                 <div
//                                     style={{ fontFamily: 'Roboto' }}
//                                     className="absolute top-4 left-[-30px] bg-orange-500 text-white text-[12px] sm:text-[11px] md:text-[12px] font-semibold px-8 py-1 rotate-[-45deg] shadow-md z-10"
//                                 >
//                                     PROMOTED
//                                 </div>
//                             )}
//                             <div
//                                 onClick={() => toggleFavorite(index)}
//                                 className="absolute top-2 right-2 p-2 rounded-full cursor-pointer bg-[#1A1A1A]/20"
//                             >
//                                 <img
//                                     src={favorites[index] ? red : heart}
//                                     alt="Heart Icon"
//                                     className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5"
//                                 />
//                             </div>
//                             {/* Arrow Icon */}
//                             <div className="absolute top-2 right-14 bg-[#1A1A1A]/20 p-2 rounded-full">
//                                 <img src={arrow} alt="Arrow Icon" className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
//                             </div>
//                         </div>

//                         {/* Property Details */}
//                         <div style={{ fontFamily: 'Poppins' }} className="p-4 sm:p-3 md:p-4">
//                             <div className="flex justify-between items-center">
//                                 <h3 className="text-[16px] sm:text-[14px] md:text-[15px] lg:text-[19px] font-semibold text-[#1A1A1A] truncate">
//                                     {item.title}
//                                 </h3>
//                                 <p className="text-[18px] sm:text-[16px] md:text-[17px] lg:text-[22px] font-semibold text-[#EB664E]">
//                                     {item.price}
//                                 </p>
//                             </div>
//                             <p className="text-sm sm:text-[13px] md:text-[16px] text-[#1A1A1A] flex items-center gap-1 mt-1 truncate">
//                                 <span>
//                                     {/* <img src={location} alt="Location Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" /> */}
//                                 </span>{' '}
//                                 {item.address}
//                             </p>
//                             <div className="flex justify-between items-center mt-3 sm:mt-2 md:mt-3">
//                                 <div className="flex gap-3 sm:gap-2 md:gap-3 text-sm sm:text-[12px] md:text-[13px] lg:text-[16px] text-[#1A1A1A]">
//                                     <span className="flex items-center gap-1">
//                                         <img src={bed} alt="Bed Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                         {item.beds} Beds
//                                     </span>
//                                     <span className="flex items-center gap-1">
//                                         <img src={bath} alt="Bath Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                         {item.baths} Baths
//                                     </span>
//                                     <span className="flex items-center gap-1">
//                                         <img src={square} alt="Square Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                         {item.size}
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Status Label with Featured */}
//                             <div style={{ fontFamily: 'Poppins' }} className="mt-4 sm:mt-3 md:mt-4 flex items-center gap-2 flex-wrap">
//                                 <span
//                                     className={`text-[13px] sm:text-[12px] md:text-[14px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full ${item.status === 'For Rent' ? 'bg-[#00C6DB] text-black' : 'bg-[#1F4B43] text-white'
//                                         }`}
//                                 >
//                                     {item.status.toUpperCase()}
//                                 </span>
//                                 {item.promoted && <span>🔥</span>}
//                                 {item.featured && (
//                                     <span className="text-[13px] sm:text-[12px] md:text-[13px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full bg-[#E7C873] text-black">
//                                         FEATURED
//                                     </span>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex items-center mt-8 justify-center pb-4 space-x-4 text-sm text-black">
//                 <button
//                     onClick={() => handleClick(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className="disabled:text-gray-300"
//                 >
//                     <FiChevronLeft />
//                 </button>

//                 {[...Array(totalPages)].map((_, index) => {
//                     const page = index + 1;
//                     const isActive = page === currentPage;
//                     return (
//                         <button
//                             key={page}
//                             onClick={() => handleClick(page)}
//                             className={`w-7 h-7 rounded-full flex items-center justify-center transition-all
//                                          ${isActive
//                                     ? 'bg-pink-100 border border-[#832333] text-black'
//                                     : 'hover:bg-gray-100'}`}
//                         >
//                             {page}
//                         </button>
//                     );
//                 })}

//                 <button
//                     onClick={() => handleClick(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className="disabled:text-gray-300"
//                 >
//                     <FiChevronRight />
//                 </button>
//             </div>
//         </>
//     );

//     const renderSavedHomes5 = () => (
//         <>
//             <div className="grid grid-cols-1 sm:grid-cols-1 mx-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {categories2.map((item, index) => (
//                     <div
//                         key={index}
//                         className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[447/408] bg-white mx-auto"
//                     >
//                         {/* Image Section */}
//                         <div className="relative">
//                             <img
//                                 src={item.image}
//                                 alt={item.title}
//                                 className="w-full h-[179px] sm:h-[98px] lg:h-[200px] object-cover"
//                             />
//                             {item.promoted && (
//                                 <div
//                                     style={{ fontFamily: 'Roboto' }}
//                                     className="absolute top-4 left-[-30px] bg-orange-500 text-white text-[12px] sm:text-[11px] md:text-[12px] font-semibold px-8 py-1 rotate-[-45deg] shadow-md z-10"
//                                 >
//                                     PROMOTED
//                                 </div>
//                             )}
//                             <div
//                                 onClick={() => toggleFavorite(index)}
//                                 className="absolute top-2 right-2 p-2 rounded-full cursor-pointer bg-[#1A1A1A]/20"
//                             >
//                                 <img
//                                     src={favorites[index] ? red : heart}
//                                     alt="Heart Icon"
//                                     className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5"
//                                 />
//                             </div>
//                             {/* Arrow Icon */}
//                             <div className="absolute top-2 right-14 bg-[#1A1A1A]/20 p-2 rounded-full">
//                                 <img src={arrow} alt="Arrow Icon" className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
//                             </div>
//                         </div>

//                         {/* Property Details */}
//                         <div style={{ fontFamily: 'Poppins' }} className="p-4 sm:p-3 md:p-4">
//                             <div className="flex justify-between items-center">
//                                 <h3 className="text-[16px] sm:text-[14px] md:text-[15px] lg:text-[19px] font-semibold text-[#1A1A1A] truncate">
//                                     {item.title}
//                                 </h3>
//                                 <p className="text-[18px] sm:text-[16px] md:text-[17px] lg:text-[22px] font-semibold text-[#EB664E]">
//                                     {item.price}
//                                 </p>
//                             </div>
//                             <p className="text-sm sm:text-[13px] md:text-[16px] text-[#1A1A1A] flex items-center gap-1 mt-1 truncate">
//                                 <span>
//                                     {/* <img src={location} alt="Location Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" /> */}
//                                 </span>{' '}
//                                 {item.address}
//                             </p>
//                             <div className="flex justify-between items-center mt-3 sm:mt-2 md:mt-3">
//                                 <div className="flex gap-3 sm:gap-2 md:gap-3 text-sm sm:text-[12px] md:text-[13px] lg:text-[16px] text-[#1A1A1A]">
//                                     <span className="flex items-center gap-1">
//                                         <img src={bed} alt="Bed Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                         {item.beds} Beds
//                                     </span>
//                                     <span className="flex items-center gap-1">
//                                         <img src={bath} alt="Bath Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                         {item.baths} Baths
//                                     </span>
//                                     <span className="flex items-center gap-1">
//                                         <img src={square} alt="Square Icon" className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
//                                         {item.size}
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Status Label with Featured */}
//                             <div style={{ fontFamily: 'Poppins' }} className="mt-4 sm:mt-3 md:mt-4 flex items-center gap-2 flex-wrap">
//                                 <span
//                                     className={`text-[13px] sm:text-[12px] md:text-[14px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full ${item.status === 'For Rent' ? 'bg-[#00C6DB] text-black' : 'bg-[#1F4B43] text-white'
//                                         }`}
//                                 >
//                                     {item.status.toUpperCase()}
//                                 </span>
//                                 {item.promoted && <span>🔥</span>}
//                                 {item.featured && (
//                                     <span className="text-[13px] sm:text-[12px] md:text-[13px] font-medium px-4 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-full bg-[#E7C873] text-black">
//                                         FEATURED
//                                     </span>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex items-center mt-8 justify-center pb-4 space-x-4 text-sm text-black">
//                 <button
//                     onClick={() => handleClick(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className="disabled:text-gray-300"
//                 >
//                     <FiChevronLeft />
//                 </button>

//                 {[...Array(totalPages)].map((_, index) => {
//                     const page = index + 1;
//                     const isActive = page === currentPage;
//                     return (
//                         <button
//                             key={page}
//                             onClick={() => handleClick(page)}
//                             className={`w-7 h-7 rounded-full flex items-center justify-center transition-all
//                                          ${isActive
//                                     ? 'bg-pink-100 border border-[#832333] text-black'
//                                     : 'hover:bg-gray-100'}`}
//                         >
//                             {page}
//                         </button>
//                     );
//                 })}

//                 <button
//                     onClick={() => handleClick(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className="disabled:text-gray-300"
//                 >
//                     <FiChevronRight />
//                 </button>
//             </div>
//         </>
//     );
//     const renderSavedHomes6 = () => (
//         <>
//             <div className="bg-[#FFE5EC] flex items-center justify-center mb-12">
//       <div className="text-center ">
//         <img src={tourGif} alt="No Tours" className="w-[438px] mt-[-36px] mx-auto " />
//         <h2 className="text-[17px] sm:text-[32px] font-semibold text-[#1A1A1A] mb-2 mt-[-32px]">
//           No Tours Currently Scheduled
//         </h2>
//         <p className="text-[20px] text-[#333] leading-relaxed mb-6">
//           Your upcoming and past tour appointments will appear here—<br />
//           stay organized and easily access tour details!<br />
//           Ready to start touring?
//         </p>
//         <button className="bg-[#8A1538] text-white px-6 py-3 rounded font-semibold text-[16px]">
//           Find A Home
//         </button>
//       </div>
//     </div>
//         </>
//     );
//     const renderSection = () => {
//         switch (activeTab) {
//             case 'Saved homes':
//                 return renderSavedHomes();;
//             case 'Saved searches':
//                 return renderSavedHomes2();
//             case 'Your home':
//                 return renderSavedHomes3();
//             case 'Renter Hub':
//                 return renderSavedHomes4();
//             case 'Recently Viewed':
//                  return renderSavedHomes5();
//             case 'Manage tours':
//                return renderSavedHomes6();
//             default:
//                 return null;
//         }
//     };
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
//     const categories2 = [
//         {
//             title: 'Skyper Pool Apartment',
//             price: '$280,000',
//             address: '1020 Bloomingdale AVE',
//             beds: 4,
//             baths: 2,
//             size: '450 sqft',
//             status: 'For Sale',
//             promoted: false,
//             image: link2,
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
//             image: link3,
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
//     const categories3 = [
//         {
//             title: 'Skyper Pool Apartment',
//             price: '$280,000',
//             address: '1020 Bloomingdale AVE',
//             beds: 4,
//             baths: 2,
//             size: '450 sqft',
//             status: 'For Sale',
//             promoted: false,
//             image: link2,
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
//             image: link3,
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
//     const categories4 = [
//         {
//             title: 'Skyper Pool Apartment',
//             price: '$280,000',
//             address: '1020 Bloomingdale AVE',
//             beds: 4,
//             baths: 2,
//             size: '450 sqft',
//             status: 'For Sale',
//             promoted: false,
//             image: skyper,
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
//             image: link3,
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
//     const [currentPage, setCurrentPage] = useState(1);
//     const totalPages = 10;
//     const handleClick = (page) => {
//         if (page >= 1 && page <= totalPages) {
//             setCurrentPage(page);
//         }
//     };
//     return (
//         <>
//             <Navbar2 />
//             <div
//                 className="bg-cover bg-center text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-10 lg:px-24"
//                 style={{ backgroundImage: `url(${bgImage})` }}
//             >
//                 <h2
//                     className="text-3xl sm:text-4xl lg:text-[48px] font-bold mulish-font"
//                 >
//                     Recent Activity
//                 </h2>
//                 <p
//                     style={{ fontFamily: 'Poppins' }}
//                     className="mt-5 text-xl sm:text-2xl lg:text-[32px] font-medium"
//                 >
//                     Stay Updated with Your Latest Activity!
//                 </p>
//             </div>
//             <div className="font-[Poppins]  ">
//                 {/* Tabs */}
//                 <div className="flex mx-24 mt-6 p-4 justify-center border border-pink-200 rounded-lg bg-white shadow-md overflow-x-auto whitespace-nowrap">
//                     {tabs.map((tab) => (
//                         <button
//                             key={tab}
//                             onClick={() => setActiveTab(tab)}
//                             className={`px-4 py-2 text-sm sm:text-[20px] font-medium transition-all ${activeTab === tab
//                                 ? 'text-[#8A1538] border-b-4 border-[#8A1538]'
//                                 : 'text-gray-600'
//                                 }`}
//                         >
//                             {tab}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Section Header + Filters */}
//                 <div className="bg-[#FBE6EC] px-24 py-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 rounded-md">
//                     <h2 className="text-[#8A1538] text-[36px] font-semibold">{activeTab}</h2>
//                     {/* <div className="flex items-center gap-3">
//                         <select className="border border-gray-300 rounded px-3 py-2 text-[24px]">
//                             <option>All</option>
//                         </select>
//                         <select className="border border-gray-300 rounded px-3 py-2 text-[24px]">
//                             <option>Date Added</option>
//                             <option>Price</option>
//                         </select>
//                         <FaSortAmountDown className="text-[#8A1538] text-lg" />
//                     </div> */}
//                     <div className={`flex items-center gap-3 ${activeTab === 'Manage tours' ? 'hidden' : 'justify-end'}`}>
//   {/* Always show "All" dropdown unless Manage tours (handled by parent div) */}
//   <select className="border border-gray-300 rounded px-3 py-2 text-[24px]">
//     <option>All</option>
//   </select>

//   {/* Show second select and icon only if NOT in Renter Hub or Recently Viewed */}
//   {activeTab !== 'Renter Hub' && activeTab !== 'Recently Viewed' && (
//     <>
//       <select className="border border-gray-300 rounded px-3 py-2 text-[24px]">
//         <option>Date Added</option>
//         <option>Price</option>
//       </select>
//       <FaSortAmountDown className="text-[#8A1538] text-lg" />
//     </>
//   )}
// </div>


//                 </div>
//                 <div className="bg-[#FBE6EC] p-4">{renderSection()}</div>

//                 {/* Dynamic Section */}

//             </div>
//             <Footer/>
//         </>
//     )
// }

// export default RecentActivity
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import iv from './assets/iv.svg';
import bgImage from './assets/rect.svg';
import Navbar2 from './Navbar2';
import { FaSortAmountDown, FaEdit } from 'react-icons/fa';
import rental from './assets/link.svg';
import link2 from './assets/link2.jpg';
import link3 from './assets/link3.jpg';
import skyper from './assets/link.jpg';
import land from './assets/link2.svg';
import town from './assets/link3.svg';
import modern from './assets/modern.svg';
import apart from './assets/apart.jpg';
import re from './assets/re.jpg';
import office from './assets/office.jpg';
import contract from './assets/contract.jpg';
import home from './assets/home.jpg';
import builder from './assets/builders.jpg';
import heart from './assets/heart.svg';
import tourGif from './assets/active.gif';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import red from './assets/RED.svg';
import arrow from './assets/arrow.svg';
import Footer from './Footer';
import bed from './assets/bed.svg';
import bath from './assets/bath.svg';
import square from './assets/Icon (13).svg';
import link from './assets/link4.jpg';
import links from './assets/links.jpg';
import links2 from './assets/links2.jpg';
import location1 from './assets/location.svg';
import { useNavigate,Link } from 'react-router-dom';

const tabs = [
    'Saved homes',
    'Saved searches',
    'Your home',
    'Renter Hub',
    'Recently Viewed',
    'Manage tours',
];

const RecentActivity = () => {
    const [activeTab, setActiveTab] = useState('Your home');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const storedTab = localStorage.getItem('activeTab');
        if (storedTab && tabs.includes(storedTab)) {
            setActiveTab(storedTab);
            localStorage.removeItem('activeTab');
        }
    }, [location]);

    const renderSavedHomes = () => (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8">
                {categories.map((item, index) => (
                    <Link to={'/selldash'}
                        key={index}
                        className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[447/408] bg-white mx-auto"
                    >
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[150px] sm:h-[179px] md:h-[179px] lg:h-[200px] object-cover"
                            />
                            {item.promoted && (
                                <div
                                    style={{ fontFamily: 'Roboto' }}
                                    className="absolute top-3 left-[-28px] sm:top-4 sm:left-[-30px] bg-orange-500 text-white text-[10px] sm:text-[11px] md:text-[12px] font-semibold px-6 sm:px-8 py-1 rotate-[-45deg] shadow-md z-10"
                                >
                                    PROMOTED
                                </div>
                            )}
                            <div
                                onClick={() => toggleFavorite(index)}
                                className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1.5 sm:p-2 rounded-full cursor-pointer bg-[#1A1A1A]/20"
                            >
                                <img
                                    src={favorites[index] ? red : heart}
                                    alt="Heart Icon"
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                />
                            </div>
                            <div className="absolute top-1 right-10 sm:top-2 sm:right-14 bg-[#1A1A1A]/20 p-1.5 sm:p-2 rounded-full">
                                <img src={arrow} alt="Arrow Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                        </div>
                        <div style={{ fontFamily: 'Poppins' }} className="p-3 sm:p-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-[14px] sm:text-[16px] md:text-[15px] lg:text-[19px] font-semibold text-[#1A1A1A] truncate">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] sm:text-[18px] md:text-[17px] lg:text-[22px] font-semibold text-[#EB664E]">
                                    {item.price}
                                </p>
                            </div>
                            <p className="text-xs sm:text-sm md:text-[16px] text-[#1A1A1A] flex items-center gap-1 mt-1 truncate">
                                <span>
                                    <img src={location1} alt="Location Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                </span>
                                {item.address}
                            </p>
                            <div className="flex justify-between items-center mt-2 sm:mt-3">
                                <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm md:text-[13px] lg:text-[16px] text-[#1A1A1A]">
                                    <span className="flex items-center gap-1">
                                        <img src={bed} alt="Bed Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {item.beds} Beds
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={bath} alt="Bath Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {item.baths} Baths
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={square} alt="Square Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {item.size}
                                    </span>
                                </div>
                            </div>
                            <div style={{ fontFamily: 'Poppins' }} className="mt-3 sm:mt-4 flex items-center gap-2 flex-wrap">
                                <span
                                    className={`text-[12px] sm:text-[13px] md:text-[14px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${
                                        item.status === 'For Rent' ? 'bg-[#00C6DB] text-black' : 'bg-[#1F4B43] text-white'
                                    }`}
                                >
                                    {item.status.toUpperCase()}
                                </span>
                                {item.promoted && <span>🔥</span>}
                                {item.featured && (
                                    <span className="text-[12px] sm:text-[13px] md:text-[13px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#E7C873] text-black">
                                        FEATURED
                                    </span>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex items-center mt-6 sm:mt-8 justify-center pb-4 space-x-2 sm:space-x-4 text-sm text-black">
                <button
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="disabled:text-gray-300 p-2 sm:p-3"
                >
                    <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    const isActive = page === currentPage;
                    return (
                        <button
                            key={page}
                            onClick={() => handleClick(page)}
                            className={`w-8 h-8 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all ${
                                isActive ? 'bg-pink-100 border border-[#832333] text-black' : 'hover:bg-gray-100'
                            }`}
                        >
                            {page}
                        </button>
                    );
                })}
                <button
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="disabled:text-gray-300 p-2 sm:p-3"
                >
                    <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
            </div>
        </>
    );

    const renderSavedHomes2 = () => (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8">
                {categories2.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[447/408] bg-white mx-auto"
                    >
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[150px] sm:h-[179px] md:h-[179px] lg:h-[200px] object-cover"
                            />
                            {item.promoted && (
                                <div
                                    style={{ fontFamily: 'Roboto' }}
                                    className="absolute top-3 left-[-28px] sm:top-4 sm:left-[-30px] bg-orange-500 text-white text-[10px] sm:text-[11px] md:text-[12px] font-semibold px-6 sm:px-8 py-1 rotate-[-45deg] shadow-md z-10"
                                >
                                    PROMOTED
                                </div>
                            )}
                            <div
                                onClick={() => toggleFavorite(index)}
                                className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1.5 sm:p-2 rounded-full cursor-pointer bg-[#1A1A1A]/20"
                            >
                                <img
                                    src={favorites[index] ? red : heart}
                                    alt="Heart Icon"
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                />
                            </div>
                            <div className="absolute top-1 right-10 sm:top-2 sm:right-14 bg-[#1A1A1A]/20 p-1.5 sm:p-2 rounded-full">
                                <img src={arrow} alt="Arrow Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                        </div>
                        <div style={{ fontFamily: 'Poppins' }} className="p-3 sm:p-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-[14px] sm:text-[16px] md:text-[15px] lg:text-[19px] font-semibold text-[#1A1A1A] truncate">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] sm:text-[18px] md:text-[17px] lg:text-[22px] font-semibold text-[#EB664E]">
                                    {item.price}
                                </p>
                            </div>
                            <p className="text-xs sm:text-sm md:text-[16px] text-[#1A1A1A] flex items-center gap-1 mt-1 truncate">
                                <span>
                                    <img src={location1} alt="Location Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                </span>
                                {item.address}
                            </p>
                            <div className="flex justify-between items-center mt-2 sm:mt-3">
                                <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm md:text-[13px] lg:text-[16px] text-[#1A1A1A]">
                                    <span className="flex items-center gap-1">
                                        <img src={bed} alt="Bed Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {item.beds} Beds
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={bath} alt="Bath Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {item.baths} Baths
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={square} alt="Square Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {item.size}
                                    </span>
                                </div>
                            </div>
                            <div style={{ fontFamily: 'Poppins' }} className="mt-3 sm:mt-4 flex items-center gap-2 flex-wrap">
                                <span
                                    className={`text-[12px] sm:text-[13px] md:text-[14px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${
                                        item.status === 'For Rent' ? 'bg-[#00C6DB] text-black' : 'bg-[#1F4B43] text-white'
                                    }`}
                                >
                                    {item.status.toUpperCase()}
                                </span>
                                {item.promoted && <span>🔥</span>}
                                {item.featured && (
                                    <span className="text-[12px] sm:text-[13px] md:text-[13px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#E7C873] text-black">
                                        FEATURED
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center mt-6 sm:mt-8 justify-center pb-4 space-x-2 sm:space-x-4 text-sm text-black">
                <button
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="disabled:text-gray-300 p-2 sm:p-3"
                >
                    <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    const isActive = page === currentPage;
                    return (
                        <button
                            key={page}
                            onClick={() => handleClick(page)}
                            className={`w-8 h-8 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all ${
                                isActive ? 'bg-pink-100 border border-[#832333] text-black' : 'hover:bg-gray-100'
                            }`}
                        >
                            {page}
                        </button>
                    );
                })}
                <button
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="disabled:text-gray-300 p-2 sm:p-3"
                >
                    <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
            </div>
        </>
    );

    const renderSavedHomes3 = () => (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8">
                {categories3.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[447/408] bg-white mx-auto"
                    >
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[150px] sm:h-[179px] md:h-[179px] lg:h-[200px] object-cover"
                            />
                            {item.promoted && (
                                <div
                                    style={{ fontFamily: 'Roboto' }}
                                    className="absolute top-3 left-[-28px] sm:top-4 sm:left-[-30px] bg-orange-500 text-white text-[10px] sm:text-[11px] md:text-[12px] font-semibold px-6 sm:px-8 py-1 rotate-[-45deg] shadow-md z-10"
                                >
                                    PROMOTED
                                </div>
                            )}
                            
                            {/* <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-[#1A1A1A]/20 p-1.5 sm:p-2 rounded-full">
                                <img src={arrow} alt="Arrow Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div> */}
                             <div
                                onClick={() => toggleFavorite3(index)}
                                className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1.5 sm:p-2 rounded-full cursor-pointer bg-[#1A1A1A]/20"
                            >
                                <img
                                    src={favorites3[index] ? red : heart}
                                    alt="Heart Icon"
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                />
                            </div>
                            <div className="absolute top-1 right-10 sm:top-2 sm:right-14 bg-[#1A1A1A]/20 p-1.5 sm:p-2 rounded-full">
                                <img src={arrow} alt="Arrow Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-[#1A1A1A]/20 p-1.5 sm:p-2 rounded-full">
                                <button onClick={() => navigate('/boost')}  className="flex items-center bg-[#FFE5EC] text-[#7A0E2E] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[16px] sm:text-[19px] font-medium shadow-sm hover:bg-[#ffdbe4] transition">
                                    <img src={iv} className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                                    Boost
                                </button>
                            </div>
                        </div>
                        <div style={{ fontFamily: 'Poppins' }} className="p-3 sm:p-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-[14px] sm:text-[16px] md:text-[15px] lg:text-[19px] font-semibold text-[#1A1A1A] truncate">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] sm:text-[18px] md:text-[17px] lg:text-[22px] font-semibold text-[#EB664E]">
                                    {item.price}
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <p className="text-xs sm:text-sm md:text-[16px] text-[#1A1A1A] flex items-center gap-1 truncate">
                                    <img
                                        src={location1}
                                        alt="Location Icon"
                                        className="w-3 h-3 sm:w-4 sm:h-4"
                                    />
                                    {item.address}
                                </p>
                                <button onClick={() => navigate('/details')} className="flex items-center gap-1 sm:gap-2 bg-[#7A0E2E] text-white text-[11px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full hover:bg-[#5d0a22] transition">
                                    <FaEdit className="text-[12px] sm:text-sm" />
                                    Edit
                                </button>
                            </div>
                            <div className="flex justify-between items-center mt-2 sm:mt-323">
                                <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm md:text-[13px] lg:text-[16px] text-[#1A1A1A]">
                                    <span className="flex items-center gap-1">
                                        <img src={bed} alt="Bed Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {item.beds} Beds
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={bath} alt="Bath Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {item.baths} Baths
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={square} alt="Square Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {item.size}
                                    </span>
                                </div>
                            </div>
                            <div style={{ fontFamily: 'Poppins' }} className="mt-3 sm:mt-4 flex items-center gap-2 flex-wrap">
                                <span
                                    className={`text-[12px] sm:text-[13px] md:text-[14px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${
                                        item.status === 'For Rent' ? 'bg-[#00C6DB] text-black' : 'bg-[#1F4B43] text-white'
                                    }`}
                                >
                                    {item.status.toUpperCase()}
                                </span>
                                {item.promoted && <span>🔥</span>}
                                {item.featured && (
                                    <span className="text-[12px] sm:text-[13px] md:text-[13px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#E7C873] text-black">
                                        FEATURED
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center mt-6 sm:mt-8 justify-center pb-4 space-x-2 sm:space-x-4 text-sm text-black">
                <button
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="disabled:text-gray-300 p-2 sm:p-3"
                >
                    <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    const isActive = page === currentPage;
                    return (
                        <button
                            key={page}
                            onClick={() => handleClick(page)}
                            className={`w-8 h-8 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all ${
                                isActive ? 'bg-pink-100 border border-[#832333] text-black' : 'hover:bg-gray-100'
                            }`}
                        >
                            {page}
                        </button>
                    );
                })}
                <button
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="disabled:text-gray-300 p-2 sm:p-3"
                >
                    <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
            </div>
        </>
    );

    const renderSavedHomes4 = () => (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8">
                {categories4.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[447/408] bg-white mx-auto"
                    >
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[150px] sm:h-[179px] md:h-[179px] lg:h-[200px] object-cover"
                            />
                            {item.promoted && (
                                <div
                                    style={{ fontFamily: 'Roboto' }}
                                    className="absolute top-3 left-[-28px] sm:top-4 sm:left-[-30px] bg-orange-500 text-white text-[10px] sm:text-[11px] md:text-[12px] font-semibold px-6 sm:px-8 py-1 rotate-[-45deg] shadow-md z-10"
                                >
                                    PROMOTED
                                </div>
                            )}
                            <div
                                onClick={() => toggleFavorite2(index)}
                                className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1.5 sm:p-2 rounded-full cursor-pointer bg-[#1A1A1A]/20"
                            >
                                <img
                                    src={favorites2[index] ? red : heart}
                                    alt="Heart Icon"
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                />
                            </div>
                            <div className="absolute top-1 right-10 sm:top-2 sm:right-14 bg-[#1A1A1A]/20 p-1.5 sm:p-2 rounded-full">
                            
                                <img src={arrow} alt="Arrow Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                        </div>
                        <div style={{ fontFamily: 'Poppins' }} className="p-3 sm:p-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-[14px] sm:text-[16px] md:text-[15px] lg:text-[19px] font-semibold text-[#1A1A1A] truncate">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] sm:text-[18px] md:text-[17px] lg:text-[22px] font-semibold text-[#EB664E]">
                                    {item.price}
                                </p>
                            </div>
                            <p className="text-xs sm:text-sm md:text-[16px] text-[#1A1A1A] flex items-center gap-1 mt-1 truncate">
                                <span>
                                    <img src={location1} alt="Location Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                </span>
                                {item.address}
                            </p>
                            <div className="flex justify-between items-center mt-2 sm:mt-3">
                                <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm md:text-[13px] lg:text-[16px] text-[#1A1A1A]">
                                    <span className="flex items-center gap-1">
                                        <img src={bed} alt="Bed Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {item.beds} Beds
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={bath} alt="Bath Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {item.baths} Baths
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={square} alt="Square Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {item.size}
                                    </span>
                                </div>
                            </div>
                            <div style={{ fontFamily: 'Poppins' }} className="mt-3 sm:mt-4 flex items-center gap-2 flex-wrap">
                                <span
                                    className={`text-[12px] sm:text-[13px] md:text-[14px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${
                                        item.status === 'For Rent' ? 'bg-[#00C6DB] text-black' : 'bg-[#1F4B43] text-white'
                                    }`}
                                >
                                    {item.status.toUpperCase()}
                                </span>
                                {item.promoted && <span>🔥</span>}
                                {item.featured && (
                                    <span className="text-[12px] sm:text-[13px] md:text-[13px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#E7C873] text-black">
                                        FEATURED
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center mt-6 sm:mt-8 justify-center pb-4 space-x-2 sm:space-x-4 text-sm text-black">
                <button
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="disabled:text-gray-300 p-2 sm:p-3"
                >
                    <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    const isActive = page === currentPage;
                    return (
                        <button
                            key={page}
                            onClick={() => handleClick(page)}
                            className={`w-8 h-8 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all ${
                                isActive ? 'bg-pink-100 border border-[#832333] text-black' : 'hover:bg-gray-100'
                            }`}
                        >
                            {page}
                        </button>
                    );
                })}
                <button
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="disabled:text-gray-300 p-2 sm:p-3"
                >
                    <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
            </div>
        </>
    );

    const renderSavedHomes5 = () => (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8">
                {categories2.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-md w-full max-w-[447px] aspect-[447/408] bg-white mx-auto"
                    >
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[150px] sm:h-[179px] md:h-[179px] lg:h-[200px] object-cover"
                            />
                            {item.promoted && (
                                <div
                                    style={{ fontFamily: 'Roboto' }}
                                    className="absolute top-3 left-[-28px] sm:top-4 sm:left-[-30px] bg-orange-500 text-white text-[10px] sm:text-[11px] md:text-[12px] font-semibold px-6 sm:px-8 py-1 rotate-[-45deg] shadow-md z-10"
                                >
                                    PROMOTED
                                </div>
                            )}
                            <div
                                onClick={() => toggleFavorite(index)}
                                className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1.5 sm:p-2 rounded-full cursor-pointer bg-[#1A1A1A]/20"
                            >
                                <img
                                    src={favorites[index] ? red : heart}
                                    alt="Heart Icon"
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                />
                            </div>
                            <div className="absolute top-1 right-10 sm:top-2 sm:right-14 bg-[#1A1A1A]/20 p-1.5 sm:p-2 rounded-full">
                                <img src={arrow} alt="Arrow Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                        </div>
                        <div style={{ fontFamily: 'Poppins' }} className="p-3 sm:p-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-[14px] sm:text-[16px] md:text-[15px] lg:text-[19px] font-semibold text-[#1A1A1A] truncate">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] sm:text-[18px] md:text-[17px] lg:text-[22px] font-semibold text-[#EB664E]">
                                    {item.price}
                                </p>
                            </div>
                            <p className="text-xs sm:text-sm md:text-[16px] text-[#1A1A1A] flex items-center gap-1 mt-1 truncate">
                                <span>
                                    <img src={location1} alt="Location Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                </span>
                                {item.address}
                            </p>
                            <div className="flex justify-between items-center mt-2 sm:mt-3">
                                <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm md:text-[13px] lg:text-[16px] text-[#1A1A1A]">
                                    <span className="flex items-center gap-1">
                                        <img src={bed} alt="Bed Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {item.beds} Beds
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={bath} alt="Bath Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {item.baths} Baths
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={square} alt="Square Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {item.size}
                                    </span>
                                </div>
                            </div>
                            <div style={{ fontFamily: 'Poppins' }} className="mt-3 sm:mt-4 flex items-center gap-2 flex-wrap">
                                <span
                                    className={`text-[12px] sm:text-[13px] md:text-[14px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${
                                        item.status === 'For Rent' ? 'bg-[#00C6DB] text-black' : 'bg-[#1F4B43] text-white'
                                    }`}
                                >
                                    {item.status.toUpperCase()}
                                </span>
                                {item.promoted && <span>🔥</span>}
                                {item.featured && (
                                    <span className="text-[12px] sm:text-[13px] md:text-[13px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#E7C873] text-black">
                                        FEATURED
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center mt-6 sm:mt-8 justify-center pb-4 space-x-2 sm:space-x-4 text-sm text-black">
                <button
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="disabled:text-gray-300 p-2 sm:p-3"
                >
                    <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    const isActive = page === currentPage;
                    return (
                        <button
                            key={page}
                            onClick={() => handleClick(page)}
                            className={`w-8 h-8 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all ${
                                isActive ? 'bg-pink-100 border border-[#832333] text-black' : 'hover:bg-gray-100'
                            }`}
                        >
                            {page}
                        </button>
                    );
                })}
                <button
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="disabled:text-gray-300 p-2 sm:p-3"
                >
                    <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
            </div>
        </>
    );

    const renderSavedHomes6 = () => (
        <>
            <div className="bg-[#FFE5EC] flex items-center justify-center mb-8 sm:mb-12">
                <div className="text-center px-4">
                    <img
                        src={tourGif}
                        alt="No Tours"
                        className="w-[300px] sm:w-[438px] mt-[-20px] sm:mt-[-36px] mx-auto"
                    />
                    <h2 className="text-[16px] sm:text-[32px] font-semibold text-[#1A1A1A] mb-2 mt-[-20px] sm:mt-[-32px]">
                        No Tours Currently Scheduled
                    </h2>
                    <p className="text-[16px] sm:text-[20px] text-[#333] leading-relaxed mb-4 sm:mb-6">
                        Your upcoming and past tour appointments will appear here—<br />
                        stay organized and easily access tour details!<br />
                        Ready to start touring?
                    </p>
                    <button onClick={() => navigate('/properties')} className="bg-[#8A1538] text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold text-[14px] sm:text-[16px]">
                        Find A Home
                    </button>
                </div>
            </div>
        </>
    );

    const renderSection = () => {
        switch (activeTab) {
            case 'Saved homes':
                return renderSavedHomes();
            case 'Saved searches':
                return renderSavedHomes2();
            case 'Your home':
                return renderSavedHomes3();
            case 'Renter Hub':
                return renderSavedHomes4();
            case 'Recently Viewed':
                return renderSavedHomes5();
            case 'Manage tours':
                return renderSavedHomes6();
            default:
                return null;
        }
    };

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
            image: rental,
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
            image: land,
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
            image: town,
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
            image: link,
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
            image: links,
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
            image: links2,
        },
    ];

    const categories2 = [
        {
            title: 'Skyper Pool Apartment',
            price: '$280,000',
            address: '1020 Bloomingdale AVE',
            beds: 4,
            baths: 2,
            size: '450 sqft',
            status: 'For Sale',
            promoted: false,
            image: link2,
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
            image: link3,
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
            image: town,
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
            image: link,
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
            image: links,
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
            image: links2,
        },
    ];

    const categories3 = [
        {
            title: 'Skyper Pool Apartment',
            price: '$280,000',
            address: '1020 Bloomingdale AVE',
            beds: 4,
            baths: 2,
            size: '450 sqft',
            status: 'For Sale',
            promoted: false,
            image: link2,
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
            image: link3,
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
            image: town,
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
            image: link,
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
            image: links,
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
            image: links2,
        },
    ];

    const categories4 = [
        {
            title: 'Skyper Pool Apartment',
            price: '$280,000',
            address: '1020 Bloomingdale AVE',
            beds: 4,
            baths: 2,
            size: '450 sqft',
            status: 'For Sale',
            promoted: false,
            image: skyper,
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
            image: link3,
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
            image: town,
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
            image: link,
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
            image: links,
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
            image: links2,
        },
    ];

    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (index) => {
        setFavorites((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };
    const [favorites2, setFavorites2] = useState({});

    const toggleFavorite2 = (index) => {
        setFavorites2((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };
     const [favorites3, setFavorites3] = useState({});

    const toggleFavorite3 = (index) => {
        setFavorites3((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handleClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <>
            <Navbar2 />
            <div
                className="bg-cover bg-center text-white py-4 px-4 sm:py-6 sm:px-8 lg:py-10 lg:px-24"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mulish-font">
                    Recent Activity
                </h2>
                <p
                    style={{ fontFamily: 'Poppins' }}
                    className="mt-3 sm:mt-5 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium"
                >
                    Stay Updated with Your Latest Activity!
                </p>
            </div>
            <div className="font-[Poppins]">
                {/* <div className="flex mx-4 sm:mx-8 md:mx-24 mt-4 sm:mt-6 p-3 sm:p-4 justify-center border border-pink-200 rounded-lg bg-white shadow-md overflow-x-auto whitespace-nowrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium transition-all ${
                                activeTab === tab
                                    ? 'text-[#8A1538] border-b-4 border-[#8A1538]'
                                    : 'text-gray-600 hover:text-[#8A1538]'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div> */}
                <div className="mx-4 sm:mx-8 md:mx-24 mt-4 sm:mt-6 p-3 sm:p-4 border border-pink-200 rounded-lg bg-white shadow-md overflow-x-auto">
  <div className="flex min-w-max gap-2 sm:gap-3 md:gap-4 whitespace-nowrap">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium transition-all ${
          activeTab === tab
            ? 'text-[#8A1538] border-b-4 border-[#8A1538]'
            : 'text-gray-600 hover:text-[#8A1538]'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
</div>

                <div className="bg-[#FBE6EC] px-4 sm:px-8 md:px-24 py-3 sm:py-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 rounded-md">
                    <h2 className="text-[#8A1538] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold">
                        {activeTab}
                    </h2>
                    <div
                        className={`flex items-center gap-2 sm:gap-3 ${
                            activeTab === 'Manage tours' ? 'hidden' : 'justify-end'
                        }`}
                    >
                        <select className="border border-gray-300 rounded px-2 sm:px-3 py-1.5 sm:py-2 text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
                            <option>All</option>
                            <option>For Rent</option>
                                                        <option>For Sale</option>

                        </select>
                        {activeTab !== 'Renter Hub' && activeTab !== 'Recently Viewed' && (
                            <>
                                <select className="border border-gray-300 rounded px-2 sm:px-3 py-1.5 sm:py-2 text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
                                    <option>Date Added</option>
                                    <option>Status</option>
                                                                <option>Price</option>
                                <option>Bedrooms</option>
                                                            <option>Bathrooms</option>
                                                                                        <option>Home Size</option>
                                                                                                                    <option>Lot Size</option>





                                </select>
                                <FaSortAmountDown className="text-[#8A1538] text-base sm:text-lg" />
                            </>
                        )}
                    </div>
                </div>
                <div className="bg-[#FBE6EC] p-4">{renderSection()}</div>
            </div>
            <Footer />
        </>
    );
};

export default RecentActivity;