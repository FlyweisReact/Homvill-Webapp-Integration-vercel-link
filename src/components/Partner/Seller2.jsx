// import React, { useState } from 'react'
// import Navbar2 from '../Navbar2'
// import sell from '../assets/sell3.svg'
// import sell2 from '../assets/sell6.svg'
// import vector from '../assets/Vector (77).svg'
// import tie from '../assets/tie.svg'
// import vector1 from '../assets/Vector (78).svg'
// import vector2 from '../assets/Vector (79).svg'
// import { FaChevronDown } from "react-icons/fa";
// import { useNavigate,Link } from 'react-router-dom'
// import home from '../assets/home.svg'
// import { FaUser } from 'react-icons/fa';
// import purse from '../assets/purse.svg'
// import Footer from '../Footer'

// import { FaSearch, FaHome, FaDollarSign, FaPlay } from "react-icons/fa";

// const Seller2 = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isModalOpen1, setIsModalOpen1] = useState(false);
//     const [isModalOpen2, setIsModalOpen2] = useState(false);
//     const [isModalOpen3, setIsModalOpen3] = useState(false);
//     const [isModalOpen4, setIsModalOpen4] = useState(false);
//     const [isBuyOpen, setIsBuyOpen] = useState(false);
//     const [isOtherOpen, setIsOtherOpen] = useState(false);

//     const toggleModal = () => {
//         setIsModalOpen(!isModalOpen);
//     };
//     const [selected, setSelected] = useState("");

//     const options = [
//         "I am an individual agent/broker",
//         "I lead a team/brokerage of 10 or less people",
//         "I lead a brokerage of 11+ people",

//     ];
//     const actions = [
//         {
//             icon: <FaSearch className="text-[#7B1E3F] text-[30px]" />,
//             text: "Search for a home",
//             link: '/properties'
//         },
//         {
//             icon: <FaHome className="text-[#7B1E3F] text-[30px]" />,
//             text: "List your home for FREE",
//             link: '/review'
//         },
//         {
//             icon: <FaDollarSign className="text-[#7B1E3F] text-[30px]" />,
//             text: "See your home's estimated value",
//             link: '/market'
//         },
//     ];
//     const actions2 = [
//         {
//             icon: <FaUser className="text-[#7B1E3F] text-[30px]" />
//  ,
//             text: "I am a property manager",
//             link: '/manager'
//         },

//     ];
//     const navigate = useNavigate();
//     return (
//         <>
//             <Navbar2 />
//             <div
//                 className="bg-cover bg-center text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-10 lg:px-12"
//                 style={{ backgroundImage: `url(${sell})` }}
//             >
//                 <h2
//                     className="text-3xl sm:text-4xl lg:text-[48px] font-bold mulish-font"
//                 >
//                     I am a seller
//                 </h2>
//                 <p
//                     style={{ fontFamily: 'Poppins' }}
//                     className="mt-5 text-xl sm:text-2xl lg:text-[32px] font-medium"
//                 >
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//             </div>
//             <div className="flex justify-center items-center bg-gray-100 mt-10">
//                 <div className="bg-pink-100 rounded-lg shadow-lg p-6 px-12 w-full">
//                     <h1 className="md:text-[36px] text-xl mulish-font font-bold mb-2">
//                         Become a Premier Agent partner
//                     </h1>
//                     <p style={{ fontFamily: 'Poppins' }} className="text-gray-700 text-[17px] mb-6">
//                         HOMVIL connects Premier Agent partner with an active buyer every four seconds. As a Premier Agent partner, you’ll receive targeted advertising buyer leads, and detailed ROI reports.
//                     </p>
//                     <div className="flex flex-col md:flex-row gap-6">
//                         <div className="w-full md:w-1/2">
//                             <img src={sell2} />
//                         </div>
//                         <div className="w-full md:w-1/2 flex flex-col justify-center">
//                             <div>
//                                 <h2 style={{ fontFamily: 'Poppins' }} className="text-[24px] font-semibold mb-2">
//                                     Headline comes here...
//                                 </h2>
//                                 <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 text-[16px]">
//                                     Lorem ipsum is simply dummy text of the printing and typesetting industry.
//                                 </p>
//                             </div>
//                             <button onClick={toggleModal} style={{ fontFamily: 'Poppins' }} className="bg-[#8A1538] text-white text-[32px] font-medium py-2 px-4 rounded-lg mt-4 self-start">
//                                 Get Started
//                             </button>
//                         </div>
//                         {isModalOpen && (
//                             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                                 <div className="bg-white rounded-lg p-6 sm:p-8 w-full max-w-lg sm:max-w-[1004px] relative">
//                                     {/* Close Button */}
//                                     <button
//                                         onClick={toggleModal}
//                                         className="absolute top-4 right-4 text-[#8A1538] text-2xl font-bold"
//                                     >
//                                         ×
//                                     </button>

//                                     {/* Modal Content */}
//                                     <h2 className="text-xl mulish-font sm:text-2xl md:text-[36px] font-bold mb-4 text-center">
//                                         Tell us who you are!
//                                     </h2>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 mb-8 text-center text-sm sm:text-[17px]">
//                                         Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dummy text
//                                     </p>

//                                     {/* Options */}
//                                     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 cursor-pointer justify-center">
//                                         {/* Agent/Broker */}
//                                         <div onClick={() => {
//                                             setIsModalOpen(false);
//                                             setIsModalOpen1(true);
//                                         }} className="bg-[#FFE0E9] rounded-lg p-4 sm:p-6 flex-1 flex flex-col items-center text-center">
//                                             <div className="bg-white rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
//                                                 <img src={tie} className="w-12 h-12" /> {/* Placeholder icon */}
//                                             </div>
//                                             <h3 style={{ fontFamily: 'Poppins' }} className="text-base sm:text-lg md:text-[25px]  font-semibold mb-2">
//                                                 An agent/broker
//                                             </h3>
//                                             <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 text-xs sm:text-[14px]">
//                                                 Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
//                                             </p>
//                                         </div>

//                                         {/* Home Buyer/Seller */}
//                                         <div onClick={() => {
//                                             setIsModalOpen(false);
//                                             setIsBuyOpen(true);
//                                         }} className="bg-[#FFE0E9] rounded-lg p-4 sm:p-6 flex-1 flex flex-col items-center text-center">
//                                             <div className="bg-white rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
//                                                 <img src={home} className='w-12 h-12' /> {/* Placeholder icon */}
//                                             </div>
//                                             <h3 style={{ fontFamily: 'Poppins' }} className="text-base sm:text-lg md:text-[25px] font-semibold mb-2">
//                                                 Home buyer/seller
//                                             </h3>
//                                             <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 text-xs sm:text-[14px]">
//                                                 Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
//                                             </p>
//                                         </div>

