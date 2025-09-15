
// import React from "react";
// import { FaStar } from "react-icons/fa";
// import logo from './assets/logo2.svg';
// import { FaTimes } from "react-icons/fa";

// const AppPromoBanner = () => {
//   return (
//     <div className="relative flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-3 sm:p-2 rounded-md shadow-sm md:px-14 w-full mx-auto">
//       <button
//         className="absolute top-2 right-2  text-black flex items-center justify-center  transition-colors"

//         aria-label="Close"
//       >
//         <FaTimes className="w-4 h-4 font-bold" />
//       </button>
//       {/* Left Section */}
//       <div className="flex flex-col sm:flex-row items-center sm:space-x-8 w-full sm:w-auto">
//         {/* Logo + Text */}
//         <div className="flex flex-row items-center space-x-3 sm:space-x-8 w-full sm:w-auto">
//           {/* App Icon */}
//           <div className="w-20 h-14 sm:w-32 sm:h-28 rounded-2xl bg-[#8C1D40] p-3 flex items-center justify-center">
//             <img
//               src={logo}
//               alt="HomeVill"
//               className="h-full w-auto"
//             />
//           </div>

//           {/* Text + Stars + Install (on mobile) */}
//           <div style={{ fontFamily: "Poppins" }} className="flex flex-col">
//             <p className="text-sm sm:text-[20px] font-semibold leading-tight">
//               Try the app for the best buy, sell, rent or build your dream home.
//             </p>
//             <div className="flex items-center flex-wrap mt-1 gap-1 sm:gap-2">
//               {[...Array(5)].map((_, index) => (
//                 <FaStar key={index} className="text-yellow-400 text-base sm:text-[40px]" />
//               ))}
//               <span className="text-pink-600 font-semibold text-sm sm:text-[30px] ml-1">4.8</span>

//               {/* Install Button - show here only on mobile */}
//               <button
//                 style={{ fontFamily: "Poppins" }}
//                 className="sm:hidden bg-pink-600 text-white text-xs px-4 py-1 rounded-md font-semibold ml-2"
//               >
//                 Install
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Install Button - show only on desktop */}
//       <button
//         style={{ fontFamily: "Poppins" }}
//         className="hidden sm:flex bg-pink-600 w-[220px] h-[52px] text-[20px] sm:text-[32px] text-white rounded-md font-semibold shadow-md hover:bg-pink-700 items-center justify-center"
//       >
//         Install
//       </button>
//     </div>
//   );
// };

// export default AppPromoBanner;
import React, { useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import logo from './assets/logo2.svg';

const AppPromoBanner = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  // If not visible, return nothing
  if (!isVisible) return null;

  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-3 sm:p-2  shadow-sm lg:px-28 w-full mx-auto">
      
      {/* ❌ Close Button */}
      <button
         onClick={onClose}
        className="absolute top-2 right-2 text-black flex items-center justify-center transition-colors"
        aria-label="Close"
      >
        <FaTimes className="w-4 h-4 font-bold" />
      </button>

      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-8 w-full sm:w-auto">
        {/* Logo + Text */}
        <div className="flex flex-row items-center space-x-3 sm:space-x-8 w-full sm:w-auto">
          {/* App Icon */}
          <div className="w-20 h-14 sm:w-32 sm:h-28 rounded-2xl bg-[#8C1D40] p-3 flex items-center justify-center">
            <img src={logo} alt="HomeVill" className="h-full w-auto" />
          </div>

          {/* Text + Stars + Install (on mobile) */}
          <div style={{ fontFamily: "Poppins" }} className="flex flex-col">
            <p className="sm:text-[20px] font-semibold leading-tight">
              Try the app for the best buy, sell, rent or build your dream home.
            </p>
            <div className="flex items-center flex-wrap mt-1 gap-1 sm:gap-2">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400 text-base sm:text-[40px]" />
              ))}
              <span className="text-pink-600 font-semibold text-sm sm:text-[30px] ml-1">4.8</span>

              {/* Mobile Install Button */}
              <button
                style={{ fontFamily: "Poppins" }}
                className="sm:hidden bg-pink-600 text-white text-xs px-4 py-1 rounded-md font-semibold ml-2"
              >
                Install
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Install Button */}
      <button
        style={{ fontFamily: "Poppins" }}
        className="hidden sm:flex bg-pink-600 w-[220px] h-[52px] text-[20px] sm:text-[32px] text-white rounded-md font-semibold shadow-md hover:bg-pink-700 items-center justify-center"
      >
        Install
      </button>
    </div>
  );
};

export default AppPromoBanner;
