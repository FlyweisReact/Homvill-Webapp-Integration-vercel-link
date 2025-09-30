import React, { useState } from "react";
import sideImage from "../assets/right6.svg"; // Replace with your actual path
import Navbar2 from "../Navbar2";
import { useNavigate } from "react-router-dom";
// import Upload from "../assets/upload.svg";
import { FiUploadCloud } from 'react-icons/fi';


const Photos = () => {
  const navigate = useNavigate();
  const UploadBox = ({ big = false }) => (
    <div
      className={`flex flex-col items-center justify-center border-2 border-dashed border-[#8A1538] rounded-md p-4 
            ${big ? 'w-full sm:w-[250px] h-[150px] sm:h-[250px]' : 'w-full sm:w-[120px] h-[100px] sm:h-[120px]'}
            max-w-[250px]`}
    >
      <FiUploadCloud size={big ? 48 : 24} className="text-gray-400" />
      <p className={`text-center mt-2 text-sm ${big ? 'text-[#8A1538]' : 'text-[#8A1538]'}`}>
        Drop your files <br /> {big ? 'here or' : 'here'}
        <span className="text-[#8A1538] mulish-font cursor-pointer">{big && 'Browse'}</span>
        {!big && <br />} {!big && <span className="text-red-600 cursor-pointer">Browse</span>}
      </p>
    </div>
  );
  return (
    <>
      <Navbar2 />
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Form Section */}
        <div className="w-full lg:w-2/3 p-6 md:p-12">
          <h2 className="text-2xl md:text-[40px] mulish-font font-bold mb-4 text-center sm:text-left">Photos</h2>
          <p className="text-sm md:text-[28px] mulish-font font-medium text-[#000000] mb-6 text-center sm:text-left">
            Upload the photos for Listing
          </p>
          <p style={{ fontFamily: "Poppins" }} className="text-sm text-gray-500 mb-6">Upload the documents you want to share</p>

          <div className="p-6">
            <div className="flex flex-wrap gap-4 max-w-4xl justify-center sm:justify-start">
              <div className="flex flex-col gap-4">
                <UploadBox />
                <UploadBox />
              </div>

              <UploadBox big />

              <div className="flex flex-col gap-4">
                <UploadBox />
                <UploadBox />
              </div>

              <div className="flex flex-col gap-4">
                <UploadBox />
                <UploadBox />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between text-[20px] mulish-font gap-4 mt-12 sm:gap-20">
            <button
              onClick={() => navigate('/description')}
              className="w-full border border-[#8A1538] text-[#8A1538] py-2 rounded-md font-semibold hover:bg-gray-100"
            >
              Back
            </button>
            <button
              onClick={() => navigate('/video')}
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

export default Photos;