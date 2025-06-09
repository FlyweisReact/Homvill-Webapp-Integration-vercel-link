// // ProductPage.jsx
// import React from "react";
// import Footer from "../Footer";
// import Navbar2 from "../Navbar2";
// const ProductPage = () => {
//   return (
//     <>
//     <Navbar2/>
//     <div className="flex w-full max-w-[1200px] mx-auto mt-6 px-4">
//       {/* Left Sticky Images Section */}
//       <div className="w-1/2 pr-4">
//         <div className="sticky top-6">
//           <div className="flex flex-col gap-2">
//             {/* Thumbnail List */}
//             <div className="flex flex-col gap-2">
//               {[...Array(5)].map((_, i) => (
//                 <img
//                   key={i}
//                   src="https://via.placeholder.com/60"
//                   alt="thumb"
//                   className="w-16 h-16 object-cover rounded-md border"
//                 />
//               ))}
//             </div>

//             {/* Main Image */}
//             <div className="mt-4">
//               <img
//                 src="https://via.placeholder.com/500x600"
//                 alt="Main"
//                 className="rounded-lg"
//               />
//               <span className="text-xs text-red-500">Living Savvy</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Scrollable Section */}
//       <div className="w-1/2 overflow-y-auto space-y-6">
//         {/* Title and Price */}
//         <div>
//           <h1 className="text-2xl font-semibold">
//             Hosaam 56.3" Wide Velvet Round Arms Small Apartment Loveseat
//           </h1>
//           <p className="text-gray-600 mt-1">4.3 ⭐ (1000+ Reviews)</p>
//           <p className="text-red-600 text-xl font-bold mt-2">$70.00</p>
//           <p className="text-sm text-gray-400 line-through">$85.00</p>
//         </div>

//         {/* Fabric Colors */}
//         <div>
//           <p className="font-medium mb-2">Fabric: Army Green Velvet</p>
//           <div className="flex gap-2">
//             {["#4b5320", "#FFC0CB", "#000", "#808080", "#A0522D"].map(
//               (color, i) => (
//                 <div
//                   key={i}
//                   className="w-6 h-6 rounded-full border border-gray-400"
//                   style={{ backgroundColor: color }}
//                 ></div>
//               )
//             )}
//           </div>
//         </div>

//         {/* Shipping + Add to Cart */}
//         <div>
//           <p className="text-sm text-gray-500">
//             Shipping to <span className="font-semibold">673016</span>
//           </p>
//           <button className="bg-[#8A1538] text-white px-6 py-2 rounded-md mt-4">
//             Add to Cart
//           </button>
//           <button className="border border-[#8A1538] text-[#8A1538] px-6 py-2 rounded-md ml-3 mt-4">
//             Buy Now
//           </button>
//         </div>

//         {/* At a Glance */}
//         <div>
//           <h2 className="text-lg font-semibold mb-2">At a Glance</h2>
//           <ul className="text-sm text-gray-700 space-y-1">
//             <li>✔️ Assembly Tools Included</li>
//             <li>📏 Width: 56.3"</li>
//             <li>📏 Depth: 30.7"</li>
//             <li>📏 Height: 18.1"</li>
//             <li>🔧 Assembly Required</li>
//           </ul>
//         </div>

//         {/* Description */}
//         <div>
//           <h2 className="text-lg font-semibold mb-2">Description</h2>
//           <p className="text-sm text-gray-600">
//             🌟 Soft Handpicked Velvet. The surface of our sofa is crafted from
//             handpicked velvet, which is soft and offers you a relaxing feeling.
//           </p>
//         </div>

//         {/* Placeholder to simulate scroll */}
//         <div className="h-[500px]"></div>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default ProductPage;
// import React from "react";
// import Footer from "../Footer";
// import Navbar2 from "../Navbar2";
// import { useState, useRef } from "react";
// import { FaStar, FaTools, FaRulerVertical, FaCouch } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import army from '../assets/army.svg'
// import beige from '../assets/beige.svg'
// import black from '../assets/black.svg'
// import burgundy from '../assets/burgundy.svg'
// import cyan from '../assets/cyan.svg'
// import eggplant from '../assets/eggplant.svg'
// import ginger from '../assets/ginger.svg'
// import gray from '../assets/gray.svg'
// import light from '../assets/light1.png'
// import prussian from '../assets/prussian.png'
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import { Navigation } from 'swiper/modules';
// import { FaChevronUp, FaChevronDown } from "react-icons/fa";


