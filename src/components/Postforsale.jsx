import React from 'react';
import { FaSearch } from 'react-icons/fa';
import bgImage from './assets/rectt.svg'; // Replace with your actual background image path
import Navbar2 from './Navbar2';
import Footer from './Footer';
const FSBOForm = () => {
    return (
        <>
        <Navbar2/>
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-12"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
                            <div className="absolute inset-0 bg-[#00000066] opacity-40"></div>

            <div className="relative z-10 w-full p-6 px-12 ">
                <h2 className="text-white text-xl sm:text-2xl md:text-[48px] md:leading-[1.2] mulish-font font-bold mb-6">
                    Post a For Sale by Owner Listing
                </h2>

                <form className="space-y-4">
                    {/* Street Address */}
                    <div className="relative mulish-font">
                        <label className="text-white font-semibold block mt-1">Street address</label>

                        <input
                            type="text"
                            placeholder="Enter address"
                            className="w-full p-3 pr-12 rounded-md text-sm sm:text-base focus:outline-none"
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-12 transform -translate-y-1/2 bg-[#7A0E2E] text-white p-2 rounded-md"
                        >
                            <FaSearch />
                        </button>
                    </div>

                    {/* Unit and City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-white text-[32px] mulish-font font-semibold block mt-1">Unit</label>

                            <input
                                type="text"
                                placeholder="Unit# (optional)"
                                className="w-full p-3 rounded-md text-sm sm:text-base focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-white text-[32px] mulish-font font-semibold block mt-1">City</label>

                            <input
                                type="text"
                                placeholder="Enter city"
                                className="w-full p-3 rounded-md text-sm sm:text-base focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Zip and Continue */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 items-end">
                        <div>
                            <label className="text-white text-[32px] mulish-font font-semibold block mt-1">Zip</label>

                            <input
                                type="text"
                                placeholder="Enter zip"
                                className="w-full p-3 rounded-md text-sm sm:text-base focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#7A0E2E]  text-white font-semibold py-2 px-12 items-end text-[32px] w-[141px] mulish-font rounded-md hover:bg-[#5c0a1e] transition"
                        >
                            Continue
                        </button>
                    </div> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
  {/* Zip Field */}
  <div>
    <label className="text-white text-[32px] mulish-font font-semibold block mb-2">
      Zip
    </label>
    <input
      type="text"
      placeholder="Enter zip"
      className="w-full p-3 rounded-md text-sm sm:text-base focus:outline-none"
    />
  </div>

  {/* Continue Button */}
  <div className="flex justify-end">
    <button
      type="submit"
      className="bg-[#7A0E2E] text-white font-semibold py-2 px-6 text-[24px] w-[141px] mulish-font rounded-md hover:bg-[#5c0a1e] transition"
    >
      Continue
    </button>
  </div>
</div>

                </form>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default FSBOForm;
