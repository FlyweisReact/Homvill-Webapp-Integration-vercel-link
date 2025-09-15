
import React, { useState } from "react";
import sideImage from "../assets/right9.svg"; // Replace with your actual path
import Navbar2 from "../Navbar2";
import { FaArrowsAltH } from 'react-icons/fa'; // horizontal arrow icon
import group from "../assets/group1.svg"
import { useNavigate } from "react-router-dom";
const AddDetailsForm = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar2 />
            <div className="min-h-screen flex flex-col md:flex-row">
                {/* Left Form Section */}
                <div className="w-full lg:w-2/3 p-6 md:p-12 mt-12">
                    <h2 className="text-2xl md:text-[40px] mulish-font font-bold mb-4 text-center sm:text-left ">Open House</h2>
                    <p className="text-sm md:text-[28px] mulish-font font-medium text-[#000000] mb-6 text-center sm:text-left">
                        Start and End Date
                    </p>


                    <div style={{ fontFamily: 'Poppins' }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-[20px] font-medium mb-1">Select a Start Date</label>
                            <input
                                type="text"
                                placeholder="DD/MM/YYYY"
                                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                            />
                        </div>
                        <div>
                            <label className="block text-[20px] font-medium mb-1">Select a End date</label>
                            <input
                                type="text"
                                placeholder="DD/MM/YYYY"
                                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                            />
                        </div>


                    </div>
                     {/* Icon Divider */}
                        <div className="relative flex items-center">
                            <img src={group} />
                        </div>


                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between text-[20px] mulish-font gap-4 sm:gap-20 mt-24">
                        <button onClick={() => navigate(-1)} className="w-full border border-[#8A1538] text-[#8A1538] py-2 rounded-md font-semibold hover:bg-gray-100">
                            Back
                        </button>
                        <button onClick={() => navigate('/reviewdetail')} className="w-full bg-[#8A1538] mulish-font text-white py-2 rounded-md font-semibold hover:bg-[#72152e]">
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