// const fabricOptions = [
//   {
//     name: 'Army Green Velvet',
//     image: army,
//   },
//   {
//     name: 'Cream Velvet',
//     image: beige,
//   },
//   {
//     name: 'Black Velvet',
//     image: black,
//   },
//   {
//     name: 'Burgundy Velvet',
//     image: burgundy,
//   },
//   {
//     name: 'Dark Cyan Velvet',
//     image: cyan,
//   },
//   {
//     name: 'Eggplant Velvet',
//     image: eggplant,
//   },
//   {
//     name: 'Ginger Velvet',
//     image: ginger,
//   },
//   {
//     name: 'Gray Velvet',
//     image: gray,
//   },
//   {
//     name: 'Light gray Velvet',
//     image: light,
//   },
//   {
//     name: 'Prussian Blue Velvet',
//     image: prussian,
//   },
// ];
// const ProductDetailsPage = () => {
//   const colors = ['#4b8f52', '#da8fb7', '#69c4d4', '#6b5b95', '#aaa', '#000', '#f0c'] // sample hex
//   const [selectedColor, setSelectedColor] = useState(colors[0]);
//   const [selectedFabric, setSelectedFabric] = useState(fabricOptions[0]);

//   const swiperRef = useRef(null);
//   const [expanded, setExpanded] = useState(true);


//   return (
//     <>
//       <Navbar2 />
//       <div className="flex max-w-[1300px] mx-auto p-4 gap-6">
//         {/* Left Section with Sticky */}
//         <div className="sticky top-4 flex w-[50%] h-fit">
//           {/* Thumbnails - Vertical Stack */}
//           <div className="flex flex-col gap-3 mr-4">
//             {[...Array(4)].map((_, i) => (
//               <img
//                 key={i}
//                 src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//                 alt={`Thumb-${i}`}
//                 className="w-16 h-16 rounded-md border object-cover"
//               />
//             ))}
//           </div>

//           {/* Main Image */}
//           <div className="flex-1">
//             <img
//               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//               alt="Main Product"
//               className="w-full h-auto rounded-lg object-cover"
//             />
//           </div>
//         </div>

//         {/* Right Section - Product Details */}
//         <div style={{ fontFamily: 'Poppins' }} className="w-[50%] space-y-5">
//           <div className=" mx-auto p-4 text-sm">
//             <h2 className="text-[20px] text-[#211E22] font-medium">Hasaam 56.3" Wide Velvet Round Arms Small Apartment Loveseat</h2>

//             <div className="flex items-start mt-2 text-gray-700 text-[16px]">
//               <span>4.3</span>
//               <FaStar className="text-[#F6C002] ml-1" />
//               <span className="ml-2 text-[#8A1538] underline cursor-pointer">1093 Reviews</span>
//             </div>

//             <div className="mt-4">
//               <span className="text-[31px] font-normal text-[#211E22]">$70.00</span>
//               <span className="line-through text-[#4D4A4F] text-[16px] ml-2">$100.00</span>
//               <span className="text-[#990E35] text-[16px] font-medium ml-2">15% Off</span>
//             </div>

//             <p className="text-[16px] text-[#211E22] mt-4">Earn <span className="text-[#8A1538] text-[13px]"> $12.50 </span> in rewards, with 5% back¹, plus more exclusive perks<br /> <span className="underline text-[#8A1538] cursor-pointer">Learn more</span></p>

//             <div className="mt-6">
//               <p className="text-[#211E22] font-medium text-[16px] mb-2">
//                 Fabric: {selectedFabric.name}
//               </p>

