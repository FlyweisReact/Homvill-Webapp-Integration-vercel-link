
// import React from "react";
// import { FaStar } from "react-icons/fa";
// import logo from './assets/logo2.svg'

// const AppPromoBanner = () => {
//   return (
//     <div  className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm md:px-14 w-full mx-auto">
//       {/* Left Section */}
//       <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
//         {/* App Icon */}
//         <div className="w-24 h-20 sm:w-32 sm:h-28 rounded-2xl bg-[#8C1D40] p-2 flex items-center justify-center">
//           <img
//             src={logo}
//             alt="HomeVill"
//             className="h-full w-auto"
//           />
//         </div>

//         {/* Text + Stars */}
//         <div style={{ fontFamily: "Poppins" }} className="text-center sm:text-left">
//           <p className="text-lg sm:text-[20px] font-semibold leading-tight sm:leading-normal">
//             Try the app for the best buy, sell, rent or build your <br />
//             dream home.
//           </p>
//           <div className="flex items-center justify-center sm:justify-start mt-2 sm:mt-0">
//             {[...Array(5)].map((_, index) => (
//               <FaStar key={index} className="text-yellow-400 mr-1 text-2xl sm:text-[40px]" />
//             ))}
//             <span className="text-pink-600 font-semibold text-xl sm:text-[30px] ml-2">4.8</span>
//           </div>
//         </div>
//       </div>

//       {/* Install Button */}
//       <button
//         style={{ fontFamily: "Poppins" }}
//         className="bg-pink-600 w-full sm:w-[220px] h-[48px] sm:h-[52px] text-xl sm:text-[32px] text-white rounded-md font-medium shadow-md hover:bg-pink-700 flex items-center justify-center mt-4 sm:mt-0"
//       >
//         Install
//       </button>
//     </div>
//   );
// };

// export default AppPromoBanner;
import React from "react";
import { FaStar } from "react-icons/fa";
import logo from './assets/logo2.svg';

const AppPromoBanner = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-3 sm:p-2 rounded-md shadow-sm md:px-14 w-full mx-auto">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
        {/* App Icon */}
        <div className="w-16 h-14 sm:w-32 sm:h-28 rounded-2xl bg-[#8C1D40] p-2 flex items-center justify-center">
          <img
            src={logo}
            alt="HomeVill"
            className="h-full w-auto"
          />
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