
import { SlidersHorizontal } from "lucide-react";
import rect from '../assets/rect.jpg';
import rect2 from '../assets/rect2.jpg';
import rect3 from '../assets/rect3.jpg';
import villa6 from '../assets/villa6.jpg';
import villa7 from '../assets/villa7.jpg';
import villa8 from '../assets/villa8.jpg';
import frame from '../assets/frame.svg';
import location from '../assets/location.svg';
import vect from '../assets/Vector (67).svg';
import vect2 from '../assets/Vector (68).svg';
import previous from '../assets/previous.svg';
import { useState } from "react";
import next from '../assets/next.svg';
import arrow from '../assets/arrow.svg';
import { IoCloseCircle } from "react-icons/io5";

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import heart from '../assets/heart.svg';

const listings = [
  {
    rating: 3.8,
    name: 'Mercedes Vito',
    size: '1775 sqft',
    bedrooms: 3,
    bathrooms: 2,
    location: '317 7th AVE, New York, NY 10001',
    price: '$495,500',
    deal: 'Great Deal',
    image: rect,
  },
  {
    chastising: 3.8,
    name: 'Mercedes Vito',
    size: '1775 sqft',
    bedrooms: 3,
    bathrooms: 2,
    location: '317 7th AVE, New York, NY 10001',
    price: '$629,900',
    deal: 'Great Deal',
    image: rect2,
  },
  {
    rating: 3.8,
    name: 'Mercedes Vito',
    size: '1775 sqft',
    bedrooms: 3,
    bathrooms: 2,
    location: '317 7th AVE, New York, NY 10001',
    price: '$175,500',
    deal: 'Fair Deal',
    image: rect3,
  },
  {
    rating: 3.8,
    name: 'Mercedes Vito',
    size: '1775 sqft',
    bedrooms: 3,
    bathrooms: 2,
    location: '317 7th AVE, New York, NY 10001',
    price: '$529,900',
    deal: 'Great Deal',
    image: villa6,
  },
  {
    rating: 3.8,
    name: 'Mercedes Vito',
    size: '1775 sqft',
    bedrooms: 3,
    bathrooms: 2,
    location: '317 7th AVE, New York, NY 10001',
    price: '$475,000',
    deal: '',
    image: villa7,
  },
  {
    rating: 3.8,
    name: 'Mercedes Vito',
    size: '1775 sqft',
    bedrooms: 3,
    bathrooms: 2,
    location: '317 7th AVE, New York, NY 10001',
    price: '$529,900',
    deal: 'Fair Deal',
    image: villa8,
  },
   {
    rating: 3.8,
    name: 'Mercedes Vito',
    size: '1775 sqft',
    bedrooms: 3,
    bathrooms: 2,
    location: '317 7th AVE, New York, NY 10001',
    price: '$495,500',
    deal: 'Great Deal',
    image: rect,
  },
  {
    chastising: 3.8,
    name: 'Mercedes Vito',
    size: '1775 sqft',
    bedrooms: 3,
    bathrooms: 2,
    location: '317 7th AVE, New York, NY 10001',
    price: '$629,900',
    deal: 'Great Deal',
    image: rect2,
  },
];