//               <div className="relative">
//                 <Swiper
//                   onSwiper={(swiper) => (swiperRef.current = swiper)}
//                   spaceBetween={10}
//                   slidesPerView="auto"
//                   modules={[Navigation]}
//                   navigation={{
//                     prevEl: '.swiper-button-prev',
//                     nextEl: '.swiper-button-next',
//                   }}
//                   className="!pr-10"
//                 >
//                   {fabricOptions.map((fabric, index) => (
//                     <SwiperSlide
//                       key={index}
//                       style={{ width: '57px' }}
//                       className="!w-[57px] !h-[57px] flex-shrink-0"
//                     >
//                       <div
//                         onClick={() => setSelectedFabric(fabric)}
//                         className={`w-[57px] h-[57px] p-[2px] rounded border-2 cursor-pointer ${selectedFabric.name === fabric.name
//                           ? 'border-[#7B189F]'
//                           : 'border-gray-300'
//                           }`}
//                       >
//                         <img
//                           src={fabric.image}
//                           alt={fabric.name}
//                           className="w-full h-full object-cover rounded"
//                         />
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>

//                 {/* Navigation Arrows */}
//                 <button className="swiper-button-prev"></button>
//                 <button className="swiper-button-next"></button>

//                 {/* Style Overrides */}
//                 <style jsx>{`
//         .swiper-button-prev,
//         .swiper-button-next {
//           width: 20px !important;
//           height: 20px !important;
//           background-color: white;
//           border-radius: 50%;
//           box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           top: 90%;
//           transform: translateY(-50%);
//         }

//         .swiper-button-prev::after,
//         .swiper-button-next::after {
//           font-size: 10px !important;
//           color: #B42F63;
//           font-weight: bold;
//         }

//         .swiper-button-prev {
//           left: 0px;
         
//         }

//         .swiper-button-next {
//           right: 0px;
//         }
//       `}</style>

//               </div>
//             </div>

//             <div className="mt-4 text-[16px]">
//               <p className="text-[#211E22]">Shipping to <span className="text-[#8A1538]  font-semibold">67346 ✎</span></p>
//               <p className="text-[#9B1000] text-[16px] mt-3">This item can’t be sent to your postal code. Please update your postal code, or continue shopping for other items.</p>
//             </div>



//             <div className="flex items-center gap-4 mt-4">
//               {/* <div className=" border-gray-400 rounded-full flex items-center gap-2">
//                 <button className="border border-gray-400 rounded px-2">-</button>
//                 <span>1</span>
//                 <button className="border border-gray-400 rounded px-2">+</button>
//               </div> */}
//               <div className="flex items-center justify-center border border-gray-400 rounded-full overflow-hidden h-[29px] w-[117px]">
//                 <button className="flex-1 text-center text-gray-700">-</button>
//                 <div className="w-px h-4 bg-gray-400"></div>
//                 <span className="flex-1 text-center text-gray-800">1</span>
//                 <div className="w-px h-4 bg-gray-400"></div>
//                 <button className="flex-1 text-center text-gray-700">+</button>
//               </div>


//               <button className="bg-[#F6C002] text-[16px] font-bold text-black px-6 py-3 rounded-full hover:bg-yellow-600">Add To Cart</button>
//               <button className="bg-[#8A1538] text-white text-[16px] font-bold px-6 py-3 rounded-full hover:bg-[#6b1038]">Buy Now</button>
//             </div>

//             <div className="mt-6">
//               <h3 className="font-semibold text-[#211E22] mb-4 text-[20px]">At a Glance</h3>
//               <div className="grid grid-cols-2 gap-y-4 text-[16px] text-gray-700">
//                 <div className="flex items-center gap-2"><FaTools /> Assembly Tools Included</div>
//                 <div className="flex items-center gap-2"><FaRulerVertical /> Height – Floor to Seat: 18.1"</div>
//                 <div className="flex items-center gap-2"><FaCouch /> Depth – Front to Back: 19.7"</div>
//                 <div className="flex items-center gap-2"><FaTools /> Assembly Required</div>
//               </div>
//             </div>
//             <div className="mt-6 pt-4 text-sm text-[#2C2E38]">
//               {/* Heading with Arrow */}
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => setExpanded(!expanded)}
//               >
//                 <h3 className="font-semibold text-[#211E22] text-[20px]">Description</h3>
//                 {expanded ? (
//                   <FaChevronUp className="text-xs" />
//                 ) : (
//                   <FaChevronDown className="text-xs" />
//                 )}
//               </div>

