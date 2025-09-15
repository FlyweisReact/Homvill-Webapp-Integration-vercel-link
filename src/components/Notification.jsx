// import React,{useState} from "react";
// import { FaEdit } from "react-icons/fa";
// import Navbar2 from "./Navbar2";
// import bgImage from './assets/bgn.svg'
// import {  FaEnvelope } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";
// const settingsData = [
//     {
//         title: "Search",
//         items: ["Home recommendations"],
//         methods: "Email, Phone",
//     },
//     {
//         title: "Favorites",
//         items: ["Property updates", "Market reports"],
//         methods: "Email",
//     },
//     {
//         title: "Your home",
//         items: ["You haven't claimed any properties, yet."],
//         methods: "",
//         disableEdit: true,
//     },
//     {
//         title: "Home loans & Refinancing",
//         items: ["Mortgage product update..."],
//         methods: "",
//     },
//     {
//         title: "Rental property management",
//         items: [
//             { label: "Property management res...", methods: "Email" },
//             { label: "HomVill Rental Manager", methods: "Email" },
//             { label: "Building reviews (multi...", methods: "Email" },
//             { label: "Portfolio performance", methods: "Email" },
//         ],
//         multiEdit: true,
//     },
//     {
//         title: "HomVill news",
//         items: ["Tips, guides, and produ..."],
//         methods: "Email, Phone",
//     },
// ];

// export default function NotificationSettings() {
//     const [showModal, setShowModal] = useState(false);
//   const [emailEnabled, setEmailEnabled] = useState(true);
//     return (
//         <>
//             <Navbar2 />
//             <div
//                 className="bg-cover bg-center text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-10 lg:px-24"
//                 style={{ backgroundImage: `url(${bgImage})` }}
//             >
//                 <h2
//                     className="text-3xl sm:text-4xl lg:text-[48px] font-bold mulish-font"
//                 >
//                     Notification Settings
//                 </h2>
//                 <p
//                     style={{ fontFamily: 'Poppins' }}
//                     className="mt-5 text-xl sm:text-2xl lg:text-[32px] font-medium"
//                 >
//                     Personalize Your Profile, Enhance Your Experience!
//                 </p>
//             </div>
//              <div className="mx-24 p-4 space-y-4 mulish-font ">
//       {/* Top Switch */}
//       <div className="bg-white shadow rounded-md p-6 flex items-start justify-between">
//         <div className="">
//           <p className="text-[26px] font-bold text-black leading-snug">
//             Receive notifications from HomVill to stay informed on your home journey.
//           </p>
//           <p className="text-[26px] text-black mt-1">You can disable them anytime.</p>
//         </div>
//         <label className="inline-flex relative items-center cursor-pointer mt-2">
//           <input type="checkbox" checked readOnly className="sr-only peer" />
//           <div className="w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all duration-300 peer-focus:ring-2 peer-focus:ring-green-300" />
//           <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full peer-checked:translate-x-7 transition-transform duration-300" />
//         </label>
//       </div>

//       {/* Section Blocks */}
//       {settingsData.map((section, index) => (
//         <div key={index} className="bg-white shadow rounded-md p-6">
//           <h3 className="text-[36px] font-bold text-gray-800 mb-2">{section.title}</h3>

//           {/* If multiEdit (like Rental section) */}
//           {section.multiEdit ? (
//             <div className="space-y-4">
//               {section.items.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center justify-between border-b pb-2 last:border-b-0"
//                 >
//                   <div>
//                     <p className="text-[30px] text-[#1D1D1D]">{item.label}</p>
//                     <p className="text-[20px] text-gray-400">{item.methods}</p>
//                   </div>
//                   <button  onClick={() => setShowModal(true)} className="h-[36px] px-4 bg-[#8A1538] text-white text-[20px] rounded-md flex items-center gap-2">
//                     Edit <FaEdit className="text-xs" />
//                   </button>
//                   {showModal && (
//         <div style={{fontFamily:'Poppins'}} className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
//           <div className="bg-white rounded-xl shadow-xl w-[500px] p-6 relative">
//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 text-black"
//               onClick={() => setShowModal(false)}
//             >
//               <IoClose size={20} />
//             </button>

