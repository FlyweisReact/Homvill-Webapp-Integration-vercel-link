
// import React, { useState } from "react";
// import sideImage from "../assets/improve.svg"; // Replace with your actual path
// import Navbar2 from "../Navbar2";
// import { useNavigate } from "react-router-dom";
// const AddDetailsForm = () => {
    
//     const navigate = useNavigate();
//     return (
//         <>
//             <Navbar2 />
//             <div className="min-h-screen flex flex-col md:flex-row">
//                 {/* Left Form Section */}
//                 <div className="w-full lg:w-2/3  p-6 md:p-12">
//                     <div className="">
//                         <h2 className="text-2xl md:text-[40px] mulish-font font-bold mb-4 text-center sm:text-left">Improvements</h2>
//                         <p className="text-sm md:text-[28px] mulish-font font-normal text-[#000000] mb-6 text-center sm:text-left">
//                             Have you made any improvements to your home ?
//                         </p>
//                         <p style={{ fontFamily: 'Poppins' }} className="text-sm md:text-[20px] mulish-font font-normal text-[#000000] mb-6 text-center sm:text-left">
//                             Enter any improvements you made (optional)
//                         </p>

                            

//                             <textarea
//                                 rows={5}
//                                 className="w-full p-4 bg-[#F9F9F9] border border-gray-200 rounded-md placeholder-gray-400 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#8A1538]"
//                                 placeholder="E.g. I remodeled my kitchen, upgraded the HVAC system, added new roofing, and installed hardwood floors."
//                             />
                        
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex flex-col sm:flex-row justify-between text-[20px] mulish-font gap-4 sm:gap-20">
//                         <button onClick={() => navigate(-1)} className="w-full border border-[#8A1538] text-[#8A1538] py-2 rounded-md font-semibold hover:bg-gray-100">
//                             Back
//                         </button>
//                         <button onClick={() => navigate('/improvement')} className="w-full bg-[#8A1538] mulish-font text-white py-2 rounded-md font-semibold hover:bg-[#72152e]">
//                             Next
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right Sticky Image Section */}
//                 <div className="hidden lg:block lg:w-1/3 sticky top-0 lg:h-screen">
//                     <img
//                         src={sideImage}
//                         alt="Scenic cabin"
//                         className="w-full h-full object-cover rounded-l-3xl"
//                     />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AddDetailsForm;

import React from "react";
import sideImage from "../assets/improve.svg"; // Adjust the path as needed
import Navbar2 from "../Navbar2";
import { useNavigate } from "react-router-dom";

const AddDetailsForm = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar2 />
            <div className=" flex flex-col lg:flex-row">
                {/* Left Section */}
                <div className="w-full lg:w-2/3 flex flex-col justify-center">
                    <div className=" mx-10 flex flex-col justify-center">
                        {/* Heading Section */}
                        <h2 className="text-2xl md:text-[40px] mulish-font font-bold mb-2 text-center lg:text-left">
                            Improvements
                        </h2>
                        <p className="text-md md:text-[24px] mulish-font text-[#000000] mb-2 text-center lg:text-left">
                            Have you made any improvements to your home ?
                        </p>
                        <p style={{ fontFamily: 'Poppins' }} className="text-sm md:text-[16px] text-[#000000] mb-6 text-center lg:text-left">
                            Enter any improvements you made (optional)
                        </p>

                        {/* Textarea */}
                        <textarea
                            rows={5}
                            className="w-full p-4 bg-[#F9F9F9] border border-gray-200 rounded-md placeholder-gray-400 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#8A1538]"
                            placeholder="E.g. I remodeled my kitchen, upgraded the HVAC system, added new roofing, and installed hardwood floors."
                        />

                        {/* Buttons */}
                        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4 text-[18px]">
                            <button
                                onClick={() => navigate(-1)}
                                className="w-full sm:w-1/2 border border-[#8A1538] text-[#8A1538] py-2 rounded-md font-semibold hover:bg-gray-100"
                            >
                                Back
                            </button>
                            <button
                                onClick={() => navigate('/listing')}
                                className="w-full sm:w-1/2 bg-[#8A1538] text-white py-2 rounded-md font-semibold hover:bg-[#72152e]"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Sticky Image Section */}
                <div className="hidden lg:block lg:w-1/3 sticky top-0 h-screen">
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
