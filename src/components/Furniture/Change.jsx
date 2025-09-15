

import React from "react";
import { FaChevronDown, FaCloudUploadAlt } from "react-icons/fa";
import Navbar2 from "../Navbar2";
import bg from '../assets/bg8.jpg';
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

                <div className="mx-auto mulish-font relative z-10 p-4 sm:p-6 md:p-10 max-w-7xl">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#FFFFFF] mb-2">
                        Change your Address
                    </h2>
                    <p className="text-base sm:text-lg md:text-2xl text-[#FFFFFF] mb-4 sm:mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s.
                    </p>

                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg md:text-2xl">
                        {[
                            "First Name",
                            "Last Name",
                            "Email",
                            "Phone Number",
                            "Apartment Name",
                            "State",
                            "City",
                            "Zip Code",
                           
                        ].map((label, i) => (
                            <div key={i}>
                                <label className="font-bold text-lg sm:text-xl md:text-[27px] mb-1 block">
                                    {label}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter here"
                                    style={{
                                        width: "100%",
                                        border: "1px solid #ccc",
                                        color:'black',
                                        padding: "8px 12px",
                                        borderRadius: "4px",
                                        backgroundColor: "#fff",
                                  }}
                                    className="text-sm sm:text-base"
                                />
                            </div>
                        ))}

                        
                    </form>

                    {/* Upload + Submit Section */}
                    <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row justify-end gap-4 sm:gap-6">
                        {/* Upload Grid */}
                        

                        {/* Submit button aligned bottom right */}
                        <div className="w-full md:w-auto flex items-end gap-4 mulish-font">
                            <button  onClick={() => navigate('/buyfurniture')} className="bg-white  text-black text-lg sm:text-2xl md:text-[32px] font-semibold py-2 px-6 sm:px-8 md:px-12 rounded shadow w-full md:w-auto mt-4 sm:mt-6 md:mt-0">
                                Back
                            </button>
                            <button onClick={() => navigate('/buyfurniture')} className="bg-[#870E36]  text-white text-lg sm:text-2xl md:text-[32px] font-semibold py-2 px-6 sm:px-8 md:px-12 rounded shadow w-full md:w-auto mt-4 sm:mt-6 md:mt-0">
                                Submit
                            </button>
                        </div>
                    </div>

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

