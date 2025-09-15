// import React from 'react'
// import Navbar2 from '../Navbar2'
// import sell from '../assets/seller.svg'
// import { FaChevronDown } from "react-icons/fa";
// import Footer from '../Footer';
// const Manager = () => {
//     return (
//         <>
//             <Navbar2 />
//             <div
//                 className="bg-cover bg-center text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-10 lg:px-12"
//                 style={{ backgroundImage: `url(${sell})` }}
//             >
//                 <h2
//                     className="text-3xl sm:text-4xl lg:text-[48px] font-bold mulish-font"
//                 >
//                     I am a seller
//                 </h2>
//                 <p
//                     style={{ fontFamily: 'Poppins' }}
//                     className="mt-5 text-xl sm:text-2xl lg:text-[32px] font-medium"
//                 >
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//             </div>
//             <div className="bg-[#F7F7F7]  mt-12 p-6">
//                 <div className='mx-9'>
//                     <h2 className="text-[36px]  mmulish-font font-bold text-gray-800 mb-1">Advertise with HomVill Rentals</h2>
//                     <p style={{ fontFamily: 'Poppins' }} className="text-[17px] text-[#1D1D1D] mb-4">
//                         Want to get more renters in the door? Partner with the #1 most-visited rentals network to achieve more for your business.
//                     </p>

//                     {/* I Manage Dropdown */}
//                     <div className="mb-2">
//                         <label className="block mulish-font font-medium text-[32px] mb-1">I manage:</label>
//                         <div className="relative w-full">
//                             <select className="appearance-none w-full border border-gray-300 rounded-lg pr-10 pl-3 py-2 text-sm text-gray-500 shadow-sm focus:outline-none">
//                                 <option>Select any</option>
//                                 <option>Properties with 25 or more unites</option>
//                                 <option>Properties with 1 to 24 or more unites</option>
//                             </select>
//                             <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#7B1E3F] rounded-md w-7 h-7 flex items-center justify-center pointer-events-none">
//                                 <FaChevronDown className="text-white text-xs" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Description */}
//                     <p className="text-xs text-gray-500 mb-6">
//                         Our sales team supports multifamily apartment marketers and property managers handling larger portfolios. If you’re trying to list and/or manage properties with 1–24 units, HomVill Rental Manager may be a better fit.
//                     </p>

//                     {/* Form Inputs */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         <div>
//                             <label className="block mulish-font font-medium text-[32px] text-[#1D1D1D]">First Name</label>
//                             <input className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm" placeholder="First name" />
//                         </div>
//                         <div>
//                             <label className="block mulish-font font-medium text-[32px] text-[#1D1D1D]">Last Name</label>
//                             <input className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm" placeholder="Last name" />
//                         </div>