//               {/* Divider */}
//               <div className="h-2 rounded-full bg-gray-300 mt-3 mb-3 w-full" />

//               {/* Content */}
//               {expanded && (
//                 <div>
//                   <p className="text-[16px] font-semibold mb-2">Features</p>
//                   <ul className="list-disc pl-12 text-gray-700 space-y-1 text-[14px]">
//                     <li>
//                       <span className="font-medium">Soft Handpicked Velvet:</span> The
//                       surface of our sofa is crafted from handpicked velvet, which is
//                       soft and offers you a relaxing feeling. It's very easy to care
//                       for and will not wrinkle or fade like a fabric sofa.
//                     </li>
//                     <li>
//                       <span className="font-medium">Soft Handpicked Velvet:</span> The
//                       surface of our sofa is crafted ...
//                     </li>
//                   </ul>

//                   {/* Show More */}
//                   <p className="text-[16px] text-[#8A1538] underline mt-2 mb-4 cursor-pointer">
//                     Show More
//                   </p>
//                 </div>
//               )}
//             </div>

//             {/* <div className="mt-6 border-t pt-4">
//               <h3 className="font-semibold">Specifications</h3>
//             </div> */}
//             <div
//               className="flex justify-between items-center mt-10 cursor-pointer"
//             >
//               <h3 className="font-semibold text-[#211E22] text-[20px]">Specifications</h3>
//               <FaChevronDown className="text-xs" />

//             </div>

//             {/* <div className="mt-6 text-[#211E22] pt-4 text-[20px]">
//               <h3 className="font-semibold">Return Policy</h3>
//             </div> */}
//             <div
//               className="flex justify-between items-center pt-4 mt-4 cursor-pointer"
//             >
//               <h3 className="font-semibold text-[#211E22] text-[20px]">Return Policy</h3>
//               <FaChevronDown className="text-xs" />

//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ProductDetailsPage;
import React, { useState, useRef } from "react";
import { FaStar, FaTools, FaRulerVertical, FaCouch, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from "../Footer";
import Navbar2 from "../Navbar2";
import heart from '../assets/heart.svg'
import arrow from '../assets/arrow.svg'
import comfort from '../assets/comfort.png'
import comfort2 from '../assets/comfort.jpg'
import comfort3 from '../assets/comfort2.png'
import comfort4 from '../assets/comfort3.png'
import comfort5 from '../assets/comfort4.png'
import comfort6 from '../assets/comfort5.png'
import army from '../assets/army.svg'
import { useNavigate,Link } from 'react-router-dom';

import beige from '../assets/beige.svg'
import black from '../assets/black.svg'
import burgundy from '../assets/burgundy.svg'
import cyan from '../assets/cyan.svg'
import eggplant from '../assets/eggplant.svg'
import ginger from '../assets/ginger.svg'
import gray from '../assets/gray.svg'
import light from '../assets/light1.png'
import prussian from '../assets/prussian.png'
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeft } from "react-icons/fa"; // Install with `npm install react-icons`
import button from '../assets/button.svg'
import { Navigation } from 'swiper/modules';
import Reviews from "./Reviews";
const fabricOptions = [
  {
    name: 'Army Green Velvet',
    image: army,
  },
  {
    name: 'Cream Velvet',
    image: beige,
  },
  {
    name: 'Black Velvet',
    image: black,
  },
  {
    name: 'Burgundy Velvet',
    image: burgundy,
  },
  {
    name: 'Dark Cyan Velvet',
    image: cyan,
  },
  {
    name: 'Eggplant Velvet',
    image: eggplant,
  },
  {
    name: 'Ginger Velvet',
    image: ginger,
  },
  {
    name: 'Gray Velvet',
    image: gray,
  },
  {
    name: 'Light gray Velvet',
    image: light,
  },
  {
    name: 'Prussian Blue Velvet',
    image: prussian,
  },
];


