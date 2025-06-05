
// import React from "react";
// import { FaChevronDown, FaCloudUploadAlt } from "react-icons/fa";
// import Navbar2 from "../Navbar2";
// import bg from '../assets/bg7.jpg'
// import Footer from "../Footer";
// const SellFurnitureForm = () => {
//     return (
//         <>
//             <Navbar2 />
//             <div
//                 className="relative bg-cover bg-center text-[#FFFFFF] py-10 px-4"
//                 style={{ backgroundImage: `url(${bg})` }}
//             >
//                 <div className="absolute inset-0 bg-[#00000066] opacity-40"></div>

//                 <div className=" mx-auto mulish-font relative z-10 p-6 md:p-10">
//                     <h2 className=" md:text-[48px] font-bold text-[#FFFFFF] mb-2">
//                         Want To Sell Your Furniture!
//                     </h2>
//                     <p className="text-[#FFFFFF] text-[24px] mb-6">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting
//                         industry. Lorem Ipsum has been the industry's standard dummy text
//                         ever since the 1500s.
//                     </p>

//                     <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[24px]">
//                         {[
//                             "First Name",
//                             "Last Name",
//                             "Email",
//                             "Phone Number",
//                             "Business Name",
//                             "State",
//                             "City",
//                             "Zip Code",
//                             "Furniture Name",
//                             "Types of Furniture Materials (eg. wood, etc)",
//                             "Color (add multiple if you have)",
//                         ].map((label, i) => (
//                             <div key={i}>
//                                 <label className="font-bold  text-[27px] mb-1 block">{label}</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter here"
//                                     style={{
//                                         width: "100%",
//                                         border: "1px solid #ccc",
//                                         color:'black',
//                                         padding: "8px 12px",
//                                         borderRadius: "4px",
//                                         backgroundColor: "#fff",
//                                     }}
//                                 />
//                             </div>
//                         ))}

//                         <div className="relative">
//                             <label className="font-bold text-[27px] mb-1   block">
//                                 Select your furniture category
//                             </label>
//                             <div className="relative text-[#00000080]">
//                                 <select
//                                     style={{
//                                         width: "100%",
//                                         border: "1px solid #ccc",
//                                         padding: "8px 12px",
//                                         borderRadius: "4px",
//                                         appearance: "none",
//                                         backgroundColor: "#fff",
//                                     }}
//                                 >
//                                     <option>Select your category...</option>
//                                     <option>Sofa</option>
//                                     <option>Chair</option>
//                                     <option>Bed</option>
//                                 </select>
//                                 <FaChevronDown className="absolute right-3 top-3  pointer-events-none" />
//                             </div>
//                         </div>
//                     </form>

//                     {/* Upload + Submit Section */}
//                     <div className="mt-10 flex flex-col md:flex-row justify-between gap-6">
//                         {/* Upload Grid */}
//                         <div className="flex-1">
//                             <label className="font-semibold text-sm block mb-2">
//                                 Add Multiple Photos
//                             </label>
//                             <div className="grid grid-cols-5 gap-4 items-stretch">
//                                 {/* Left column - 2 small boxes */}
//                                 <div className="flex flex-col gap-4">
//                                     <UploadBox />
//                                     <UploadBox />
//                                 </div>

//                                 {/* Middle column - 1 tall box */}
//                                 <div className="row-span-1 col-span-1">
//                                     <div className="h-full flex items-center justify-center border-2 border-dashed border-[#870E36] bg-white rounded text-center px-2 text-xs text-[#870E36] font-medium py-10">
//                                         <div>
//                                             <FaCloudUploadAlt className="text-2xl mb-1 mx-auto" />
//                                             Drop your files <br /> or Browse
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Right section - 4 small boxes */}
//                                 <div className="col-span-2 grid grid-cols-2 gap-4">
//                                     <UploadBox />
//                                     <UploadBox />
//                                     <UploadBox />
//                                     <UploadBox />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Submit button aligned bottom right */}
//                         <div className="w-full md:w-auto flex items-end  mulish-font">
//                             <button className="bg-[#870E36] hover:bg-[#6b0b2a] text-white text-[32px] font-semibold py-2 px-12 rounded rounded-lg shadow w-full md:w-auto mt-6 md:mt-0">
//                                 Submit
//                             </button>
//                         </div>
//                     </div>