//                         <div>
//                             <label className="block mulish-font font-medium text-[32px] text-[#1D1D1D]">Property management company</label>
//                             <input className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm" placeholder="Enter here..." />
//                         </div>
//                         <div>
//                             <label className="block mulish-font font-medium text-[32px] text-[#1D1D1D]">Company headquarters state</label>
//                             <div className="relative w-full">
//                                 <select className="appearance-none w-full mt-1 border border-gray-300 rounded-lg pr-10 pl-3 py-2 text-sm text-gray-500 shadow-sm focus:outline-none">
//                                     <option>Select your state</option>
//                                     <option>California</option>
//                                     <option>Texas</option>
//                                     <option>New York</option>
//                                 </select>
//                                 <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#7B1E3F] rounded-md w-7 h-7 flex items-center justify-center pointer-events-none">
//                                     <FaChevronDown className="text-white text-xs" />
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block mulish-font font-medium text-[32px] text-[#1D1D1D]">Property name</label>
//                             <input className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm" placeholder="Enter here..." />
//                         </div>
//                         <div>
//                             <label className="block mulish-font font-medium text-[32px] text-[#1D1D1D]">Email</label>
//                             <input type="email" className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm" placeholder="Enter email here" />
//                         </div>

//                         <div>
//                             <label className="block mulish-font font-medium text-[32px] text-[#1D1D1D]">Phone number</label>
//                             <input className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm" placeholder="+1 ( _ _ _ ) _ _ _ - _ _ _ _" />
//                         </div>
//                         <div className='text-end mt-12'>
//                             <button className="bg-[#7B1E3F] text-[25px] w-[360px] mulish-font text-white px-8 py-2 rounded-md shadow hover:bg-[#641732] transition">
//                                 Submit
//                             </button>
//                         </div>
//                     </div>

//                     {/* Submit Button */}


//                     {/* Disclaimer */}
//                     <p style={{fontFamily:'Poppins'}} className="text-[17px] text-[#1D1D1D] mt-4 leading-snug">
//                         We respect your privacy. See our <span className="text-[#7B1E3F] underline cursor-pointer">privacy policy</span>.<br />
//                         By pressing Submit, you agree that HomVill Group may contact you via phone/text about your inquiry, which may involve the use of automated means.
//                         You are not required to consent as a condition of purchasing any goods or services. Message/data rates may apply.
//                     </p>
//                 </div>
//                 </div>
// <Footer/>
//             </>
//             )
// }

//             export default Manager
import React from 'react';
import Navbar2 from '../Navbar2';
import sell from '../assets/seller.svg';
import { FaChevronDown } from "react-icons/fa";
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
const Manager = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar2 />
      {/* Hero Section */}
      <div
        className="bg-cover bg-center text-white py-4 px-3 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-10 lg:px-12"
        style={{ backgroundImage: `url(${sell})` }}
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mulish-font"
        >
          I am a seller
        </h2>
        <p
          style={{ fontFamily: 'Poppins' }}
          className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-xl lg:text-[32px] font-medium"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-[#F7F7F7] mt-6 sm:mt-8 md:mt-10 lg:mt-12 p-4 sm:p-6 md:p-8">
        <div className="mx-3 sm:mx-6 md:mx-9">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[36px] mulish-font font-bold text-gray-800 mb-1 sm:mb-2">
            Advertise with HomVill Rentals
          </h2>
          <p style={{ fontFamily: 'Poppins' }} className="text-sm sm:text-base md:text-[17px] text-[#1D1D1D] mb-3 sm:mb-4">
            Want to get more renters in the door? Partner with the #1 most-visited rentals network to achieve more for your business.
          </p>

          {/* I Manage Dropdown */}
          <div className="mb-2 sm:mb-3">
            <label className="block mulish-font font-medium text-lg sm:text-xl md:text-2xl lg:text-[32px] mb-1">
              I manage:
            </label>
            <div className="relative w-full">
              <select className="appearance-none w-full border border-gray-300 rounded-lg pr-8 pl-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base text-gray-500 shadow-sm focus:outline-none">
                <option>Select any</option>
                <option>Properties with 25 or more units</option>
                <option>Properties with 1 to 24 or more units</option>
              </select>
              <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#7B1E3F] rounded-md w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center pointer-events-none">
                <FaChevronDown className="text-white text-[10px] sm:text-xs" />
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mb-4 sm:mb-6">
            Our sales team supports multifamily apartment marketers and property managers handling larger portfolios. If you’re trying to list and/or manage properties with 1–24 units, HomVill Rental Manager may be a better fit.
          </p>

          {/* Form Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div>
              <label className="block mulish-font font-medium text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#1D1D1D]">
                First Name
              </label>
              <input
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base shadow-sm"
                placeholder="First name"
              />
            </div>
            <div>
              <label className="block mulish-font font-medium text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#1D1D1D]">
                Last Name
              </label>
              <input
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base shadow-sm"
                placeholder="Last name"
              />
            </div>

            <div>
              <label className="block mulish-font font-medium text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#1D1D1D]">
                Property management company
              </label>
              <input
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base shadow-sm"
                placeholder="Enter here..."
              />
            </div>
            <div>
              <label className="block mulish-font font-medium text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#1D1D1D]">
                Company headquarters state
              </label>
              <div className="relative w-full">
                <select className="appearance-none w-full mt-1 border border-gray-300 rounded-lg pr-8 pl-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base text-gray-900 shadow-sm focus:outline-none">
                  <option>Select your state</option>
                  <option>AK</option>
                  <option>AZ</option>
                  <option>AR</option>
                  <option>CA</option>
                  <option>CT</option>
                  <option>FL</option>
                  <option>GA</option>
                  <option>HI</option>
                  <option>ID</option>
                  <option>IL</option>
                  <option>IA</option>
                  <option>IN</option>
                  <option>KS</option>
                  <option>KY</option>
                  <option>ME</option>
                  <option>MA</option>
                  <option>MD</option>
                  <option>MI</option>
                  <option>MN</option>
                  <option>MS</option>
                  <option>MT</option>
                  <option>NE</option>
                  <option>NV</option>
                  <option>NH</option>
                  <option>NJ</option>
                  <option>NY</option>
                  <option>NC</option>
                  <option>ND</option>
                  <option>OH</option>
                  <option>OK</option>
                  <option>OR</option>
                  <option>PA</option>
                  <option>PR</option>
                  <option>RI</option>
                  <option>SC</option>
                  <option>SD</option>
                  <option>TN</option>
                  <option>TX</option>
                  <option>UT</option>
                  <option>VT</option>
                  <option>VA</option>
                  <option>WA</option>
                  <option>WI</option>
                  <option>WY</option>
                </select>
                <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#7B1E3F] rounded-md w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center pointer-events-none">
                  <FaChevronDown className="text-white text-[10px] sm:text-xs" />
                </div>
              </div>
            </div>

            <div>
              <label className="block mulish-font font-medium text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#1D1D1D]">
                Property name
              </label>
              <input
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base shadow-sm"
                placeholder="Enter here..."
              />
            </div>
            <div>
              <label className="block mulish-font font-medium text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#1D1D1D]">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base shadow-sm"
                placeholder="Enter email here"
              />
            </div>

            <div>
              <label className="block mulish-font font-medium text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#1D1D1D]">
                Phone number
              </label>
              <input
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base shadow-sm"
                placeholder="+1 ( _ _ _ ) _ _ _ - _ _ _ _"
              />
            </div>
            <div  className="text-end mt-6 sm:mt-8 md:mt-10 lg:mt-8">
              <button onClick={() => navigate('/')} className="bg-[#7B1E3F] text-lg sm:text-xl md:text-2xl lg:text-[25px] w-full sm:w-[300px] lg:w-[360px] mulish-font text-white px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded-md shadow hover:bg-[#641732] transition">
                Submit
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <p style={{ fontFamily: 'Poppins' }} className="text-sm sm:text-base md:text-[17px] text-[#1D1D1D] mt-3 sm:mt-4 leading-snug">
            We respect your privacy. See our{' '}
            <span className="text-[#7B1E3F] underline cursor-pointer">privacy policy</span>.<br />
            By pressing Submit, you agree that HomVill Group may contact you via phone/text about your inquiry, which may involve the use of automated means.
            You are not required to consent as a condition of purchasing any goods or services. Message/data rates may apply.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Manager;