//             {/* Modal Title */}
//             <h2 className="text-[18px] font-semibold text-black mb-2">
//               Edit notification
//             </h2>

//             {/* Description */}
//             <p className="text-[16px] font-normal text-[#1D1D1D] mb-4">
//               Property recommendations based on your HomVill activity.
//             </p>

//             {/* Email Toggle Box */}
//             <div className="bg-[#FCE9F0] rounded-md px-4 py-3 flex items-center justify-around">
//               <div className="flex items-center gap-2 text-[18px] font-semibold text-[#1D1D1D]">
//                 <FaEnvelope className="text-[#8A1538]" />
//                 Email
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-sm">On</span>
//                 <label className="inline-flex relative items-center cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={emailEnabled}
//                     onChange={() => setEmailEnabled(!emailEnabled)}
//                     className="sr-only peer"
//                   />
//                   <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all duration-300" />
//                   <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-full transition-transform duration-300" />
//                 </label>
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="mt-6 flex justify-center gap-4">
//               <button
//                 className="px-6 py-2 border border-[#8A1538] rounded-md text-[#8A1538] font-semibold"
//                 onClick={() => setShowModal(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-6 py-2 bg-[#8A1538] text-white rounded-md font-semibold"
//                 onClick={() => setShowModal(false)}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="flex justify-between items-start">
//               <div>
//                 {section.items.map((item, i) => (
//                   <p key={i} className="text-[20px] text-[#1D1D1D] mt-1">
//                     {item}
//                   </p>
//                 ))}
//                 {section.methods && (
//                   <p className="text-[16px] text-gray-400 mt-2">{section.methods}</p>
//                 )}
//               </div>
//               {!section.disableEdit && (
//                 <button  onClick={() => setShowModal(true)} className="h-[40px] px-5 mt-2 bg-[#8A1538] text-white text-[20px] rounded-md flex items-center gap-2">
//                   Edit <FaEdit className="text-xs" />
//                 </button>
//               )}
//             </div>
//           )}
//         </div>
//       ))}

//     </div>
//         </>
//     );
// }
import React, { useState } from "react";
import { FaEdit, FaEnvelope } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Navbar2 from "./Navbar2";
import bgImage from './assets/bgn.svg';
import Footer from "./Footer";
const settingsData = [
  {
    title: "Search",
    items: ["Home recommendations"],
    methods: "Email, Phone",
  },
  {
    title: "Favorites",
    items: ["Property updates", "Market reports"],
    methods: "Email",
  },
  {
    title: "Your home",
    items: ["You haven't claimed any properties, yet."],
    methods: "",
    disableEdit: true,
  },
  {
    title: "Home loans & Refinancing",
    items: ["Mortgage product update..."],
    methods: "",
  },
  {
    title: "Rental property management",
    items: [
      { label: "Property management res...", methods: "Email" },
      { label: "HomVill Rental Manager", methods: "Email" },
      { label: "Building reviews (multi...", methods: "Email" },
      { label: "Portfolio performance", methods: "Email" },
    ],
    multiEdit: true,
  },
  {
    title: "HomVill news",
    items: ["Tips, guides, and produ..."],
    methods: "Email, Phone",
  },
];

