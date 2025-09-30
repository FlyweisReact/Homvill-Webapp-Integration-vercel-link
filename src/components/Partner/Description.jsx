import React, { useState } from "react";
import sideImage from "../assets/right5.svg"; // Replace with your actual path
import Navbar2 from "../Navbar2";
import { useNavigate } from "react-router-dom";
import { FaLightbulb } from "react-icons/fa";

const Description = () => {
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
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Form Section */}
        <div className="w-full lg:w-2/3 p-6 md:p-12">
          <h2 className="text-2xl md:text-[40px] mulish-font font-bold mb-4 text-center sm:text-left">Description</h2>
          <p className="text-sm md:text-[28px] mulish-font font-medium text-[#000000] mb-4 text-center sm:text-left">
            Description of your home ?
          </p>
          <p style={{ fontFamily: 'Poppins' }} className="text-[20px]  text-gray-500 mb-8">Help Buyers Get To Know Your Home</p>


          <div className=" space-y-3">
            {/* Main Heading */}


            {/* Textarea */}
            <div>
              <label className="block text-[20px] font-semibold mulish-font text-gray-800 ">Listing Description</label>
              <textarea style={{ fontFamily: 'Poppins' }}
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 text-sm text-gray-600 resize-none h-24 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="You’ll love this spacious colonial nestled in the heart of Birmingham’s rolling..."
              ></textarea>
            </div>

            {/* Tip Section */}
            <div className="flex items-start space-x-2 text-[22px] text-gray-700">
              <FaLightbulb className="text-yellow-400 mulish-font text-[24px] mt-1" />
              <p>
                <span className="font-bold">Tips:</span> Ask ChatGPT to write nice description for your house.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row mt-20 justify-between text-[20px] mulish-font gap-4 sm:gap-20">
            <button
              onClick={() => navigate('/listing')}
              className="w-full border border-[#8A1538] text-[#8A1538] py-2 rounded-md font-semibold hover:bg-gray-100"
            >
              Back
            </button>
            <button
              onClick={() => navigate('/photos')}
              className={`w-full bg-[#8A1538] mulish-font text-white py-2 rounded-md font-semibold hover:bg-[#72152e] `}
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

export default Description;