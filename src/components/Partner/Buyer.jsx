
import React, { useState } from "react";
import sideImage from "../assets/right10.svg"; // Replace with your actual path
import Navbar2 from "../Navbar2";
import { useNavigate } from "react-router-dom";
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


                    <div className=" space-y-6  text-black">
                        {/* Question 1 */}
                        <div>
                            <p className="md:text-[30px] text-[#000000] font-medium mulish-font mb-2">Are you willing to work with a buyer’s agent?</p>
                            <div className="md:text-[24px] mulish-font font-normal text-[#1D1D1D] space-y-2">
                                <label className="flex  items-start gap-2">
                                    <input type="radio" name="buyerAgent1" className="mt-4" />
                                    <span>
                                        I am able to work with a buyer’s agent, and willing to negotiate
                                        on commission
                                    </span>
                                </label>
                                <label className="flex items-start gap-2">
                                    <input type="radio" name="buyerAgent1" className="mt-4" />
                                    <span>
                                        I will work with a buyer’s agent, but i won’t pay a buyer agent’s
                                        commission
                                    </span>
                                </label>
                                <label className="flex items-start gap-2">
                                    <input type="radio" name="buyerAgent1" className="mt-4" />
                                    <span>I am only willing to work buyers directly</span>
                                </label>
                            </div>
                        </div>

                        {/* Question 2 */}
                        <div>
                            <p className="mb-2 md:text-[30px] text-[#000000] font-medium mulish-font">Buyers Credit or refund ?</p>
                            <div className="space-y-2 md:text-[24px] mulish-font font-normal text-[#1D1D1D]">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="buyerCredit" />
                                    <span>Buyers Credit</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="buyerCredit" />
                                    <span>No Credit or Refund</span>
                                </label>
                            </div>
                        </div>

                        {/* Question 3 (duplicate of Question 1) */}
                        <div>
                            <p className="mb-2 md:text-[30px] text-[#000000] font-medium mulish-font">Are you willing to work with a buyer’s agent?</p>
                            <label className="flex items-start gap-2 md:text-[24px] mulish-font font-normal text-[#1D1D1D]">
                                <input type="radio" name="buyerAgent2" className="mt-4" />
                                <span>
                                    I am able to work with a buyer’s agent, and willing to negotiate on
                                    commission
                                </span>
                            </label>
                            <div className="mb-4">
                                <label className="block mb-2 md:text-[23px]  mt-4 text-[#000000] font-medium mulish-font">Add Percentage</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        placeholder="Enter here"
                                        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm w-[350px] focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                    <span className="text-base font-semibold">%</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-start gap-2 md:text-[24px] mulish-font font-normal text-[#1D1D1D]">
                                    <input type="radio" name="buyerAgentCommission" className="mt-4" />
                                    <span>
                                        I will work with a buyer’s agent, but i won’t pay a buyer agent’s
                                        commission
                                    </span>
                                </label>
                                <label className="flex items-start gap-2 md:text-[24px] mulish-font font-normal text-[#1D1D1D]">
                                    <input type="radio" name="buyerAgentCommission" className="mt-4" />
                                    <span>I am only willing to work buyers directly</span>
                                </label>
                            </div>

                            <div>
                                <p className="mb-2 font-semibold md:text-[30px] text-[#000000] font-medium mulish-font mt-4">Buyers Credit or refund ?</p>
                                <div className="space-y-2 ">
                                    <label className="flex items-center gap-2 md:text-[24px] mulish-font font-normal text-[#1D1D1D]">
                                        <input type="radio" name="buyerCredit" />
                                        <span>Buyers Credit</span>
                                    </label>
                                    <label className="flex items-center gap-2 md:text-[24px] mulish-font font-normal text-[#1D1D1D]">
                                        <input type="radio" name="buyerCredit" />
                                        <span>No Credit or Refund</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between text-[20px] mt-10 mulish-font gap-4 sm:gap-20">
                        <button onClick={() => navigate(-1)} className="w-full border border-[#8A1538] text-[#8A1538] py-2 rounded-md font-semibold hover:bg-gray-100">
                            Back
                        </button>
                        <button onClick={() => navigate('/open2')} className="w-full bg-[#8A1538] mulish-font text-white py-2 rounded-md font-semibold hover:bg-[#72152e]">
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