export default function NotificationSettings() {
  const [showModal, setShowModal] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(true);

  return (
    <>
      <Navbar2 />
      <div
        className="bg-cover bg-center text-white py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-10 lg:px-24"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mulish-font"
        >
          Notification Settings
        </h2>
        <p
          style={{ fontFamily: 'Poppins, sans-serif' }}
          className="mt-3 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium"
        >
          Personalize Your Profile, Enhance Your Experience!
        </p>
      </div>
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-24 p-4 space-y-4 mulish-font">
        {/* Top Switch */}
        <div className="bg-white shadow rounded-md p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <p className="text-xl sm:text-2xl md:text-[26px] font-bold text-black leading-snug">
              Receive notifications from HomVill to stay informed on your home journey.
            </p>
            <p className="text-lg sm:text-xl md:text-[26px] text-black mt-1">
              You can disable them anytime.
            </p>
          </div>
          <label className="inline-flex relative items-center cursor-pointer mt-2 sm:mt-0">
            <input type="checkbox" checked readOnly className="sr-only peer" />
            <div className="w-12 h-6 sm:w-14 sm:h-7 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all duration-300 peer-focus:ring-2 peer-focus:ring-green-300" />
            <div className="absolute left-1 top-1 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full peer-checked:translate-x-6 sm:peer-checked:translate-x-7 transition-transform duration-300" />
          </label>
        </div>

        {/* Section Blocks */}
        {settingsData.map((section, index) => (
          <div key={index} className="bg-white shadow rounded-md p-4 sm:p-6">
            <h3 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-black mb-2">
              {section.title}
            </h3>
            {section.multiEdit ? (
              <div className="space-y-4">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-2 last:border-b-0"
                  >
                    <div>
                      <p className="text-lg mt-4 sm:text-xl md:text-[30px] text-[#1D1D1D]">
                        {item.label}
                      </p>
                      <p className="text-sm mt-4 sm:text-base md:text-[20px] text-gray-400">
                        {item.methods}
                      </p>
                    </div>
                    <button
                      onClick={() => setShowModal(true)}
                      className="mt-2 sm:mt-0 h-9 sm:h-[36px] px-3 sm:px-4 bg-[#8A1538] text-white text-base sm:text-lg md:text-[20px] rounded-md flex items-center gap-2"
                    >
                      Edit <FaEdit className="text-xs" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div>
                  {section.items.map((item, i) => (
                    <p key={i} className="text-base sm:text-lg md:text-[20px] text-[#1D1D1D] mt-1">
                      {item}
                    </p>
                  ))}
                  {section.methods && (
                    <p className="text-sm mt-4 sm:text-base md:text-[16px] text-gray-400">
                      {section.methods}
                    </p>
                  )}
                </div>
                {!section.disableEdit && (
                  <button
                    onClick={() => setShowModal(true)}
                    className="mt-2 sm:mt-0 h-9 sm:h-[40px] px-3 sm:px-5 bg-[#8A1538] text-white text-base sm:text-lg md:text-[20px] rounded-md flex items-center gap-2"
                  >
                    Edit <FaEdit className="text-xs" />
                  </button>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Modal */}
        {showModal && (
          <div
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 px-4"
          >
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-[500px] p-4 sm:p-6 relative">
              <button
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-black"
                onClick={() => setShowModal(false)}
              >
                <IoClose size={20} />
              </button>
              <h2 className="text-base sm:text-lg md:text-[18px] font-semibold text-black mb-2">
                Edit notification
              </h2>
              <p className="text-sm sm:text-base md:text-[16px] font-normal text-[#1D1D1D] mb-4">
                Property recommendations based on your HomVill activity.
              </p>
              <div className="bg-[#FCE9F0] rounded-md px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-base sm:text-lg md:text-[18px] font-semibold text-[#1D1D1D]">
                  <FaEnvelope className="text-[#8A1538]" />
                  Email
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm">On</span>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={emailEnabled}
                      onChange={() => setEmailEnabled(!emailEnabled)}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 sm:w-11 sm:h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all duration-300" />
                    <div className="absolute left-1 top-1 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full peer-checked:translate-x-4 sm:peer-checked:translate-x-full transition-transform duration-300" />
                  </label>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 flex justify----

System: center gap-2 sm:gap-4">
                <button
                  className="px-4 sm:px-6 py-1 sm:py-2 border border-[#8A1538] rounded-md text-[#8A1538] text-sm sm:text-base font-semibold"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 sm:px-6 py-1 sm:py-2 bg-[#8A1538] text-white rounded-md text-sm sm:text-base font-semibold"
                  onClick={() => setShowModal(false)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}