

import React from "react";
import { FaChevronDown, FaCloudUploadAlt } from "react-icons/fa";
import Navbar2 from "../Navbar2";
import bg from '../assets/rem.svg';

import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
const SellFurnitureForm = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar2 />
            <div
                className="relative bg-cover bg-center text-[#FFFFFF] py-6 px-4 sm:py-8 md:py-10"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="absolute inset-0 bg-[#00000066] opacity-40"></div>

                <div className="mx-auto mulish-font relative z-10 p-4 sm:p-6 md:p-10 ">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#FFFFFF] mb-2">
                        I am a Remodeling Company
                    </h2>
                    <p className="text-base sm:text-lg md:text-2xl text-[#FFFFFF] mb-4 sm:mb-6">
                        ATTRACT MORE BUYERS
                    </p>

                    <form className="w-full p-6 rounded-lg text-white">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                            {/* Name */}
                            <div>
                                <label className="block text-[32px] mulish-font font-semibold mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter here"
                                    className="w-full p-3 rounded-md text-black focus:outline-none"
                                />
                            </div>

                            {/* Company */}
                            <div>
                                <label className="block text-[32px] mulish-font font-semibold mb-1">Company</label>
                                <input
                                    type="text"
                                    placeholder="Enter here"
                                    className="w-full p-3 rounded-md text-black focus:outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-[32px] mulish-font font-semibold mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter here"
                                    className="w-full p-3 rounded-md text-black focus:outline-none"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-[32px] mulish-font font-semibold mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+1 (___) ___ - ____"
                                    className="w-full p-3 rounded-md text-black focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Dropdown */}
                        <div className="relative mb-6">
                            <label className="block text-[32px] mulish-font font-semibold mb-1">We build / manage</label>
                            <select className="w-full appearance-none p-3 rounded-md text-black focus:outline-none">
                                <option>We build / manage</option>
                                <option>20+ Communities</option>
                                <option>10-19 Communities</option>
                                <option>5-9 Communities</option>
                                <option>1-4 Communities</option>
                            </select>
                            <FaChevronDown className="absolute right-4 top-11 text-black pointer-events-none" />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-[#7A0E2E] text-white font-semibold py-2 px-8 rounded-md hover:bg-[#5c0a1e] transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                    {/* Upload + Submit Section */}


                    {/* Privacy Note */}
                    <p className="text-sm sm:text-base md:text-2xl text-white mulish-font mt-4 sm:mt-6 leading-relaxed">
                        We respect your privacy. See our privacy policy. <br />
                        <span className="text-xs sm:text-sm md:text-xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </span>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

// Reusable upload box
const UploadBox = () => (
    <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#870E36] bg-white h-20 sm:h-24 w-full sm:w-[177px] rounded text-center px-2 text-xs sm:text-xs text-[#870E36] font-medium">
        <FaCloudUploadAlt className="text-base sm:text-lg md:text-lg mb-1" />
        Drop your files <br /> or Browse
    </div>
);

export default SellFurnitureForm;

