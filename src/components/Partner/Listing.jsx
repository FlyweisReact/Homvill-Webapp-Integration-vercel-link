import React, { useState } from "react";
import sideImage from "../assets/right4.svg"; // Replace with your actual path
import Navbar2 from "../Navbar2";
import { FaArrowsAltH } from 'react-icons/fa'; // horizontal arrow icon
import group from "../assets/group.svg"
import { useNavigate } from "react-router-dom";

const Listing = () => {
  const navigate = useNavigate();


  return (
    <>
      <Navbar2 />
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Form Section */}
        <div className="w-full lg:w-2/3 p-6 md:p-12">
          <h2 className="text-2xl md:text-[40px] mulish-font font-bold mb-4 text-center sm:text-left">Listing Price</h2>
          <p className="text-sm md:text-[28px] mulish-font font-medium text-[#000000] mb-6 text-center sm:text-left">
            Set your listing price
          </p>

          <div className=" space-y-6">
            {/* Heading */}

            {/* Input */}
            <input
              type="text"
              value="$110,000"
              className="w-full text-[#8A1538] mulish-font text-[36px] shadow-md font-bold border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8A1538]"
              readOnly
            />

            {/* Icon Divider */}
            <div className="relative flex items-center">
              <img src={group} />
            </div>

            {/* CMA Section */}
            <div className="bg-[#F7F7F7] p-4 mb-12">
              <h3 className="md:text-[30px]  mulish-font font-bold text-black mb-1">
                CMA (Comparative Market Analysis)
              </h3>
              <p className="md:text-[24px] mulish-font text-black">
                Homes in <span className="font-semibold">90027</span> sold
                <span className="text-[#8A1538] font-semibold"> 3.9% above</span> list last month
              </p>
              <p className="md:text-[24px] mulish-font text-black mt-1">
                Your offer is <span className="text-[#8A1538] font-semibold">5% above</span> list
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between text-[20px] mulish-font gap-4 sm:gap-20 mt-12">
            <button
              onClick={() => navigate('/improvement')}
              className="w-full border border-[#8A1538] text-[#8A1538] py-2 rounded-md font-semibold hover:bg-gray-100"
            >
              Back
            </button>
            <button
              onClick={() => navigate('/description')}
              className={`w-full bg-[#8A1538] mulish-font text-white py-2 rounded-md font-semibold hover:bg-[#72152e] }`}
              // disabled={!isFormValid()}
            >
              Next
            </button>
          </div>
        </div>

        {/* Right Sticky Image Section */}
        <div className="hidden lg:block lg:w-1/3 sticky top-0 lg:h-screen">
          <img
            src={sideImage}
            alt="Scenic cabin"
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </div>
      </div>
    </>
  );
};

export default Listing;