const ProductDetailsPage = () => {
   const navigate = useNavigate();
  const colors = ['#4b8f52', '#da8fb7', '#69c4d4', '#6b5b95', '#aaa', '#000', '#f0c'];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedFabric, setSelectedFabric] = useState(fabricOptions[0]);
  const swiperRef = useRef(null);
  const [expanded, setExpanded] = useState(true);
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
  return (
    <>
    <Navbar2/>
      <div className="bg-white">
        
          <div style={{fontFamily:'Poppins'}} className="flex items-center text-sm text-gray-700 mb-1 px-4 md:px-12 pt-4 flex-wrap">
        <FaArrowLeft  onClick={() => navigate(-1)} className="mr-2 text-gray-700 cursor-pointer" />
        <span className="text-gray-800">Furniture</span>
        <span className="mx-1">/</span>
        <span className="text-gray-800">Living Room Furniture</span>
        <span className="mx-1">/</span>
        <span className="text-gray-800">Sofas</span>
        <span className="mx-1">/</span>
        <span className="text-gray-800">SKU: W00725</span>
      </div>
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row max-w-[1300px] mx-auto p-4 gap-6">
          
          {/* Left Section - Images */}
          <div className="flex flex-col lg:flex-row lg:w-1/2 gap-4 lg:sticky lg:top-4 h-fit">
        
            <div className="flex lg:flex-col gap-3 order-2 lg:order-1">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  alt={`Thumb-${i}`}
                  className="w-16 h-16 rounded-md border object-cover"
                />
              ))}
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <img
                src={button}
                alt="Main Product"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div style={{ fontFamily: 'Poppins, sans-serif' }} className="w-full lg:w-1/2 space-y-5">
            <div className="p-4 text-sm">
              <h2 className="text-xl md:text-2xl text-[#211E22] font-medium">
                Hasaam 56.3" Wide Velvet Round Arms Small Apartment Loveseat
              </h2>

              <div className="flex items-start mt-2 text-gray-700 text-base">
                <span>4.3</span>
                <FaStar className="text-[#F6C002] ml-1" />
                <span className="ml-2 text-[#8A1538] underline cursor-pointer">1093 Reviews</span>
              </div>

              <div className="mt-4 flex items-center flex-wrap gap-2">
                <span className="text-2xl md:text-3xl font-normal text-[#211E22]">$70.00</span>
                <span className="line-through text-[#4D4A4F] text-base">$100.00</span>
                <span className="text-[#990E35] text-base font-medium">15% Off</span>
              </div>

              <p className="text-base text-[#211E22] mt-4">
                Earn <span className="text-[#8A1538] text-sm">$12.50</span> in rewards, with 5% back¹, plus more exclusive perks<br />
                <span className="underline text-[#8A1538] cursor-pointer">Learn more</span>
              </p>

              <div className="mt-6">
                <p className="text-[#211E22] font-medium text-base mb-2">
                  Fabric: {selectedFabric.name}
                </p>

                <div className="relative">
                  <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={10}
                    slidesPerView="auto"
                    modules={[Navigation]}
                    navigation={{
                      prevEl: '.swiper-button-prev',
                      nextEl: '.swiper-button-next',
                    }}
                    className="!pr-10"
                  >
                    {fabricOptions.map((fabric, index) => (
                      <SwiperSlide
                        key={index}
                        style={{ width: '57px' }}
                        className="!w-[57px] !h-[57px] flex-shrink-0"
                      >
                        <div
                          onClick={() => setSelectedFabric(fabric)}
                          className={`w-[57px] h-[57px] p-[2px] rounded border-2 cursor-pointer ${
                            selectedFabric.name === fabric.name
                              ? 'border-[#7B189F]'
                              : 'border-gray-300'
                          }`}
                        >
                          <img
                            src={fabric.image}
                            alt={fabric.name}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Navigation Arrows */}
                  <button style ={{marginTop:'5px'}} className="swiper-button-prev "></button>
                  <button style ={{marginTop:'5px'}} className="swiper-button-next "></button>

                  {/* Style Overrides */}
                  <style jsx>{`
                    .swiper-button-prev,
                    .swiper-button-next {
                      width: 20px !important;
                      height: 20px !important;
                      background-color: white;
                      border-radius: 50%;
                      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      top: 50%;
                      transform: translateY(-50%);
                    }
                    .swiper-button-prev::after,
                    .swiper-button-next::after {
                      font-size: 10px !important;
                      color: #B42F63;
                      font-weight: bold;
                    }
                    .swiper-button-prev {
                      left: 0px;
                    }
                    .swiper-button-next {
                      right: 0px;
                    }
                    @media (max-width: 768px) {
                      .swiper-button-prev,
                      .swiper-button-next {
                        width: 16px !important;
                        height: 16px !important;
                      }
                      .swiper-button-prev::after,
                      .swiper-button-next::after {
                        font-size: 8px !important;
                      }
                    }
                  `}</style>
                </div>
              </div>

              <div className="mt-4 text-base">
                <p className="text-[#211E22]">
                  Shipping to <span className="text-[#8A1538] font-semibold">67346 ✎</span>
                </p>
                <p className="text-[#9B1000] text-base mt-3">
                  This item can’t be sent to your postal code. Please update your postal code, or continue shopping for other items.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-4 flex-wrap">
                <div className="flex items-center justify-center border border-gray-400 rounded-full overflow-hidden h-7 md:h-[29px] w-24 md:w-[117px]">
                  <button className="flex-1 text-center text-gray-700">-</button>
                  <div className="w-px h-4 bg-gray-400"></div>
                  <span className="flex-1 text-center text-gray-800">1</span>
                  <div className="w-px h-4 bg-gray-400"></div>
                  <button className="flex-1 text-center text-gray-700">+</button>
                </div>
                <button onClick={() => navigate('/buyfurniture')} className="bg-[#F6C002] text-base font-bold text-black px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-yellow-600">
                  Add To Cart
                </button>
                <button onClick={() => navigate('/buyfurniture')} className="bg-[#8A1538] text-white text-base font-bold px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-[#6b1038]">
                  Buy Now
                </button>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-[#211E22] mb-4 text-lg md:text-xl">At a Glance</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-base text-gray-700">
                  <div className="flex items-center gap-2"><FaTools /> Assembly Tools Included</div>
                  <div className="flex items-center gap-2"><FaRulerVertical /> Height – Floor to Seat: 18.1"</div>
                  <div className="flex items-center gap-2"><FaCouch /> Depth – Front to Back: 19.7"</div>
                  <div className="flex items-center gap-2"><FaTools /> Assembly Required</div>
                </div>
              </div>

              <div className="mt-6 pt-4 text-sm text-[#2C2E38]">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setExpanded(!expanded)}
                >
                  <h3 className="font-semibold text-[#211E22] text-lg md:text-xl">Description</h3>
                  {expanded ? (
                    <FaChevronUp className="text-xs" />
                  ) : (
                    <FaChevronDown className="text-xs" />
                  )}
                </div>
                <div className="h-2 rounded-full bg-gray-300 mt-3 mb-3 w-full" />
                {expanded && (
                  <div>
                    <p className="text-base font-semibold mb-2">Features</p>
                    <ul className="list-disc pl-6 md:pl-12 text-gray-700 space-y-1 text-sm md:text-base">
                      <li>
                        <span className="font-medium">Soft Handpicked Velvet:</span> The
                        surface of our sofa is crafted from handpicked velvet, which is
                        soft and offers you a relaxing feeling. It's very easy to care
                        for and will not wrinkle or fade like a fabric sofa.
                      </li>
                      <li>
                        <span className="font-medium">Soft Handpicked Velvet:</span> The
                        surface of our sofa is crafted ...
                      </li>
                    </ul>
                    <p className="text-base text-[#8A1538] underline mt-2 mb-4 cursor-pointer">
                      Show More
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center mt-10 cursor-pointer">
                <h3 className="font-semibold text-[#211E22] text-lg md:text-xl">Specifications</h3>
                <FaChevronDown className="text-xs" />
              </div>

              <div className="flex justify-between items-center pt-4 mt-4 cursor-pointer">
                <h3 className="font-semibold text-[#211E22] text-lg md:text-xl">Return Policy</h3>
                <FaChevronDown className="text-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
            <h2 className="text-xl md:text-[36px] mulish-font text-[#211E22] font-semibold text-gray-800 mb-4">Similar Items</h2>
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
        <Reviews/>
      <Footer/>
      
    </>
  );
};

export default ProductDetailsPage;

