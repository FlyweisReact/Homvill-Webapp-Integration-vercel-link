
import React, { useState } from "react";
import sideImage from "../assets/right7.svg"; // Replace with your actual path
import Navbar2 from "../Navbar2";
import { FaYoutube, FaTelegramPlane, FaFacebookF, FaVimeoV } from 'react-icons/fa';

import { useNavigate } from "react-router-dom";
const AddDetailsForm = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar2 />
            <div className="min-h-screen flex flex-col md:flex-row">
                {/* Left Form Section */}
                <div className="w-full lg:w-2/3 p-6 md:p-12">
                    <h2 className="text-2xl md:text-[40px] mulish-font font-bold mb-4 text-center sm:text-left">Video Tour</h2>
                    <p className="text-sm md:text-[28px] mulish-font font-medium text-[#000000] mb-6 text-center sm:text-left">
                        Upload a Video Tour
                    </p>

                    <div className="">
                        
                        {/* Icons */}
                        <div className="flex items-center gap-12 mb-4 text-5xl">
                            <FaYoutube className="text-red-600" />
                            <FaTelegramPlane className="text-blue-400" />
                            <FaFacebookF className="text-blue-600" />
                            <FaVimeoV className="text-sky-400" />
                        </div>

                        {/* Input */}
                        <label style={{fontFamily:'Poppins'}} className="block text-[20px] text-[#2C2E38] mb-1">Paste your link</label>
                        <input
                            type="text"
                            placeholder="Past your link"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        {/* Button */}
                        <button style={{fontFamily:'Poppins'}} className="text-[#1D1D1D] w-full py-2 shadow-md border border-[#00000080] rounded-md flex justify-center items-center font-semibold hover:bg-gray-100 transition">
                            + Link Video
                        </button>

                        {/* Note */}
                        <p className="md:text-[20px] mulish-font text-[#000000] font-normal mt-4">
                            If you have a video uploaded to YouTube, Facebook, Matterport or Vimeo, you may link the video to your listing by entering its URL above.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between text-[20px] mt-12 mulish-font gap-4 sm:gap-20">
                        <button onClick={() => navigate(-1)} className="w-full border border-[#8A1538] text-[#8A1538] py-2 rounded-md font-semibold hover:bg-gray-100">
                            Back
                        </button>
                        <button onClick={() => navigate('/buyer')} className="w-full bg-[#8A1538] mulish-font text-white py-2 rounded-md font-semibold hover:bg-[#72152e]">
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

export default AddDetailsForm;