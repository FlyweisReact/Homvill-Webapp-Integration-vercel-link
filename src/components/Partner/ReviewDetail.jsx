import React, { useState } from "react";
import sideImage from "../assets/right8.svg";
import Navbar2 from "../Navbar2";
import homes from '../assets/homes.svg';
import tick from '../assets/tick.svg';
import group from '../assets/group3.png';
import sofa from '../assets/sofas.jpg';
import dine from '../assets/dine.png';
import dine2 from '../assets/dine2.png';
import dine3 from '../assets/dine3.png';
import personal from '../assets/personal.png';
import stop from '../assets/STOP.png';
import { useNavigate } from "react-router-dom";


const ReviewDetail = () => {
  const [reasons, setReasons] = useState([]);

  const options = [
    "Upgrading my home",
    "Selling secondary home",
    "Relocating",
    "Downsizing my home",
    "Retiring",
    "Other",
  ];

  const toggleReason = (value) => {
    setReasons((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const navigate = useNavigate();

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Form Section */}
        <div className="w-full lg:w-2/3 p-4 sm:p-6 md:p-8 lg:p-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] mulish-font font-bold mb-3 text-center lg:text-left">Review</h2>
          <p className="text-xs sm:text-sm md:text-xl lg:text-[28px] mulish-font font-medium text-[#000000] mb-4 sm:mb-6 text-center lg:text-left">
            Your Listing Details
          </p>

          <div className="mx-auto max-w-4xl">
            {/* Property Address Section */}
            <div className="bg-white p-3 sm:p-4 rounded-lg text-sm sm:text-base md:text-lg lg:text-[24px] shadow-md mb-3 sm:mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={homes}
                      alt="House Icon"
                      className="w-12 h-12 sm:w-16 h-16 lg:w-19 lg:h-19 mr-2"
                    />
                    <img
                      src={tick}
                      alt="Tick Icon"
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 absolute top-0 left-0"
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] mulish-font font-semibold">Property Address</h2>
                </div>
                <svg
                  onClick={() => navigate('/details')}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A1538] cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div className="ml-14 sm:ml-16 lg:ml-20 mt-2 space-y-1">
                <p className="text-black mulish-font"><span className="font-medium text-[#00000080]">Offer on:</span> 807 Madison Dr Chicago IL 60490</p>
                <p className="text-black mulish-font"><span className="font-medium text-[#00000080]">For sale:</span> $550,000</p>
                <p className="text-black mulish-font"><span className="font-medium text-[#00000080]">Home Facts:</span> House Selling</p>
              </div>
            </div>

            {/* Home Features Section */}
            <div className="bg-white p-3 sm:p-4 rounded-lg text-sm sm:text-base md:text-lg lg:text-[24px] shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={homes}
                      alt="House Icon"
                      className="w-12 h-12 sm:w-16 h-16 lg:w-19 lg:h-19 mr-2"
                    />
                    <img
                      src={tick}
                      alt="Tick Icon"
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 absolute top-0 left-0"
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] mulish-font font-semibold">Home Features</h2>
                </div>
                <svg
                  onClick={() => navigate('/details')}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A1538] cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div className="ml-14 sm:ml-16 lg:ml-20 mt-2 space-y-1">
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Appliances:</span> Dryer, Trash Compactor, Freezer, Washer.
                </p>
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Floors:</span> Carpet, Softwood, Laminate, Hardwood.
                </p>
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Rooms:</span> Breakfast, Workshop, Pantry, Library, Office.
                </p>
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Views:</span> Mountain, City, Park, Water.
                </p>
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Parking:</span> Off Street, Garage Attached.
                </p>
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Others:</span> Central AC, Deck, Fire Place, Pool.
                </p>
              </div>
            </div>

            {/* Home Description Section */}
            <div className="bg-white p-3 sm:p-4 rounded-lg text-sm sm:text-base md:text-lg lg:text-[24px] shadow-md mt-3 sm:mt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={homes}
                      alt="House Icon"
                      className="w-12 h-12 sm:w-16 h-16 lg:w-19 lg:h-19 mr-2"
                    />
                    <img
                      src={tick}
                      alt="Tick Icon"
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 absolute top-0 left-0"
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] mulish-font font-semibold">Home Description</h2>
                </div>
                <svg
                  onClick={() => navigate('/details')}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A1538] cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <p className="text-black mt-2 ml-14 sm:ml-16 lg:ml-20 mulish-font">
                <span className="font-medium text-[#00000080]">Note:</span> I remodeled my kitchen, upgraded the HVAC system, added new roofing, and installed hardwood floors.
              </p>
            </div>

            {/* Price & Payment Section */}
            <div className="bg-white p-3 sm:p-4 rounded-lg text-sm sm:text-base md:text-lg lg:text-[24px] shadow-md mt-3 sm:mt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative bg-[#1D1D1D0D] rounded-full">
                    <img
                      src={group}
                      alt="Group Icon"
                      className="w-10 h-10 sm:w-12 h-12 lg:w-16 lg:h-16 mr-2"
                    />
                    <img
                      src={tick}
                      alt="Tick Icon"
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 absolute top-0 left-0"
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] mulish-font ml-2 font-semibold">Price & Payment</h2>
                </div>
                <svg
                  onClick={() => navigate('/details')}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A1538] cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div className="ml-14 sm:ml-16 lg:ml-20 mt-2 space-y-1">
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Down Payment:</span> 20%
                </p>
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Offer Amount:</span> TBD
                </p>
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">OL Refund:</span> TBD
                </p>
              </div>
            </div>

            {/* Photos & Videos Section */}
            <div className="bg-white p-3 sm:p-4 rounded-lg text-sm sm:text-base md:text-lg lg:text-[24px] shadow-md mt-3 sm:mt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative bg-[#1D1D1D0D] rounded-full">
                    <svg
                      className="w-10 h-10 sm:w-12 h-12 lg:w-16 lg:h-16 mr-2"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="12" y="13" width="16" height="16" rx="3" stroke="#000" strokeWidth="2" fill="none" />
                      <circle cx="24.5" cy="17.5" r="1.5" fill="#000" />
                      <path d="M13 24L17.5 19.5L22 24H13Z" fill="#000" />
                    </svg>
                    <img
                      src={tick}
                      alt="Tick Icon"
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 absolute top-0 left-0"
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] mulish-font ml-2 font-semibold">Photos & Videos</h2>
                </div>
                <svg
                  onClick={() => navigate('/details')}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A1538] cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div className="flex overflow-x-auto space-x-3 sm:space-x-4 ml-14 sm:ml-16 lg:ml-20 mt-3 sm:mt-4">
                <img
                  src={sofa}
                  alt="Photo 1"
                  className="w-16 h-16 sm:w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-lg"
                />
                <img
                  src={dine}
                  alt="Photo 2"
                  className="w-16 h-16 sm:w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-lg"
                />
                <img
                  src={dine2}
                  alt="Photo 3"
                  className="w-16 h-16 sm:w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-lg"
                />
                <img
                  src={dine3}
                  alt="Photo 4"
                  className="w-16 h-16 sm:w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Seller Information Section */}
            <div className="bg-white p-3 sm:p-4 rounded-lg text-sm sm:text-base md:text-lg lg:text-[24px] shadow-md mt-3 sm:mt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative bg-[#1D1D1D0D] rounded-full">
                    <img
                      src={personal}
                      alt="Personal Icon"
                      className="w-10 h-10 sm:w-12 h-12 lg:w-16 lg:h-16 mr-2"
                    />
                    <img
                      src={tick}
                      alt="Tick Icon"
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 absolute top-0 left-0"
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] mulish-font ml-2 font-semibold">Seller Information</h2>
                </div>
                <svg
                  onClick={() => navigate('/details')}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A1538] cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div className="ml-14 sm:ml-16 lg:ml-20 mt-2 space-y-1">
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Your Full Name:</span> Stefan Sarkin
                </p>
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Your Email:</span> sarkin@gmail.com
                </p>
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Your Phone:</span> +1 310 500 0042
                </p>
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Cobuyer Email:</span> cobuyer@gmail.com
                </p>
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Company Name:</span> Open Listings
                </p>
              </div>
            </div>

            {/* Open House Section */}
            <div className="bg-white p-3 sm:p-4 rounded-lg text-sm sm:text-base md:text-lg lg:text-[24px] shadow-md mt-3 sm:mt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative bg-[#1D1D1D0D] rounded-full">
                    <img
                      src={stop}
                      alt="Stop Icon"
                      className="w-10 h-10 sm:w-12 h-12 lg:w-14 lg:h-14 mr-2"
                    />
                    <img
                      src={tick}
                      alt="Tick Icon"
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 absolute top-0 left-0"
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] mulish-font ml-2 font-semibold">Open House</h2>
                </div>
                <svg
                  onClick={() => navigate('/details')}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A1538] cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div className="ml-14 sm:ml-16 lg:ml-20 mt-2 space-y-1">
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Select Start date:</span> 12-04-24
                </p>
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Select End date:</span> 12-04-26
                </p>
                <p className="text-black mulish-font">
                  <span className="font-medium text-[#00000080]">Timings:</span> 9:00 AM TO 11:00 AM
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between text-sm sm:text-base md:text-lg lg:text-[20px] mt-8 sm:mt-12 mulish-font gap-3 sm:gap-4 lg:gap-20 mx-auto max-w-4xl">
            <button
              onClick={() => navigate('/open2')}
              className="w-full border border-[#8A1538] text-[#8A1538] py-2 rounded-md font-semibold hover:bg-gray-100"
            >
              Back
            </button>
            <button
              onClick={() => navigate('/save')}
              className={`w-full bg-[#8A1538] mulish-font text-white py-2 rounded-md font-semibold hover:bg-[#72152e] `}
              // disabled={!isFormValid()}
            >
              Next
            </button>
          </div>
        </div>

        {/* Right Sticky Image Section */}
        <div className="hidden lg:block lg:w-1/3 sticky top-0 h-full lg:h-screen">
          <img
            src={sideImage}
            alt="Scenic cabin"
            className="w-full h-full object-cover rounded-l-none lg:rounded-l-3xl"
          />
        </div>
      </div>
    </>
  );
};

export default ReviewDetail;