const PropertyHeader = () => {
  const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);

  const totalPages = 10;
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <>
      <div style={{ fontFamily: 'Poppins' }} className="relative">
        {/* Sticky Section */}
        <div
          style={{ fontFamily: 'Poppins' }}
          className="sticky top-0 z-10 bg-white flex items-center justify-center px-2 py-1 border-b"
        >
          {/* Left Side */}
          <div className="flex items-center gap-6 flex-wrap">
            <div>
              <p className="text-sm text-gray-500">430+ Properties</p>
              <h2 className="text-[36px] font-bold">Properties in New York</h2>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 mt-6">
              <button className="px-4 py-1 text-[16px] rounded-full bg-pink-100 text-pink-800 font-semibold">
                Free cancellation
              </button>
              <button className="px-4 py-1 text-[16px] rounded-full border border-gray-300 text-gray-700">
                Instant Book
              </button>
              <button className="px-4 py-1 text-[16px] rounded-full border border-gray-300 text-gray-700">
                Days on Market
              </button>
              <button className="px-4 py-1 text-[16px] rounded-full border border-gray-300 text-gray-700">
                Lorem Ipsum
              </button>
              <button className="px-4 py-1 text-[16px] rounded-full border border-gray-300 text-gray-700">
                Lorem Ipsum
              </button>
            </div>
          </div>

          {/* Right Side - Filter Icon */}
          <button className="p-2 rounded-full hover:bg-gray-100 mt-6">
            <SlidersHorizontal className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Scrollable Listings Section */}
        <div className="grid grid-cols-2 gap-6  px-24 ">
          {listings.map((listing, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-row"
            >
              {/* Image Section (Left) */}
              <div className="relative w-1/3">
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="w-[263px] h-[195px] p-3 object-cover rounded-3xl"
                />
                <div className="absolute top-4 right-4 rounded-full p-1.5 shadow flex gap-2">
                  {/* Share Icon */}
                  <div className="w-9 h-9 rounded-full backdrop-blur-sm bg-white/30 flex items-center justify-center shadow">
                    <img src={arrow} alt="Share" className="w-5 h-5" />
                  </div>
                  {/* Heart Icon */}
                  <div className="w-9 h-9 rounded-full backdrop-blur-sm bg-white/30 flex items-center justify-center shadow">
                    <img src={heart} alt="Heart" className="w-5 h-5" />
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute top-1/2 left-3 right-3 flex justify-between px-2 transform -translate-y-1/2">
                  <button className="">
                    <img className="w-12" src={previous} />
                  </button>
                  <button className="">
                    <img className="w-12" src={next} />
                  </button>
                </div>
                {/* Static Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>

              {/* Content Section (Right) */}
              <div className="p-3 flex-1 flex flex-col justify-between">
                <p className="text-[#3E4958] text-[18px] uppercase font-bold">Furnished Apartment</p>

                <div className="flex items-center mt-1">
                  <span className="text-yellow-500 mr-1 text-sm">★</span>
                  <span className="text-gray-600 text-sm font-medium">{listing.rating}</span>
                  <span className="mx-1.5 text-gray-400 text-sm">•</span>
                  <span className="text-gray-800 text-sm font-medium">{listing.name}</span>
                </div>

                <p className="text-gray-600 text-[16px] mt-0.5">
                  {listing.size} | {listing.bedrooms} bedroom | {listing.bathrooms} bathrooms
                </p>

                <div className="flex items-center mt-0.5">
                  <div className="bg-[#8A1538] rounded-full px-1 py-1">
                    <img className="filter invert w-5" src={location} />
                  </div>
                  <p className="text-[#3E4958] ml-1 text-[16px]">{listing.location}</p>
                </div>

                <div className="flex items-center mt-1">
                  <div className="flex items-center bg-[#8A1538] rounded-full px-1 py-1">
                    <img className="w-5" src={frame} />
                  </div>
                  <span className="text-gray-600 text-[16px] ml-1 font-medium">Entire home</span>
                </div>

                <div className="flex items-center justify-between  mt-2">
                  <p className="text-lg font-bold text-gray-800">{listing.price}</p>
                  {listing.deal && (
                    <div className="flex items-center space-x-1">
                      {/* {listing.deal === "Great Deal" && (
                        <span  onClick={() => setShowModal(true)} className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                          <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center">
                            <img src={vect2} alt="arrow" className="w-3 h-3" />
                          </div>
                          Great Deal
                          <svg className="w-4 h-4 ml-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm.93-11.412l-.858 3.429a.5.5 0 01-.972 0l-.858-3.43A.5.5 0 018.715 6h2.57a.5.5 0 01.485.588zM10 14a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                          </svg>
                        </span>
                        
                        
                      )} */}
                      {listing.deal === "Great Deal" && (
        <span
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1 text-green-600 text-sm font-semibold cursor-pointer"
        >
          <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center">
            <img src={vect2} alt="arrow" className="w-3 h-3" />
          </div>
          Great Deal
          <svg
            className="w-4 h-4 ml-1 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm.93-11.412l-.858 3.429a.5.5 0 01-.972 0l-.858-3.43A.5.5 0 018.715 6h2.57a.5.5 0 01.485.588zM10 14a.75.75 0 110-1.5.75.75 0 010 1.5z" />
          </svg>
        </span>
      )}

      {/* Modal */}
      {showModal && (
        // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
        //   <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-6 relative max-h-[90vh] overflow-y-auto">
          
        //     <button
        //       className="absolute top-4 right-4 text-red-600"
        //       onClick={() => setShowModal(false)}
        //     >
        //       <IoCloseCircle size={26} />
        //     </button>

          
        //     <h2 className="text-xl mulish-font font-bold text-[#1D1D1D] mb-4">
        //       Why this property is a great deal
        //     </h2>

        //     <hr className="border-t border-[#8A1538] mb-4" />

            
        //     <h3 className="text-center font-semibold text-[16px] mb-6">Information</h3>

  
        //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        //       <div>
        //         <p className="text-sm text-gray-500">Market Price</p>
        //         <input
        //           readOnly
        //           value="$8,999,000"
        //           className="w-full mt-1 p-2 rounded-md bg-gray-100 border text-sm"
        //         />
        //       </div>
        //       <div>
        //         <p className="text-sm text-gray-500">This Property Price</p>
        //         <input
        //           readOnly
        //           value="$4,955,000"
        //           className="w-full mt-1 p-2 rounded-md bg-gray-100 border text-sm"
        //         />
        //       </div>
        //     </div>

          
        //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        //       {[1, 2, 3, 4].map((_, idx) => (
        //         <div key={idx}>
        //           <input
        //             placeholder="Headline Here"
        //             className="w-full p-2 mb-2 border rounded-md text-sm"
        //           />
        //           <textarea
        //             placeholder="Body"
        //             rows={2}
        //             className="w-full p-2 border rounded-md text-sm"
        //           />
        //         </div>
        //       ))}
        //     </div>
        //   </div>
        // </div>
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b-[1.5px] border-[#8A1538]">
          <h2 className="text-xl md:text-2xl font-bold text-black">
            Why this property is a great deal
          </h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-red-600 text-2xl hover:text-red-800"
          >
             <IoCloseCircle size={26} />
          </button>
        </div>

        {/* Subheading */}
        <div className="text-center font-semibold text-lg mt-4">Information</div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-6">
          {/* Left Column */}
          <div>
            <label className="block text-sm font-medium mb-1">Market Price</label>
            <input
              type="text"
              defaultValue="$8,999,000"
              className="w-full px-4 py-3 border shadow-md border-gray-200 bg-[#F9F9F9] rounded-md"
            />

            <label className="block text-sm font-medium mt-4 mb-1">Headline Here</label>
            <input
              
              placeholder="Body"
              className="w-full px-4 py-3 border shadow-md border-gray-200 bg-[#F9F9F9] rounded-md  resize-none"
            ></input>

            <label className="block text-sm font-medium mt-4 mb-1">Headline Here</label>
            <input
              
              placeholder="Body"
              className="w-full px-4 py-3 border shadow-md border-gray-200 bg-[#F7F7F7] rounded-md resize-none"
            ></input>
          </div>

          {/* Right Column */}
          <div>
            <label className="block text-sm font-medium mb-1">This Property Price</label>
            <input
              type="text"
              defaultValue="$4,955,000"
              className="w-full px-4 py-3 border shadow-md border-gray-200 bg-[#F7F7F7] rounded-md "
            />

            <label className="block text-sm font-medium mt-4 mb-1">Headline Here</label>
            <input
              
              placeholder="Body"
              className="w-full px-4 py-3 border shadow-md border-gray-200 bg-[#F7F7F7] rounded-md  resize-none"
            ></input>

            <label className="block text-sm font-medium mt-4 mb-1">Headline Here</label>
            <input
              
              placeholder="Body"
              className="w-full px-4 py-3 border shadow-md border-gray-200 bg-[#F7F7F7] rounded-md  resize-none"
            ></input>
          </div>
        </div>
      </div>
    </div>
      )}
                      {listing.deal === "Fair Deal" && (
                        <span className="flex items-center gap-1 text-yellow-500 text-sm font-semibold">
                          <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center">
                            <img src={vect} alt="arrow" className="w-3 h-3" />
                          </div>
                          Fair Deal
                        </span>
                      )}
                    </div>
                  )} 
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pb-4 mt-6 mb-4 space-x-4 text-sm text-black">
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
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Header Section */
          .sticky {
            // flex-direction: column;
            padding: 1rem;
            align-items: stretch;
          }
          .sticky > div:first-child {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          .sticky h2 {
            font-size: 1.5rem;
            text-align: center;
          }
          .sticky p.text-sm {
            font-size: 0.75rem;
          }
          .sticky .flex-wrap.gap-3.mt-6 {
            justify-content: center;
            gap: 0.5rem;
            margin-top: 1rem;
          }
          .sticky button.px-4 {
            padding: 0.25rem 0.75rem;
            font-size: 0.75rem;
          }
          .sticky button.mt-6 {
            margin-top: 1rem;
            align-self: center;
          }

          /* Listings Section */
          .grid.grid-cols-2 {
            grid-template-columns: 1fr;
            padding: 1rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          .flex.flex-row {
            flex-direction: column;
          }
          .relative.w-1\\/3 {
            width: 100%;
          }
          .w-\\[263px\\] {
            width: 100%;
            height: auto;
            max-height: 200px;
          }
          .p-3.rounded-3xl {
            padding: 0.5rem;
          }
          .absolute.top-4.right-4 {
            top: 0.5rem;
            right: 0.5rem;
            gap: 0.5rem;
          }
          .w-9.h-9 {
            width: 2rem;
            height: 2rem;
          }
          .w-9.h-9 img {
            width: 1rem;
            height: 1rem;
          }
          .absolute.top-1\\/2 {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          .w-12 {
            width: 2.5rem;
          }
          .absolute.bottom-4 {
            bottom: 0.5rem;
          }
          .w-2.h-2 {
            width: 0.375rem;
            height: 0.375rem;
          }
          .p-3.flex-1 {
            padding: 0.75rem;
          }
          .text-\\[18px\\] {
            font-size: 0.875rem;
          }
          .text-sm {
            font-size: 0.75rem;
          }
          .text-\\[16px\\] {
            font-size: 0.75rem;
          }
          .text-lg {
            font-size: 0.875rem;
          }
          .bg-\\[\\#8A1538\\] img {
            width: 1rem;
          }
          .w-5.h-5.rounded-full {
            width: 1.25rem;
            height: 1.25rem;
          }
          .w-5.h-5.rounded-full img {
            width: 0.625rem;
            height: 0.625rem;
          }
          .w-4.h-4.ml-1 {
            width: 0.875rem;
            height: 0.875rem;
          }

          /* Pagination */
          .flex.items-center.justify-center.pb-4 {
            gap: 0.5rem;
          }
          .w-7.h-7 {
            width: 1.5rem;
            height: 1.5rem;
            font-size: 0.75rem;
          }
          .space-x-4 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 0.25rem;
          }
          .disabled\\:text-gray-300 svg {
            width: 1.25rem;
            height: 1.25rem;
          }
        }
      `}</style>
    </>
  );
};

export default PropertyHeader;