//                     {/* Privacy Note */}
//                     <p className="text-[24px] text-white mulish-font text-gray-600 mt-6 leading-relaxed">
//                         We respect your privacy. See our privacy policy. <br />
//                         <span className="text-[20px]">Lorem Ipsum is simply dummy text of the printing and typesetting
//                         industry. Lorem Ipsum has been the industry's standard dummy text ever
//                         since the 1500s, when an unknown printer took a galley of type and
//                         scrambled it to make a type specimen book.</span>
//                     </p>
//                 </div>
//             </div>
//             <Footer/>
//         </>
//     );
// };

// // Reusable upload box
// const UploadBox = () => (
//     <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#870E36] bg-white h-24 w-[177px] rounded text-center px-2 text-xs text-[#870E36] font-medium">
//         <FaCloudUploadAlt className="text-lg mb-1" />
//         Drop your files <br /> or Browse
//     </div>
// );

// export default SellFurnitureForm;

import React from "react";
import { FaChevronDown, FaCloudUploadAlt } from "react-icons/fa";
import Navbar2 from "../Navbar2";
import bg from '../assets/bg7.jpg';
import Footer from "../Footer";

const SellFurnitureForm = () => {
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
                        Want To Sell Your Furniture!
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
                            "Business Name",
                            "State",
                            "City",
                            "Zip Code",
                            "Furniture Name",
                            "Types of Furniture Materials (eg. wood, etc)",
                            "Color (add multiple if you have)",
                        ].map((label, i) => (
                            <div key={i}>
                                <label className="font-bold text-lg sm:text-xl md:text-[27px] mb-1 block">
                                    {label}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter here"
                                    // style={{
                                    //     width: "100%",
                                    //     border: "1px solid #ccc",
                                    //     color: 'black',
                                    //     padding: "6px 10px sm:8px 12px",
                                    //     borderRadius: "4px",
                                    //     backgroundColor: "#fff",
                                    // }}
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

                        <div className="relative">
                            <label className="font-bold text-lg sm:text-xl md:text-[27px] mb-1 block">
                                Select your furniture category
                            </label>
                            <div className="relative text-[#00000080]">
                                <select
                                    // style={{
                                    //     width: "100%",
                                    //     border: "1px solid #ccc",
                                    //     padding: "6px 10px sm:8px 12px",
                                    //     borderRadius: "4px",
                                    //     appearance: "none",
                                    //     backgroundColor: "#fff",
                                    // }}
                                    style={{
                                        width: "100%",
                                        border: "1px solid #ccc",
                                        color:'black',
                                        padding: "8px 12px",
                                        borderRadius: "4px",
                                        backgroundColor: "#fff",
                                  }}
                                    className="text-sm sm:text-base"
                                >
                                    <option>Select your category...</option>
                                    <option>Sofa</option>
                                    <option>Chair</option>
                                    <option>Bed</option>
                                </select>
                                {/* <FaChevronDown className="absolute right-2 sm:right-3 top-2 sm:top-3 pointer-events-none text-sm sm:text-base" /> */}
                            </div>
                        </div>
                    </form>

                    {/* Upload + Submit Section */}
                    <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row justify-between gap-4 sm:gap-6">
                        {/* Upload Grid */}
                        <div className="flex-1">
                            <label className="font-semibold text-xs sm:text-sm md:text-base block mb-2">
                                Add Multiple Photos
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-4 items-stretch">
                                {/* Left column - 2 small boxes */}
                                <div className="flex flex-col gap-2 sm:gap-4">
                                    <UploadBox />
                                    <UploadBox />
                                </div>

                                {/* Middle column - 1 tall box */}
                                <div className="row-span-1 col-span-1">
                                    <div className="h-full flex items-center justify-center border-2 border-dashed border-[#870E36] bg-white rounded text-center px-2 text-xs sm:text-sm text-[#870E36] font-medium py-6 sm:py-8 md:py-10">
                                        <div>
                                            <FaCloudUploadAlt className="text-lg sm:text-xl md:text-2xl mb-1 mx-auto" />
                                            Drop your files <br /> or Browse
                                        </div>
                                    </div>
                                </div>

                                {/* Right section - 4 small boxes */}
                                <div className="col-span-2 sm:col-span-1 md:col-span-2 grid grid-cols-2 gap-2 sm:gap-4">
                                    <UploadBox />
                                    <UploadBox />
                                    <UploadBox />
                                    <UploadBox />
                                </div>
                            </div>
                        </div>

                        {/* Submit button aligned bottom right */}
                        <div className="w-full md:w-auto flex items-end mulish-font">
                            <button className="bg-[#870E36] hover:bg-[#6b0b2a] text-white text-lg sm:text-2xl md:text-[32px] font-semibold py-2 px-6 sm:px-8 md:px-12 rounded shadow w-full md:w-auto mt-4 sm:mt-6 md:mt-0">
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

