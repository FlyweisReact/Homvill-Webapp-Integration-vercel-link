import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import bgImage from './assets/bgs2.svg'
const FSBOForm = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar2 />
            <div
                className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-12"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-[#00000066] opacity-40"></div>

                <div className="relative z-10 w-full p-6 px-12 ">
                    <h2 className="text-white text-xl sm:text-2xl md:text-[48px] md:leading-[1.2] mulish-font font-bold mb-6">
                        Boost your Property
                    </h2>
                    <p className='text-[24px] mulish-font text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <form className="space-y-4">
                        {/* Street Address */}


                        {/* Unit and City */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-white text-[32px] mulish-font font-semibold block mt-1">Name</label>

                                <input
                                    type="text"
                                    placeholder="Enter here"
                                    className="w-full p-3 rounded-md text-sm sm:text-base focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-white text-[32px] mulish-font font-semibold block mt-1">Address</label>

                                <input
                                    type="text"
                                    placeholder="Enter here"
                                    className="w-full p-3 rounded-md text-sm sm:text-base focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Zip and Continue */}
                        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 items-end">
                            <div>
                                <label className="text-white text-[32px] mulish-font font-semibold block mt-1">Email</label>

                                <input
                                    type="text"
                                    placeholder="Enter here"
                                    className="w-full p-3 rounded-md text-sm sm:text-base focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-white text-[32px] mulish-font font-semibold block mt-1">Phone Number</label>

                                <input
                                    type="text"
                                    placeholder="+1(_ _)(_ _)(_ _)"
                                    className="w-full p-3 rounded-md text-sm sm:text-base focus:outline-none"
                                />
                            </div>

                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 items-end">
                            <div>
                                <label className="text-white text-[32px] mulish-font font-semibold block mt-1">Why you want to Boost</label>

                                <input
                                    type="text"
                                    placeholder="Enter here"
                                    className="w-full p-3 rounded-md text-sm sm:text-base focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-white text-[32px] mulish-font font-semibold block mt-1">Property Name</label>

                                <input
                                    type="text"
                                    placeholder="Enter here"
                                    className="w-full p-3 rounded-md text-sm sm:text-base focus:outline-none"
                                />
                            </div>

                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                            {/* Zip Field */}
                            <div className="relative w-full">
                                <label className="text-white text-[32px] mulish-font font-semibold block mt-1">Boost On Level</label>

                                <select className="appearance-none mulish-font w-full mt-1 border border-gray-300 rounded-lg pr-8 pl-3 py-1.5 sm:py-3 text-xs sm:text-sm md:text-base text-gray-900 shadow-sm focus:outline-none">
                                    <option>Select your level</option>
                                    <option>Level 1 $25/mo</option>
                                    <option>Level 2 $50/mo</option>
                                    <option>Level 3 $75/mo</option>
                                    <option>Level 4 $100/mo</option>

                                </select>
                                <div className="absolute right-1 top-[80px] -translate-y-1/2 bg-[#7B1E3F] rounded-md w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center pointer-events-none">
                                    <FaChevronDown className="text-white text-[10px] sm:text-xs" />
                                </div>
                            </div>

                            {/* Continue Button */}
                            <div className="flex justify-end">
                                <button onClick={() => {
                            navigate('/');
                        }}
                                    type="submit"
                                    className="bg-[#7A0E2E] text-white font-semibold py-2 px-6 text-[24px] w-[141px] mulish-font rounded-md hover:bg-[#5c0a1e] transition"
                                >
                                    Pay
                                </button>
                            </div>
                        </div>

                    </form>
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

export default FSBOForm;
