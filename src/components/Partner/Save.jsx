
import React, { useState } from "react";
import sideImage from "../assets/right3.svg"; // Replace with your actual path
import Navbar2 from "../Navbar2";
import { useNavigate } from "react-router-dom";
import { Pencil, MessageSquare, LineChart } from 'lucide-react'; // Icon set

const AddDetailsForm = () => {
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
                    <h2 className="text-2xl md:text-[40px] mulish-font font-bold mb-4 text-center sm:text-left">Your Listing is Posted!</h2>
                    <p className="text-sm md:text-[28px] mulish-font font-medium text-[#000000] mb-6 text-center sm:text-left">
                        <h2 className="text-[30px] mulish-font font-semibold mt-2">What is next?</h2>

                    </p>

                    <div className=" text-black font-sans">
                        {/* Headings */}
                        <div>

                            <p className="mt-2 text-[24px] mulish-font font-medium text-black">
                                Welcome to your Listing Dashboard. Here is everything you will need to manage your home safe, all from one convenient place.
                            </p>
                        </div>

                        {/* Info Items */}
                        <div className="space-y-4 mt-8 mulish-font">
                            <div className="flex items-start gap-3">
                                <Pencil className="w-8 h-8 mt-1" />
                                <span className="text-[24px] font-medium">View & edit your listing anytime.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MessageSquare className="w-8 h-8 mt-1" />
                                <span className="text-[24px] font-medium">Receive messages and connect with interested buyers.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <LineChart className="w-8 h-8 mt-1" />
                                <span className="text-[24px] font-medium">See how many people are discovering & faveing your home.</span>
                            </div>
                        </div>

                        {/* Save Button */}
                        <button onClick={() => {
    navigate('/selldash');
  }} className="w-full mt-24 bg-[#8A1538] text-white py-2 rounded-md text-[20px] mulish-font font-medium">
                            Save
                        </button>
                    </div>

                    {/* Buttons */}
                    {/* <div className="flex flex-col sm:flex-row justify-between text-[20px] mulish-font gap-4 sm:gap-20">
                        <button onClick={() => navigate(-1)} className="w-full border border-[#8A1538] text-[#8A1538] py-2 rounded-md font-semibold hover:bg-gray-100">
                            Back
                        </button>
                        <button onClick={() => navigate('/homefeature')} className="w-full bg-[#8A1538] mulish-font text-white py-2 rounded-md font-semibold hover:bg-[#72152e]">
                            Next
                        </button>
                    </div> */}
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