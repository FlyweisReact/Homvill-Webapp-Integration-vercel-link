import React, { useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import logo from './assets/logo2.svg';

const AppPromoBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-3 sm:p-2 md:px-14 w-full mx-auto">
      {/* Close Button */}
      {/* <button
        className="absolute top-2 right-2 text-[#00000] hover:text-red-500 text-lg sm:text-xl"
        onClick={() => setVisible(false)}
        aria-label="Close"
      >
        <FaTimes />
      </button> */}
       <button
  className="absolute top-2 right-4  text-black border border-black rounded-full w-8 h-8 flex items-center justify-center  transition-colors"
  onClick={() => setVisible(false)}
  aria-label="Close"
>
  <FaTimes className="w-4 h-4 font-bold" />
</button>

      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
        {/* App Icon */}
        <div className="w-16 h-14 sm:w-32 sm:h-28 rounded-2xl bg-[#8C1D40] p-2 flex items-center justify-center">
          <img src={logo} alt="HomeVill" className="h-full w-auto" />
        </div>

        {/* Text + Stars */}
        <div style={{ fontFamily: "Poppins" }} className="text-center sm:text-left">
          <p className="text-base sm:text-[20px] font-semibold leading-tight">
            Try the app for the best buy, sell, rent or build your <br className="hidden md:visible" />
            dream home.
          </p>
          <div className="flex items-center justify-center sm:justify-start mt-1 sm:mt-0">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400 mr-1 text-xl sm:text-[40px]" />
            ))}
            <span className="text-pink-600 font-semibold text-lg sm:text-[30px] ml-1">4.8</span>
          </div>
        </div>
      </div>

      {/* Install Button */}
      <button
        style={{ fontFamily: "Poppins" }}
        className="bg-pink-600 w-full sm:w-[220px] h-10 sm:h-[52px] text-lg sm:text-[32px] text-white rounded-md font-medium shadow-md hover:bg-pink-700 flex items-center justify-center mt-3 sm:mt-0"
      >
        Install
      </button>
    </div>
  );
};

export default AppPromoBanner;