//                                         {/* Other Professional */}
//                                         <div onClick={() => {
//                                             setIsModalOpen(false);
//                                             setIsOtherOpen(true);
//                                         }} className="bg-[#FFE0E9] rounded-lg p-4 sm:p-6 flex-1 flex flex-col items-center text-center">
//                                             <div className="bg-white rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
//                                                 <img src={purse} className='w-12 h-12' /> {/* Placeholder icon */}
//                                             </div>
//                                             <h3 style={{ fontFamily: 'Poppins' }} className="text-base sm:text-lg md:text-[25px] font-semibold mb-2">
//                                                 Other professional
//                                             </h3>
//                                             <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 text-xs sm:text-[14px]">
//                                                 Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {/* Privacy Notice */}
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-[#1D1D1D] font-semibold text-center text-[20px] sm:text-sm mt-6 sm:mt-8">
//                                         Or call{' '}
//                                         <a href="tel:855-885-1111" className="text-[#8A1538] font-medium">
//                                             855-885-1111
//                                         </a>
//                                     </p>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-[#1D1D1D] font-semibold text-center text-xs sm:text-sm">
//                                         We respect your privacy. See our{' '}
//                                         <a href="#" className="text-[#8A1538] font-medium">
//                                             privacy policy
//                                         </a>.
//                                     </p>
//                                 </div>
//                             </div>
//                         )}
//                         {isModalOpen1 && (
//                             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                                 <div className="bg-white rounded-lg p-6 sm:p-8 w-full max-w-lg sm:max-w-[1004px] relative">
//                                     {/* Close Button */}
//                                     <button
//                                         onClick={() => {
//                                             setIsModalOpen1(false);
//                                         }}
//                                         className="absolute top-4 right-4 text-[#8A1538] text-2xl font-bold"
//                                     >
//                                         ×
//                                     </button>

//                                     {/* Name Modal Content */}
//                                     <h2 className="text-xl sm:text-2xl mulish-font md:text-[36px] font-bold mb-4 text-center">
//                                         What's your name?
//                                     </h2>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 mb-8 text-center text-sm sm:text-[17px]">
//                                         Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dummy text
//                                     </p>

//                                     {/* Form Fields */}
//                                     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
//                                         <div className="flex-1">
//                                             <label className="block text-black mulish-font text-xs sm:text-[25px] font-bold mb-2">
//                                                 FIRST NAME
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 placeholder="First name"
//                                                 className="w-full border rounded-lg p-2 mt-2 shadow-md border-gray-300 focus:border-[#8A1538] outline-none py-3 text-sm sm:text-base"
//                                             />
//                                         </div>
//                                         <div className="flex-1">
//                                             <label className="block text-black mulish-font text-xs sm:text-[25px] font-bold mb-2">
//                                                 LAST NAME
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 placeholder="Last name"
//                                                 className="w-full border rounded-lg p-2 mt-2 shadow-md border-gray-300 focus:border-[#8A1538] outline-none py-3 text-sm sm:text-base"

//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Buttons */}
//                                     <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
//                                         <button
//                                             onClick={() => {
//                                                 setIsModalOpen1(false);
//                                                 setIsModalOpen(true);
//                                             }}
//                                             className="text-[#8A1538] mulish-font  font-bold text-sm sm:text-[28px] py-4 px-4 sm:px-6 rounded-lg border shadow-md w-[350px] order-2 sm:order-1"
//                                         >
//                                             Back
//                                         </button>
//                                         <button
//                                             onClick={() => {
//                                                 setIsModalOpen1(false);
//                                                 setIsModalOpen2(true);
//                                             }}
//                                             // className="bg-[#8A1538] text-white font-medium text-sm sm:text-base py-2 px-4 sm:px-6 rounded-lg order-1 sm:order-2"
//                                             className="text-white bg-[#8A1538] mulish-font  font-bold text-sm sm:text-[28px] py-4 px-4 sm:px-6 rounded-lg border shadow-md w-[350px] order-2 sm:order-1"

//                                         >
//                                             Continue
//                                         </button>
//                                     </div>

//                                     {/* Privacy Notice */}
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-[#1D1D1D] text-center text-xs sm:text-[20px] leading-snug">
//                                         Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text to make a type specimen book.
//                                     </p>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-xs sm:text-sm mt-2 sm:mt-4">
//                                         Or call{' '}
//                                         <a href="tel:855-885-1111" className="text-[#8A1538] font-medium">
//                                             855-885-1111
//                                         </a>
//                                     </p>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-xs sm:text-sm">
//                                         We respect your privacy. See our{' '}
//                                         <a href="#" className="text-[#8A1538] font-medium">
//                                             privacy policy
//                                         </a>.
//                                     </p>
//                                 </div>
//                             </div>
//                         )}
//                         {isModalOpen2 && (
//                             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                                 <div className="bg-white rounded-lg p-6 sm:p-8 w-full max-w-lg sm:max-w-[1004px] relative">
//                                     {/* Close Button */}
//                                     <button
//                                         onClick={() => {
//                                             setIsModalOpen2(false);
//                                         }}
//                                         className="absolute top-4 right-4 text-[#8A1538] text-2xl font-bold"
//                                     >
//                                         ×
//                                     </button>

//                                     {/* Name Modal Content */}
//                                     <h2 className="text-xl sm:text-2xl mulish-font md:text-[36px] font-bold mb-4 text-center">
//                                         What’s your phone number & email address?
//                                     </h2>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 mb-8 text-center text-sm sm:text-[17px]">
//                                         Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dummy text
//                                     </p>

//                                     {/* Form Fields */}
//                                     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
//                                         <div className="flex-1">
//                                             <label className="block text-black mulish-font text-xs sm:text-[25px] font-bold mb-2">
//                                                 Phone Number
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 placeholder="+1( _ _ _ _)( _ _ _)( _ _ _ )"
//                                                 className="w-full border rounded-lg p-2 mt-2 shadow-md border-gray-300 focus:border-[#8A1538] outline-none py-3 text-sm sm:text-base"
//                                             />
//                                         </div>
//                                         <div className="flex-1">
//                                             <label className="block text-black mulish-font text-xs sm:text-[25px] font-bold mb-2">
//                                                 Email Address
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 placeholder="Email Address"
//                                                 className="w-full border rounded-lg p-2 mt-2 shadow-md border-gray-300 focus:border-[#8A1538] outline-none py-3 text-sm sm:text-base"

//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Buttons */}
//                                     <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
//                                         <button
//                                             onClick={() => {
//                                                 setIsModalOpen2(false);
//                                                 setIsModalOpen1(true);
//                                             }}
//                                             className="text-[#8A1538] mulish-font  font-bold text-sm sm:text-[28px] py-4 px-4 sm:px-6 rounded-lg border shadow-md w-[350px] order-2 sm:order-1"
//                                         >
//                                             Back
//                                         </button>
//                                         <button
//                                             onClick={() => {
//                                                 setIsModalOpen2(false);
//                                                 setIsModalOpen3(true);
//                                             }}
//                                             // className="bg-[#8A1538] text-white font-medium text-sm sm:text-base py-2 px-4 sm:px-6 rounded-lg order-1 sm:order-2"
//                                             className="text-white bg-[#8A1538] mulish-font  font-bold text-sm sm:text-[28px] py-4 px-4 sm:px-6 rounded-lg border shadow-md w-[350px] order-2 sm:order-1"

//                                         >
//                                             Continue
//                                         </button>
//                                     </div>

//                                     {/* Privacy Notice */}
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-[#1D1D1D] text-center text-xs sm:text-[20px] leading-snug">
//                                         Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text to make a type specimen book.
//                                     </p>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-xs sm:text-sm mt-2 sm:mt-4">
//                                         Or call{' '}
//                                         <a href="tel:855-885-1111" className="text-[#8A1538] font-medium">
//                                             855-885-1111
//                                         </a>
//                                     </p>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-xs sm:text-sm">
//                                         We respect your privacy. See our{' '}
//                                         <a href="#" className="text-[#8A1538] font-medium">
//                                             privacy policy
//                                         </a>.
//                                     </p>
//                                 </div>
//                             </div>
//                         )}
//                         {isModalOpen3 && (
//                             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                                 <div className="bg-white rounded-lg p-6 sm:p-8 w-full max-w-lg sm:max-w-[1004px] relative">
//                                     {/* Close Button */}
//                                     <button
//                                         onClick={() => {
//                                             setIsModalOpen3(false);
//                                         }}
//                                         className="absolute top-4 right-4 text-[#8A1538] text-2xl font-bold"
//                                     >
//                                         ×
//                                     </button>

//                                     {/* Name Modal Content */}
//                                     <h2 className="text-xl sm:text-2xl mulish-font md:text-[36px] font-bold mb-4 text-center">
//                                         What’s your organization size?
//                                     </h2>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 mb-8 text-center text-sm sm:text-[17px]">
//                                         Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dummy text
//                                     </p>

//                                     {/* Form Fields */}
//                                     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
//                                         <div className="w-full  mx-auto">
//                                             <label className="block text-[28px] font-semibold mulish-font text-gray-900 mb-1">
//                                                 Size Of The Organization
//                                             </label>

//                                             <div className="relative w-full">
//                                                 <select style={{ fontFamily: 'Poppins' }}
//                                                     value={selected}
//                                                     onChange={(e) => setSelected(e.target.value)}
//                                                     className="appearance-none w-full border border-gray-300 rounded-lg pr-12 pl-3 py-2 text-[17px] text-gray-500 shadow focus:outline-none"
//                                                 >
//                                                     <option value="">Select one...</option>
//                                                     {options.map((opt, index) => (
//                                                         <option key={index} value={opt}>
//                                                             {opt}
//                                                         </option>
//                                                     ))}
//                                                 </select>

//                                                 <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#7B1E3F] rounded-md w-7 h-7 flex items-center justify-center pointer-events-none">
//                                                     <FaChevronDown className="text-white text-xs" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Buttons */}
//                                     <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
//                                         <button
//                                             onClick={() => {
//                                                 setIsModalOpen3(false);
//                                                 setIsModalOpen2(true);
//                                             }}
//                                             className="text-[#8A1538] mulish-font  font-bold text-sm sm:text-[28px] py-4 px-4 sm:px-6 rounded-lg border shadow-md w-[350px] order-2 sm:order-1"
//                                         >
//                                             Back
//                                         </button>
//                                         <button
//                                             onClick={() => {
//                                                 setIsModalOpen3(false);
//                                                 setIsModalOpen4(true);
//                                             }}
//                                             // className="bg-[#8A1538] text-white font-medium text-sm sm:text-base py-2 px-4 sm:px-6 rounded-lg order-1 sm:order-2"
//                                             className="text-white bg-[#8A1538] mulish-font  font-bold text-sm sm:text-[28px] py-4 px-4 sm:px-6 rounded-lg border shadow-md w-[350px] order-2 sm:order-1"

//                                         >
//                                             Continue
//                                         </button>
//                                     </div>

//                                     {/* Privacy Notice */}
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-[#1D1D1D] text-center text-xs sm:text-[20px] leading-snug">
//                                         Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text to make a type specimen book.
//                                     </p>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-xs sm:text-sm mt-2 sm:mt-4">
//                                         Or call{' '}
//                                         <a href="tel:855-885-1111" className="text-[#8A1538] font-medium">
//                                             855-885-1111
//                                         </a>
//                                     </p>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-xs sm:text-sm">
//                                         We respect your privacy. See our{' '}
//                                         <a href="#" className="text-[#8A1538] font-medium">
//                                             privacy policy
//                                         </a>.
//                                     </p>
//                                 </div>
//                             </div>
//                         )}
//                         {isModalOpen4 && (
//                             <div className="fixed inset-0 flex items-center justify-center z-50">
//                                 {/* Backdrop */}
//                                 <div
//                                     className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
//                                     onClick={() => {
//                                         setIsModalOpen4(false);

//                                     }}
//                                 ></div>

//                                 {/* Modal Content */}
//                                 <div className="relative bg-white text-center rounded-xl shadow-lg p-4 sm:p-6 max-w-md w-full mx-4">
//                                     <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4">
//                                         Thanks, we'll be in touch soon
//                                     </h2>
//                                     <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//                                         Lorem ipsum is simply dummy text of the printing and typesetting
//                                         industry. Lorem ipsum has been the industry's standard dummy text
//                                         ever since the 1500s, when an unknown printer took a galley of type
//                                         and scrambled it to make a type specimen book. It has survived not
//                                         only five centuries, but also the leap into electronic typesetting,
//                                         remaining essentially unchanged. It was popularised in the 1960s with
//                                         the release of Letraset sheets containing Lorem ipsum passages, and
//                                         more recently
//                                     </p>
//                                     <button
//                                         className="w-32 sm:w-36 mt-4 sm:mt-6 bg-[#8A1538] text-white font-semibold py-2 sm:py-3 rounded-lg"
//                                         onClick={() => {
//                                             navigate('/');
//                                         }}
//                                     >
//                                         Go to Home
//                                     </button>
//                                 </div>
//                             </div>
//                         )}
//                         {isBuyOpen && (
//                             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                                 <div className="bg-white rounded-lg p-6 sm:p-8 w-full max-w-lg sm:max-w-[1004px] relative">
//                                     {/* Close Button */}
//                                     <button
//                                         onClick={() => {
//                                             setIsBuyOpen(false);
//                                         }}
//                                         className="absolute top-4 right-4 text-[#8A1538] text-2xl font-bold"
//                                     >
//                                         ×
//                                     </button>

//                                     {/* Name Modal Content */}
//                                     <h2 className="text-xl sm:text-2xl mulish-font md:text-[36px] font-bold mb-4 text-center">
//                                         Home buyer & sellers
//                                     </h2>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 mb-8 text-center text-sm sm:text-[17px]">
//                                         Please explore any of the following options to continue:
//                                     </p>

//                                     {/* Form Fields */}
//                                     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
//                                         <div className="w-full  mx-auto space-y-3">
//                                             {actions.map((item, idx) => (
//                                                 <Link to={item.link}
//                                                     key={idx}
//                                                     className="flex items-center justify-between border rounded-lg px-4 py-2 shadow-sm"
//                                                 >
//                                                     <div className="flex items-center  gap-3">
//                                                         {item.icon}
//                                                         <span style={{ fontFamily: 'Poppins' }} className="text-[24px] font-medium text-[#8A1538]">{item.text}</span>
//                                                     </div>
//                                                     <button className="bg-[#7B1E3F] rounded-md w-7 h-7 flex items-center justify-center">
//                                                         <FaPlay className="text-white text-xs" />
//                                                     </button>
//                                                 </Link>
//                                             ))}

//                                             {/* Back Button */}
//                                             <div className="pt-4 flex justify-center">
//                                                 <button onClick={() => {
//                                                     setIsBuyOpen(false);
//                                                     setIsModalOpen(true);
//                                                 }} className="text-[#8A1538] mulish-font  font-bold text-sm sm:text-[28px] py-4 px-4 sm:px-6 rounded-lg border shadow-md w-[350px] order-2 sm:order-1">
//                                                     Back
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>



//                                     {/* Privacy Notice */}
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-[#1D1D1D] text-center text-xs sm:text-[20px] leading-snug">
//                                         Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text to make a type specimen book.
//                                     </p>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-xs sm:text-sm mt-2 sm:mt-4">
//                                         Or call{' '}
//                                         <a href="tel:855-885-1111" className="text-[#8A1538] font-medium">
//                                             855-885-1111
//                                         </a>
//                                     </p>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-xs sm:text-sm">
//                                         We respect your privacy. See our{' '}
//                                         <a href="#" className="text-[#8A1538] font-medium">
//                                             privacy policy
//                                         </a>.
//                                     </p>
//                                 </div>
//                             </div>
//                         )}
//                         {isOtherOpen && (
//                             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                                 <div className="bg-white rounded-lg p-6 sm:p-8 w-full max-w-lg sm:max-w-[1004px] relative">
//                                     {/* Close Button */}
//                                     <button
//                                         onClick={() => {
//                                             setIsOtherOpen(false);
//                                         }}
//                                         className="absolute top-4 right-4 text-[#8A1538] text-2xl font-bold"
//                                     >
//                                         ×
//                                     </button>

//                                     {/* Name Modal Content */}
//                                     <h2 className="text-xl sm:text-2xl mulish-font md:text-[36px] font-bold mb-4 text-center">
//                                         Home buyer & sellers
//                                     </h2>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 mb-8 text-center text-sm sm:text-[17px]">
//                                         Please explore any of the following options to continue:
//                                     </p>

//                                     {/* Form Fields */}
//                                     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
//                                         <div className="w-full  mx-auto space-y-3">
//                                             {actions2.map((item, idx) => (
//                                                 <Link to={item.link}
//                                                     key={idx}
//                                                     className="flex items-center justify-between border rounded-lg px-4 py-2 shadow-sm"
//                                                 >
//                                                     <div className="flex items-center  gap-3">
//                                                         {item.icon}
//                                                         <span style={{ fontFamily: 'Poppins' }} className="text-[24px] font-medium text-[#8A1538]">{item.text}</span>
//                                                     </div>
//                                                     <button className="bg-[#7B1E3F] rounded-md w-7 h-7 flex items-center justify-center">
//                                                         <FaPlay className="text-white text-xs" />
//                                                     </button>
//                                                 </Link>
//                                             ))}

//                                             {/* Back Button */}
//                                             <div className="pt-4 flex justify-center">
//                                                 <button onClick={() => {
//                                                     setIsOtherOpen(false);
//                                                     setIsModalOpen(true);
//                                                 }} className="text-[#8A1538] mulish-font  font-bold text-sm sm:text-[28px] py-4 px-4 sm:px-6 rounded-lg border shadow-md w-[350px] order-2 sm:order-1">
//                                                     Back
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>



//                                     {/* Privacy Notice */}
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-[#1D1D1D] text-center text-xs sm:text-[20px] leading-snug">
//                                         Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text to make a type specimen book.
//                                     </p>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-xs sm:text-sm mt-2 sm:mt-4">
//                                         Or call{' '}
//                                         <a href="tel:855-885-1111" className="text-[#8A1538] font-medium">
//                                             855-885-1111
//                                         </a>
//                                     </p>
//                                     <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-xs sm:text-sm">
//                                         We respect your privacy. See our{' '}
//                                         <a href="#" className="text-[#8A1538] font-medium">
//                                             privacy policy
//                                         </a>.
//                                     </p>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//             <div className="flex flex-col px-4 sm:px-8 md:px-12 mt-8 text-start py-6 sm:py-8 md:py-10 bg-white">
//                 {/* Heading and Subheading */}
//                 <h1 className="text-lg sm:text-2xl md:text-[36px] mulish-font font-bold text-start mb-2 sm:mb-3 md:mb-4">
//                     Find the right real estate solution for you
//                 </h1>
//                 <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 text-sm sm:text-base md:text-[17px] mb-6 sm:mb-8 md:mb-10 text-start">
//                     Whether you work independently or lead a large team of agents, we have tailored options to grow your real estate network.
//                 </p>

//                 {/* Cards Section */}
//                 <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-24 w-full px-2 sm:px-3 md:px-4">
//                     <div className="bg-[#FFE0E9] hover:bg-gradient-to-b hover:from-[#424242] hover:to-[#8A1538] hover:text-white rounded-3xl p-4 sm:p-5 md:p-6 flex-1 flex flex-col items-center text-center group transition-all duration-300">
//                         <div className="bg-white rounded-full shadow-md p-3 sm:p-4 mb-3 sm:mb-4">
//                             <img src={vector} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="Agent Icon" />
//                         </div>
//                         <h2 style={{ fontFamily: 'Poppins' }} className="text-xl sm:text-2xl md:text-[32px] font-semibold mb-1 sm:mb-2">
//                             Agent solutions
//                         </h2>
//                         <p style={{ fontFamily: 'Poppins' }} className="text-[#000000] group-hover:text-white text-xs sm:text-sm md:text-[16px] mb-4 sm:mb-5 md:mb-6 transition-all duration-300">
//                             Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
//                         </p>
//                         <button
//                             style={{ fontFamily: 'Poppins' }}
//                             className="bg-[#8A1538] text-white group-hover:bg-white group-hover:text-[#8A1538] font-semibold text-sm sm:text-lg md:text-[22px] py-1 sm:py-1.5 md:py-2 px-3 sm:px-4 rounded-lg transition-all duration-300"
//                         >
//                             Learn More
//                         </button>
//                     </div>
//                     <div className="group bg-[#FFEEB3] hover:bg-[linear-gradient(180deg,_#424242_0%,_#E7C873_100%)] rounded-3xl p-4 sm:p-5 md:p-6 flex-1 flex flex-col items-center text-center transition-all duration-300">
//                         <div className="bg-white rounded-full shadow-md p-3 sm:p-4 mb-3 sm:mb-4">
//                             <img
//                                 src={vector1}
//                                 className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
//                                 alt="Team Icon"
//                             />
//                         </div>

//                         <h2
//                             style={{ fontFamily: 'Poppins' }}
//                             className="text-xl sm:text-2xl md:text-[32px] font-semibold mb-1 sm:mb-2 transition-all duration-300 group-hover:text-white"
//                         >
//                             Team solutions
//                         </h2>

//                         <p
//                             style={{ fontFamily: 'Poppins' }}
//                             className="text-[#000000] text-xs sm:text-sm md:text-[16px] mb-4 sm:mb-5 md:mb-6 transition-all duration-300 group-hover:text-white"
//                         >
//                             Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
//                         </p>

//                         <button
//                             style={{ fontFamily: 'Poppins' }}
//                             className="bg-[#E7C873] text-white group-hover:bg-white group-hover:text-[#E7C873] font-semibold text-sm sm:text-lg md:text-[22px] py-1 sm:py-1.5 md:py-2 px-3 sm:px-4 rounded-lg transition-all duration-300"
//                         >
//                             Learn More
//                         </button>
//                     </div>


//                     {/* Broker Solutions Card */}
//                     <div className="bg-[#FFE0E9] hover:bg-gradient-to-b hover:from-[#424242] hover:to-[#8A1538] hover:text-white rounded-3xl p-4 sm:p-5 md:p-6 flex-1 flex flex-col items-center text-center group transition-all duration-300">
//                         <div className="bg-white rounded-full shadow-md p-3 sm:p-4 mb-3 sm:mb-4">
//                             <img src={vector2} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="Agent Icon" />
//                         </div>
//                         <h2 style={{ fontFamily: 'Poppins' }} className="text-xl sm:text-2xl md:text-[32px] font-semibold mb-1 sm:mb-2">
//                             Broker solutions
//                         </h2>
//                         <p style={{ fontFamily: 'Poppins' }} className="text-[#000000] group-hover:text-white text-xs sm:text-sm md:text-[16px] mb-4 sm:mb-5 md:mb-6 transition-all duration-300">
//                             Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
//                         </p>
//                         <button
//                             style={{ fontFamily: 'Poppins' }}
//                             className="bg-[#8A1538] text-white group-hover:bg-white group-hover:text-[#8A1538] font-semibold text-sm sm:text-lg md:text-[22px] py-1 sm:py-1.5 md:py-2 px-3 sm:px-4 rounded-lg transition-all duration-300"
//                         >
//                             Learn More
//                         </button>
//                     </div>

//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default Seller2

import React, { useState } from 'react';
import Navbar2 from '../Navbar2';
import sell from '../assets/sell3.svg';
import sell2 from '../assets/sell6.svg';
import vector from '../assets/Vector (77).svg';
import tie from '../assets/tie.svg';
import vector1 from '../assets/Vector (78).svg';
import vector2 from '../assets/Vector (79).svg';
import { FaChevronDown } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import home from '../assets/home.svg';
import { FaUser } from 'react-icons/fa';
import purse from '../assets/purse.svg';
import Footer from '../Footer';
import { FaSearch, FaHome, FaDollarSign, FaPlay } from "react-icons/fa";

const Seller2 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isBuyOpen, setIsBuyOpen] = useState(false);
    const [isOtherOpen, setIsOtherOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const options = [
        "I am an individual agent/broker",
        "I lead a team/brokerage of 10 or less people",
        "I lead a brokerage of 11+ people",
    ];

    const actions = [
        {
            icon: <FaSearch className="text-[#7B1E3F] text-xl sm:text-2xl md:text-[30px]" />,
            text: "Search for a home",
            link: '/properties'
        },
        {
            icon: <FaHome className="text-[#7B1E3F] text-xl sm:text-2xl md:text-[30px]" />,
            text: "List your home for FREE",
            link: '/review'
        },
        {
            icon: <FaDollarSign className="text-[#7B1E3F] text-xl sm:text-2xl md:text-[30px]" />,
            text: "See your home's estimated value",
            link: '/market'
        },
    ];

    const actions2 = [
        {
            icon: <FaUser className="text-[#7B1E3F] text-xl sm:text-2xl md:text-[30px]" />,
            text: "I am a property manager",
            link: '/manager'
        },
    ];

    const navigate = useNavigate();

    return (
        <>
            <Navbar2 />
            {/* Hero Section */}
            <div
                className="bg-cover bg-center text-white py-4 px-3 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-10 lg:px-12"
                style={{ backgroundImage: `url(${sell})` }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mulish-font">
                    I am a seller
                </h2>
                <p
                    style={{ fontFamily: 'Poppins' }}
                    className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-xl lg:text-[32px] font-medium"
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>

            {/* Premier Agent Section */}
            <div className="flex justify-center items-center bg-gray-100 mt-6 sm:mt-8 md:mt-10 px-3 sm:px-4">
                <div className="bg-pink-100 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-7xl">
                    <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-[36px] mulish-font font-bold mb-2 sm:mb-3">
                        Become a Premier Agent partner
                    </h1>
                    <p style={{ fontFamily: 'Poppins' }} className="text-gray-700 text-sm sm:text-base md:text-[17px] mb-4 sm:mb-6">
                        HOMVIL connects Premier Agent partner with an active buyer every four seconds. As a Premier Agent partner, you’ll receive targeted advertising buyer leads, and detailed ROI reports.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                        <div className="w-full md:w-1/2">
                            <img src={sell2} className="w-full h-auto" alt="Premier Agent" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            <div>
                                <h2 style={{ fontFamily: 'Poppins' }} className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold mb-2">
                                    Headline comes here...
                                </h2>
                                <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 text-sm sm:text-base md:text-[16px]">
                                    Lorem ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                            <button
                                onClick={toggleModal}
                                style={{ fontFamily: 'Poppins' }}
                                className="bg-[#8A1538] text-white text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium py-2 px-4 rounded-lg mt-3 sm:mt-4 self-start"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-3 sm:px-0">
                    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-[90%] sm:max-w-[700px] md:max-w-[1004px] relative">
                        <button
                            onClick={toggleModal}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#8A1538] text-xl sm:text-2xl font-bold"
                        >
                            ×
                        </button>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[36px] mulish-font font-bold mb-3 sm:mb-4 text-center">
                            Tell us who you are!
                        </h2>
                        <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 mb-4 sm:mb-6 md:mb-8 text-center text-xs sm:text-sm md:text-[17px]">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dummy text
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 cursor-pointer justify-center">
                            <div
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setIsModalOpen1(true);
                                }}
                                className="bg-[#FFE0E9] rounded-lg p-3 sm:p-4 md:p-6 flex-1 flex flex-col items-center text-center"
                            >
                                <div className="bg-white rounded-full p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4">
                                    <img src={tie} className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" alt="Agent/Broker" />
                                </div>
                                <h3 style={{ fontFamily: 'Poppins' }} className="text-sm sm:text-base md:text-lg lg:text-[25px] font-semibold mb-1 sm:mb-2">
                                    An agent/broker
                                </h3>
                                <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 text-[10px] sm:text-xs md:text-[14px]">
                                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setIsBuyOpen(true);
                                }}
                                className="bg-[#FFE0E9] rounded-lg p-3 sm:p-4 md:p-6 flex-1 flex flex-col items-center text-center"
                            >
                                <div className="bg-white rounded-full p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4">
                                    <img src={home} className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" alt="Home Buyer/Seller" />
                                </div>
                                <h3 style={{ fontFamily: 'Poppins' }} className="text-sm sm:text-base md:text-lg lg:text-[25px] font-semibold mb-1 sm:mb-2">
                                    Home buyer/seller
                                </h3>
                                <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 text-[10px] sm:text-xs md:text-[14px]">
                                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setIsOtherOpen(true);
                                }}
                                className="bg-[#FFE0E9] rounded-lg p-3 sm:p-4 md:p-6 flex-1 flex flex-col items-center text-center"
                            >
                                <div className="bg-white rounded-full p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4">
                                    <img src={purse} className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" alt="Other Professional" />
                                </div>
                                <h3 style={{ fontFamily: 'Poppins' }} className="text-sm sm:text-base md:text-lg lg:text-[25px] font-semibold mb-1 sm:mb-2">
                                    Other professional
                                </h3>
                                <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 text-[10px] sm:text-xs md:text-[14px]">
                                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                        <p style={{ fontFamily: 'Poppins' }} className="text-[#1D1D1D] font-semibold text-center text-xs sm:text-sm md:text-[16px] mt-4 sm:mt-6 md:mt-8">
                            Or call{' '}
                            <a href="tel:855-885-1111" className="text-[#8A1538] font-medium">
                                855-885-1111
                            </a>
                        </p>
                        <p style={{ fontFamily: 'Poppins' }} className="text-[#1D1D1D] font-semibold text-center text-[10px] sm:text-xs md:text-sm">
                            We respect your privacy. See our{' '}
                            <a href="#" className="text-[#8A1538] font-medium">
                                privacy policy
                            </a>.
                        </p>
                    </div>
                </div>
            )}

            {isModalOpen1 && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-3 sm:px-0">
                    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-[90%] sm:max-w-[700px] md:max-w-[1004px] relative">
                        <button
                            onClick={() => setIsModalOpen1(false)}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#8A1538] text-xl sm:text-2xl font-bold"
                        >
                            ×
                        </button>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[36px] mulish-font font-bold mb-3 sm:mb-4 text-center">
                            What's your name?
                        </h2>
                        <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 mb-4 sm:mb-6 md:mb-8 text-center text-xs sm:text-sm md:text-[17px]">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dummy text
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                            <div className="flex-1">
                                <label className="block text-black mulish-font text-[10px] sm:text-xs md:text-sm lg:text-[25px] font-bold mb-1 sm:mb-2">
                                    FIRST NAME
                                </label>
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="w-full border rounded-lg p-2 sm:p-3 mt-1 sm:mt-2 shadow-md border-gray-300 focus:border-[#8A1538] outline-none text-xs sm:text-sm md:text-base"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-black mulish-font text-[10px] sm:text-xs md:text-sm lg:text-[25px] font-bold mb-1 sm:mb-2">
                                    LAST NAME
                                </label>
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="w-full border rounded-lg p-2 sm:p-3 mt-1 sm:mt-2 shadow-md border-gray-300 focus:border-[#8A1538] outline-none text-xs sm:text-sm md:text-base"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                            <button
                                onClick={() => {
                                    setIsModalOpen1(false);
                                    setIsModalOpen(true);
                                }}
                                className="text-[#8A1538] mulish-font font-bold text-xs sm:text-sm md:text-lg lg:text-[28px] py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg border shadow-md w-full sm:w-[300px] lg:w-[350px] order-2 sm:order-1"
                            >
                                Back
                            </button>
                            <button
                                onClick={() => {
                                    setIsModalOpen1(false);
                                    setIsModalOpen2(true);
                                }}
                                className="text-white bg-[#8A1538] mulish-font font-bold text-xs sm:text-sm md:text-lg lg:text-[28px] py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg border shadow-md w-full sm:w-[300px] lg:w-[350px] order-1 sm:order-2"
                            >
                                Continue
                            </button>
                        </div>
                        <p style={{ fontFamily: 'Poppins' }} className="text-[#1D1D1D] text-center text-[10px] sm:text-xs md:text-sm lg:text-[20px] leading-snug">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text to make a type specimen book.
                        </p>
                        <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-4">
                            Or call{' '}
                            <a href="tel:855-885-1111" className="text-[#8A1538] font-medium">
                                855-885-1111
                            </a>
                        </p>
                        <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-[10px] sm:text-xs md:text-sm">
                            We respect your privacy. See our{' '}
                            <a href="#" className="text-[#8A1538] font-medium">
                                privacy policy
                            </a>.
                        </p>
                    </div>
                </div>
            )}

            {isModalOpen2 && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-3 sm:px-0">
                    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-[90%] sm:max-w-[700px] md:max-w-[1004px] relative">
                        <button
                            onClick={() => setIsModalOpen2(false)}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#8A1538] text-xl sm:text-2xl font-bold"
                        >
                            ×
                        </button>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[36px] mulish-font font-bold mb-3 sm:mb-4 text-center">
                            What’s your phone number & email address?
                        </h2>
                        <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 mb-4 sm:mb-6 md:mb-8 text-center text-xs sm:text-sm md:text-[17px]">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dummy text
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                            <div className="flex-1">
                                <label className="block text-black mulish-font text-[10px] sm:text-xs md:text-sm lg:text-[25px] font-bold mb-1 sm:mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="+1( _ _ _ _)( _ _ _)( _ _ _ )"
                                    className="w-full border rounded-lg p-2 sm:p-3 mt-1 sm:mt-2 shadow-md border-gray-300 focus:border-[#8A1538] outline-none text-xs sm:text-sm md:text-base"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-black mulish-font text-[10px] sm:text-xs md:text-sm lg:text-[25px] font-bold mb-1 sm:mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    className="w-full border rounded-lg p-2 sm:p-3 mt-1 sm:mt-2 shadow-md border-gray-300 focus:border-[#8A1538] outline-none text-xs sm:text-sm md:text-base"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                            <button
                                onClick={() => {
                                    setIsModalOpen2(false);
                                    setIsModalOpen1(true);
                                }}
                                className="text-[#8A1538] mulish-font font-bold text-xs sm:text-sm md:text-lg lg:text-[28px] py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg border shadow-md w-full sm:w-[300px] lg:w-[350px] order-2 sm:order-1"
                            >
                                Back
                            </button>
                            <button
                                onClick={() => {
                                    setIsModalOpen2(false);
                                    setIsModalOpen3(true);
                                }}
                                className="text-white bg-[#8A1538] mulish-font font-bold text-xs sm:text-sm md:text-lg lg:text-[28px] py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg border shadow-md w-full sm:w-[300px] lg:w-[350px] order-1 sm:order-2"
                            >
                                Continue
                            </button>
                        </div>
                        <p style={{ fontFamily: 'Poppins' }} className="text-[#1D1D1D] text-center text-[10px] sm:text-xs md:text-sm lg:text-[20px] leading-snug">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text to make a type specimen book.
                        </p>
                        <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-4">
                            Or call{' '}
                            <a href="tel:855-885-1111" className="text-[#8A1538] font-medium">
                                855-885-1111
                            </a>
                        </p>
                        <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-[10px] sm:text-xs md:text-sm">
                            We respect your privacy. See our{' '}
                            <a href="#" className="text-[#8A1538] font-medium">
                                privacy policy
                            </a>.
                        </p>
                    </div>
                </div>
            )}

            {isModalOpen3 && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-3 sm:px-0">
                    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-[90%] sm:max-w-[700px] md:max-w-[1004px] relative">
                        <button
                            onClick={() => setIsModalOpen3(false)}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#8A1538] text-xl sm:text-2xl font-bold"
                        >
                            ×
                        </button>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[36px] mulish-font font-bold mb-3 sm:mb-4 text-center">
                            What’s your organization size?
                        </h2>
                        <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 mb-4 sm:mb-6 md:mb-8 text-center text-xs sm:text-sm md:text-[17px]">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dummy text
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                            <div className="w-full mx-auto">
                                <label className="block text-lg sm:text-xl md:text-2xl lg:text-[28px] font-semibold mulish-font text-gray-900 mb-1 sm:mb-2">
                                    Size Of The Organization
                                </label>
                                <div className="relative w-full">
                                    <select
                                        style={{ fontFamily: 'Poppins' }}
                                        value={selected}
                                        onChange={(e) => setSelected(e.target.value)}
                                        className="appearance-none w-full border border-gray-300 rounded-lg pr-10 pl-3 py-2 sm:py-3 text-sm sm:text-base md:text-[17px] text-gray-500 shadow focus:outline-none"
                                    >
                                        <option value="">Select one...</option>
                                        {options.map((opt, index) => (
                                            <option key={index} value={opt}>
                                                {opt}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#7B1E3F] rounded-md w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center pointer-events-none">
                                        <FaChevronDown className="text-white text-[10px] sm:text-xs" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                            <button
                                onClick={() => {
                                    setIsModalOpen3(false);
                                    setIsModalOpen2(true);
                                }}
                                className="text-[#8A1538] mulish-font font-bold text-xs sm:text-sm md:text-lg lg:text-[28px] py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg border shadow-md w-full sm:w-[300px] lg:w-[350px] order-2 sm:order-1"
                            >
                                Back
                            </button>
                            <button
                                onClick={() => {
                                    setIsModalOpen3(false);
                                    setIsModalOpen4(true);
                                }}
                                className="text-white bg-[#8A1538] mulish-font font-bold text-xs sm:text-sm md:text-lg lg:text-[28px] py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg border shadow-md w-full sm:w-[300px] lg:w-[350px] order-1 sm:order-2"
                            >
                                Continue
                            </button>
                        </div>
                        <p style={{ fontFamily: 'Poppins' }} className="text-[#1D1D1D] text-center text-[10px] sm:text-xs md:text-sm lg:text-[20px] leading-snug">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text to make a type specimen book.
                        </p>
                        <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-4">
                            Or call{' '}
                            <a href="tel:855-885-1111" className="text-[#8A1538] font-medium">
                                855-885-1111
                            </a>
                        </p>
                        <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-[10px] sm:text-xs md:text-sm">
                            We respect your privacy. See our{' '}
                            <a href="#" className="text-[#8A1538] font-medium">
                                privacy policy
                            </a>.
                        </p>
                    </div>
                </div>
            )}

            {isModalOpen4 && (
                <div className="fixed inset-0 flex items-center justify-center z-50 px-3 sm:px-0">
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                        onClick={() => setIsModalOpen4(false)}
                    />
                    <div className="relative bg-white text-center rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-[90%] sm:max-w-md">
                        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                            Thanks, we'll be in touch soon
                        </h2>
                        <p className="text-gray-600 text-[10px] sm:text-sm md:text-base leading-relaxed">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem ipsum passages, and more recently
                        </p>
                        <button
                            className="w-28 sm:w-32 md:w-36 mt-3 sm:mt-4 md:mt-6 bg-[#8A1538] text-white font-semibold py-1.5 sm:py-2 md:py-3 rounded-lg text-xs sm:text-sm md:text-base"
                            onClick={() => navigate('/')}
                        >
                            Go to Home
                        </button>
                    </div>
                </div>
            )}

            {isBuyOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-3 sm:px-0">
                    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-[90%] sm:max-w-[700px] md:max-w-[1004px] relative">
                        <button
                            onClick={() => setIsBuyOpen(false)}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#8A1538] text-xl sm:text-2xl font-bold"
                        >
                            ×
                        </button>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[36px] mulish-font font-bold mb-3 sm:mb-4 text-center">
                            Home buyer & sellers
                        </h2>
                        <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 mb-4 sm:mb-6 md:mb-8 text-center text-xs sm:text-sm md:text-[17px]">
                            Please explore any of the following options to continue:
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                            <div className="w-full mx-auto space-y-2 sm:space-y-3">
                                {actions.map((item, idx) => (
                                    <Link
                                        to={item.link}
                                        key={idx}
                                        className="flex items-center justify-between border rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm"
                                    >
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            {item.icon}
                                            <span style={{ fontFamily: 'Poppins' }} className="text-sm sm:text-base md:text-lg lg:text-[24px] font-medium text-[#8A1538]">
                                                {item.text}
                                            </span>
                                        </div>
                                        <button className="bg-[#7B1E3F] rounded-md w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center">
                                            <FaPlay className="text-white text-[10px] sm:text-xs" />
                                        </button>
                                    </Link>
                                ))}
                                <div className="pt-3 sm:pt-4 flex justify-center">
                                    <button
                                        onClick={() => {
                                            setIsBuyOpen(false);
                                            setIsModalOpen(true);
                                        }}
                                        className="text-[#8A1538] mulish-font font-bold text-xs sm:text-sm md:text-lg lg:text-[28px] py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg border shadow-md w-full sm:w-[300px] lg:w-[350px]"
                                    >
                                        Back
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p style={{ fontFamily: 'Poppins' }} className="text-[#1D1D1D] text-center text-[10px] sm:text-xs md:text-sm lg:text-[20px] leading-snug">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text to make a type specimen book.
                        </p>
                        <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-4">
                            Or call{' '}
                            <a href="tel:855-885-1111" className="text-[#8A1538] font-medium">
                                855-885-1111
                            </a>
                        </p>
                        <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-[10px] sm:text-xs md:text-sm">
                            We respect your privacy. See our{' '}
                            <a href="#" className="text-[#8A1538] font-medium">
                                privacy policy
                            </a>.
                        </p>
                    </div>
                </div>
            )}

            {isOtherOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-3 sm:px-0">
                    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-[90%] sm:max-w-[700px] md:max-w-[1004px] relative">
                        <button
                            onClick={() => setIsOtherOpen(false)}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#8A1538] text-xl sm:text-2xl font-bold"
                        >
                            ×
                        </button>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[36px] mulish-font font-bold mb-3 sm:mb-4 text-center">
                            Home buyer & sellers
                        </h2>
                        <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 mb-4 sm:mb-6 md:mb-8 text-center text-xs sm:text-sm md:text-[17px]">
                            Please explore any of the following options to continue:
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                            <div className="w-full mx-auto space-y-2 sm:space-y-3">
                                {actions2.map((item, idx) => (
                                    <Link
                                        to={item.link}
                                        key={idx}
                                        className="flex items-center justify-between border rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm"
                                    >
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            {item.icon}
                                            <span style={{ fontFamily: 'Poppins' }} className="text-sm sm:text-base md:text-lg lg:text-[24px] font-medium text-[#8A1538]">
                                                {item.text}
                                            </span>
                                        </div>
                                        <button className="bg-[#7B1E3F] rounded-md w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center">
                                            <FaPlay className="text-white text-[10px] sm:text-xs" />
                                        </button>
                                    </Link>
                                ))}
                                <div className="pt-3 sm:pt-4 flex justify-center">
                                    <button
                                        onClick={() => {
                                            setIsOtherOpen(false);
                                            setIsModalOpen(true);
                                        }}
                                        className="text-[#8A1538] mulish-font font-bold text-xs sm:text-sm md:text-lg lg:text-[28px] py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg border shadow-md w-full sm:w-[300px] lg:w-[350px]"
                                    >
                                        Back
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p style={{ fontFamily: 'Poppins' }} className="text-[#1D1D1D] text-center text-[10px] sm:text-xs md:text-sm lg:text-[20px] leading-snug">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text to make a type specimen book.
                        </p>
                        <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-4">
                            Or call{' '}
                            <a href="tel:855-885-1111" className="text-[#8A1538] font-medium">
                                855-885-1111
                            </a>
                        </p>
                        <p style={{ fontFamily: 'Poppins' }} className="text-black text-center text-[10px] sm:text-xs md:text-sm">
                            We respect your privacy. See our{' '}
                            <a href="#" className="text-[#8A1538] font-medium">
                                privacy policy
                            </a>.
                        </p>
                    </div>
                </div>
            )}

            {/* Solutions Section */}
            <div className="flex flex-col px-3 sm:px-6 md:px-8 lg:px-12 mt-6 sm:mt-8 py-4 sm:py-6 md:py-8 lg:py-10 bg-white">
                <h1 className="text-base sm:text-lg md:text-2xl lg:text-[36px] mulish-font font-bold text-start mb-2 sm:mb-3 md:mb-4">
                    Find the right real estate solution for you
                </h1>
                <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[17px] mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-start">
                    Whether you work independently or lead a large team of agents, we have tailored options to grow your real estate network.
                </p>
                <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-24 w-full px-2 sm:px-3 md:px-4">
                    <div className="bg-[#FFE0E9] hover:bg-gradient-to-b hover:from-[#424242] hover:to-[#8A1538] hover:text-white rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 flex-1 flex flex-col items-center text-center group transition-all duration-300">
                        <div className="bg-white rounded-full shadow-md p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4">
                            <img src={vector} className="w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16" alt="Agent Icon" />
                        </div>
                        <h2 style={{ fontFamily: 'Poppins' }} className="text-base sm:text-lg md:text-xl lg:text-[32px] font-semibold mb-1 sm:mb-2">
                            Agent solutions
                        </h2>
                        <p style={{ fontFamily: 'Poppins' }} className="text-[#000000] group-hover:text-white text-[10px] sm:text-xs md:text-sm lg:text-[16px] mb-3 sm:mb-4 md:mb-5 lg:mb-6 transition-all duration-300">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        <button
                            style={{ fontFamily: 'Poppins' }}
                            className="bg-[#8A1538] text-white group-hover:bg-white group-hover:text-[#8A1538] font-semibold text-xs sm:text-sm md:text-base lg:text-[22px] py-1 sm:py-1.5 md:py-2 px-2 sm:px-3 md:px-4 rounded-lg transition-all duration-300"
                        >
                            Learn More
                        </button>
                    </div>
                    <div className="group bg-[#FFEEB3] hover:bg-[linear-gradient(180deg,_#424242_0%,_#E7C873_100%)] rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 flex-1 flex flex-col items-center text-center transition-all duration-300">
                        <div className="bg-white rounded-full shadow-md p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4">
                            <img
                                src={vector1}
                                className="w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16"
                                alt="Team Icon"
                            />
                        </div>
                        <h2
                            style={{ fontFamily: 'Poppins' }}
                            className="text-base sm:text-lg md:text-xl lg:text-[32px] font-semibold mb-1 sm:mb-2 transition-all duration-300 group-hover:text-white"
                        >
                            Team solutions
                        </h2>
                        <p
                            style={{ fontFamily: 'Poppins' }}
                            className="text-[#000000] text-[10px] sm:text-xs md:text-sm lg:text-[16px] mb-3 sm:mb-4 md:mb-5 lg:mb-6 transition-all duration-300 group-hover:text-white"
                        >
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        <button
                            style={{ fontFamily: 'Poppins' }}
                            className="bg-[#E7C873] text-white group-hover:bg-white group-hover:text-[#E7C873] font-semibold text-xs sm:text-sm md:text-base lg:text-[22px] py-1 sm:py-1.5 md:py-2 px-2 sm:px-3 md:px-4 rounded-lg transition-all duration-300"
                        >
                            Learn More
                        </button>
                    </div>
                    <div className="bg-[#FFE0E9] hover:bg-gradient-to-b hover:from-[#424242] hover:to-[#8A1538] hover:text-white rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 flex-1 flex flex-col items-center text-center group transition-all duration-300">
                        <div className="bg-white rounded-full shadow-md p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4">
                            <img src={vector2} className="w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16" alt="Broker Icon" />
                        </div>
                        <h2 style={{ fontFamily: 'Poppins' }} className="text-base sm:text-lg md:text-xl lg:text-[32px] font-semibold mb-1 sm:mb-2">
                            Broker solutions
                        </h2>
                        <p style={{ fontFamily: 'Poppins' }} className="text-[#000000] group-hover:text-white text-[10px] sm:text-xs md:text-sm lg:text-[16px] mb-3 sm:mb-4 md:mb-5 lg:mb-6 transition-all duration-300">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        <button
                            style={{ fontFamily: 'Poppins' }}
                            className="bg-[#8A1538] text-white group-hover:bg-white group-hover:text-[#8A1538] font-semibold text-xs sm:text-sm md:text-base lg:text-[22px] py-1 sm:py-1.5 md:py-2 px-2 sm:px-3 md:px-4 rounded-lg transition-all duration-300"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Seller2;