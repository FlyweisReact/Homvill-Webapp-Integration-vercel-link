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
import React, { useState, useEffect } from "react";
import { FaEdit, FaEnvelope, FaMobileAlt, FaSpinner } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Navbar2 from "./Navbar2";
import bgImage from './assets/bgn.svg';
import Footer from "./Footer";
import { useGetAllNotificationActivitiesQuery, useUpdateNotificationActivityMutation } from "../store/api/notificationActivityApiSlice";

// Static fallback data
const staticSettingsData = [
  {
    title: "Search",
    items: [{ label: "Home recommendations", Email: true, Mobile: true, methods: "Email, Phone" }],
    methods: "Email, Phone",
  },
  {
    title: "Favorites",
    items: [
      { label: "Property updates", Email: false, Mobile: true, methods: "Phone" },
      { label: "Market reports", Email: true, Mobile: true, methods: "Email, Phone" },
    ],
    multiEdit: true,
  },
  {
    title: "Your home",
    items: [{ label: "You haven't claimed any properties, yet.", Email: false, Mobile: true, methods: "Phone" }],
    methods: "",
    disableEdit: true,
  },
  {
    title: "Home loans & Refinancing",
    items: [{ label: "Mortgage product updates", Email: true, Mobile: false, methods: "Email" }],
    methods: "",
  },
  {
    title: "Rental property management",
    items: [
      { label: "Property management resources", Email: true, Mobile: true, methods: "Email, Phone" },
      { label: "HomVill Rental Manager", Email: false, Mobile: true, methods: "Phone" },
      { label: "Building reviews (multi-family)", Email: true, Mobile: false, methods: "Email" },
      { label: "Portfolio performance", Email: true, Mobile: true, methods: "Email, Phone" },
    ],
    multiEdit: true,
  },
  {
    title: "HomVill news",
    items: [{ label: "Tips, guides, and product updates", Email: false, Mobile: true, methods: "Phone" }],
    methods: "Email, Phone",
  },
];

export default function NotificationSettings() {
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [mobileEnabled, setMobileEnabled] = useState(false);
  const [updatingField, setUpdatingField] = useState(null); // Track which field is updating (Email, Mobile, Save)
  const [fetchingItem, setFetchingItem] = useState(null); // Track which item is fetching on Edit click
  const { data: notifications, isLoading, isError, error, refetch } = useGetAllNotificationActivitiesQuery({ page: 1, limit: 10 });
  const [updateNotificationActivity, { isLoading: isUpdating }] = useUpdateNotificationActivityMutation();

  // Transform API data to match settingsData structure
  const transformApiData = (apiData) => {
    if (!apiData?.success || !apiData.data?.length) return staticSettingsData;
    const data = apiData.data[0];
    const computeMethods = (email, mobile) => email && mobile ? "Email, Phone" : email ? "Email" : mobile ? "Phone" : "";
    return [
      { 
        title: "Search", 
        items: [{ label: "Home recommendations", Email: data.Search.Email, Mobile: data.Search.Mobile, methods: computeMethods(data.Search.Email, data.Search.Mobile) }], 
        methods: "Email, Phone" 
      },
      {
        title: "Favorites",
        items: [
          { label: "Property updates", Email: data.Favorites_property_updates.Email, Mobile: data.Favorites_property_updates.Mobile, methods: computeMethods(data.Favorites_property_updates.Email, data.Favorites_property_updates.Mobile) },
          { label: "Market reports", Email: data.Favorites_market_reports.Email, Mobile: data.Favorites_market_reports.Mobile, methods: computeMethods(data.Favorites_market_reports.Email, data.Favorites_market_reports.Mobile) },
        ],
        multiEdit: true,
      },
      {
        title: "Your home",
        items: [{ label: "You haven't claimed any properties, yet.", Email: data.Your_home.Email, Mobile: data.Your_home.Mobile, methods: computeMethods(data.Your_home.Email, data.Your_home.Mobile) }],
        methods: "",
        disableEdit: true,
      },
      {
        title: "Home loans & Refinancing",
        items: [{ label: "Mortgage product updates", Email: data.Home_loans_Refinancing.Email, Mobile: data.Home_loans_Refinancing.Mobile, methods: computeMethods(data.Home_loans_Refinancing.Email, data.Home_loans_Refinancing.Mobile) }],
        methods: "",
      },
      {
        title: "Rental property management",
        items: [
          { label: "Property management resources", Email: data.Property_Management_res.Email, Mobile: data.Property_Management_res.Mobile, methods: computeMethods(data.Property_Management_res.Email, data.Property_Management_res.Mobile) },
          { label: "HomVill Rental Manager", Email: data.Homvill_Rental_manager.Email, Mobile: data.Homvill_Rental_manager.Mobile, methods: computeMethods(data.Homvill_Rental_manager.Email, data.Homvill_Rental_manager.Mobile) },
          { label: "Building reviews (multi-family)", Email: data.Building_reviews.Email, Mobile: data.Building_reviews.Mobile, methods: computeMethods(data.Building_reviews.Email, data.Building_reviews.Mobile) },
          { label: "Portfolio performance", Email: data.Portfolio_performance.Email, Mobile: data.Portfolio_performance.Mobile, methods: computeMethods(data.Portfolio_performance.Email, data.Portfolio_performance.Mobile) },
        ],
        multiEdit: true,
      },
      {
        title: "HomVill news",
        items: [{ label: "Tips, guides, and product updates", Email: data.Homvill_news.Email, Mobile: data.Homvill_news.Mobile, methods: computeMethods(data.Homvill_news.Email, data.Homvill_news.Mobile) }],
        methods: "Email, Phone",
      },
    ];
  };

  const settingsData = isLoading || isError ? staticSettingsData : transformApiData(notifications);

  // Handle Edit button click with refetch
  const handleEditClick = async (section, itemIndex = 0) => {
    const itemKey = `${section.title}${section.multiEdit ? `-${section.items[itemIndex].label}` : ""}`;
    setFetchingItem(itemKey);
    await refetch(); // Refetch to get the latest data
    const updatedSettings = transformApiData(notifications); // Use latest data
    const selected = updatedSettings.find(s => s.title === section.title);
    if (selected) {
      setSelectedSection(selected);
      setSelectedItem(selected.items[itemIndex]);
      setEmailEnabled(selected.items[itemIndex].Email);
      setMobileEnabled(selected.items[itemIndex].Mobile);
      setShowModal(true);
    }
    setFetchingItem(null);
  };

  // Handle toggle changes for Email and Mobile
  const handleToggleChange = async (field, value) => {
    if (!selectedSection || !selectedItem) return;
    setUpdatingField(field); // Track which field (Email or Mobile) is updating
    const keyMap = {
      "Search": "Search",
      "Favorites-Property updates": "Favorites_property_updates",
      "Favorites-Market reports": "Favorites_market_reports",
      "Your home": "Your_home",
      "Home loans & Refinancing": "Home_loans_Refinancing",
      "Rental property management-Property management resources": "Property_Management_res",
      "Rental property management-HomVill Rental Manager": "Homvill_Rental_manager",
      "Rental property management-Building reviews (multi-family)": "Building_reviews",
      "Rental property management-Portfolio performance": "Portfolio_performance",
      "HomVill news": "Homvill_news",
    };

    const apiKey = keyMap[`${selectedSection.title}${selectedSection.multiEdit ? `-${selectedItem.label}` : ""}`];
    if (!apiKey) {
      console.error("Invalid API key for section:", selectedSection.title, selectedItem.label);
      setUpdatingField(null);
      return;
    }

    const updatedValues = {
      Email: field === "Email" ? value : emailEnabled,
      Mobile: field === "Mobile" ? value : mobileEnabled,
    };

    try {
      await updateNotificationActivity({
        Notification_activity_id: notifications?.data[0]?.Notification_activity_id || 1,
        [apiKey]: updatedValues,
      }).unwrap();
      if (field === "Email") setEmailEnabled(value);
      if (field === "Mobile") setMobileEnabled(value);
      await refetch(); // Refetch to update settingsData with latest data
    } catch (err) {
      console.error("Failed to update notification settings:", err);
    } finally {
      setUpdatingField(null);
    }
  };

  // Handle Save in modal
  const handleSave = async () => {
    if (!selectedSection || !selectedItem) return;
    setUpdatingField("Save"); // Track Save button update
    const keyMap = {
      "Search": "Search",
      "Favorites-Property updates": "Favorites_property_updates",
      "Favorites-Market reports": "Favorites_market_reports",
      "Your home": "Your_home",
      "Home loans & Refinancing": "Home_loans_Refinancing",
      "Rental property management-Property management resources": "Property_Management_res",
      "Rental property management-HomVill Rental Manager": "Homvill_Rental_manager",
      "Rental property management-Building reviews (multi-family)": "Building_reviews",
      "Rental property management-Portfolio performance": "Portfolio_performance",
      "HomVill news": "Homvill_news",
    };

    const apiKey = keyMap[`${selectedSection.title}${selectedSection.multiEdit ? `-${selectedItem.label}` : ""}`];
    if (!apiKey) {
      console.error("Invalid API key for section:", selectedSection.title, selectedItem.label);
      setUpdatingField(null);
      return;
    }

    try {
      await updateNotificationActivity({
        Notification_activity_id: notifications?.data[0]?.Notification_activity_id || 1,
        [apiKey]: { Email: emailEnabled, Mobile: mobileEnabled },
      }).unwrap();
      setShowModal(false);
      await refetch(); // Refetch to update settingsData with latest data
    } catch (err) {
      console.error("Failed to update notification settings:", err);
    } finally {
      setUpdatingField(null);
    }
  };

  const renderSettings = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center py-8">
          <FaSpinner className="animate-spin text-[#8A1538] w-8 h-8" />
          <span className="ml-2 text-gray-600">Loading Notification Settings...</span>
        </div>
      );
    }
    if (isError) {
      return (
        <div className="text-center text-red-600 py-8">
          <p>Error loading settings: {error?.data?.message || 'An error occurred'}</p>
          <p>Displaying fallback data.</p>
        </div>
      );
    }

    return settingsData.map((section, index) => (
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
                  onClick={() => handleEditClick(section, idx)}
                  className="mt-2 sm:mt-0 h-9 sm:h-[36px] px-3 sm:px-4 bg-[#8A1538] text-white text-base sm:text-lg md:text-[20px] rounded-md flex items-center gap-2"
                  disabled={isUpdating || fetchingItem !== null}
                >
                  { (fetchingItem === `${section.title}-${item.label}` || (isUpdating && updatingField === "Save" && selectedSection?.title === section.title && selectedItem?.label === item.label)) ? (
                    <>
                      <FaSpinner className="animate-spin w-4 h-4" />
                      {fetchingItem ? "Loading..." : "Saving..."}
                    </>
                  ) : (
                    <>
                      Edit <FaEdit className="text-xs" />
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row justify-between items-start">
            <div>
              {section.items.map((item, i) => (
                <p key={i} className="text-base sm:text-lg md:text-[20px] text-[#1D1D1D] mt-1">
                  {item.label}
                </p>
              ))}
              {section.methods && (
                <p className="text-sm mt-4 sm:text-base md:text-[16px] text-gray-400">
                  {section.items[0].methods || section.methods}
                </p>
              )}
            </div>
            {!section.disableEdit && (
              <button
                onClick={() => handleEditClick(section)}
                className="mt-2 sm:mt-0 h-9 sm:h-[40px] px-3 sm:px-5 bg-[#8A1538] text-white text-base sm:text-lg md:text-[20px] rounded-md flex items-center gap-2"
                disabled={isUpdating || fetchingItem !== null}
              >
                { (fetchingItem === section.title || (isUpdating && updatingField === "Save" && selectedSection?.title === section.title)) ? (
                  <>
                    <FaSpinner className="animate-spin w-4 h-4" />
                    {fetchingItem ? "Loading..." : "Saving..."}
                  </>
                ) : (
                  <>
                    Edit <FaEdit className="text-xs" />
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    ));
  };

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

        {renderSettings()}

        {showModal && selectedSection && selectedItem && (
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
                {selectedItem.label}
              </p>
              <div className="space-y-4">
                <div className="bg-[#FCE9F0] rounded-md px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-base sm:text-lg md:text-[18px] font-semibold text-[#1D1D1D]">
                    <FaEnvelope className="text-[#8A1538]" />
                    Email
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm">{emailEnabled ? "On" : "Off"}</span>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={emailEnabled}
                        onChange={() => handleToggleChange("Email", !emailEnabled)}
                        className="sr-only peer"
                        disabled={isUpdating}
                      />
                      <div className="w-10 h-5 sm:w-11 sm:h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all duration-300" />
                      <div className="absolute left-1 top-1 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full peer-checked:translate-x-4 sm:peer-checked:translate-x-full transition-transform duration-300" />
                      {isUpdating && updatingField === "Email" && (
                        <FaSpinner className="ml-2 animate-spin text-green-500 w-4 h-4" />
                      )}
                    </label>
                  </div>
                </div>
                <div className="bg-[#FCE9F0] rounded-md px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-base sm:text-lg md:text-[18px] font-semibold text-[#1D1D1D]">
                    <FaMobileAlt className="text-[#8A1538]" />
                    Phone
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm">{mobileEnabled ? "On" : "Off"}</span>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={mobileEnabled}
                        onChange={() => handleToggleChange("Mobile", !mobileEnabled)}
                        className="sr-only peer"
                        disabled={isUpdating}
                      />
                      <div className="w-10 h-5 sm:w-11 sm:h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all duration-300" />
                      <div className="absolute left-1 top-1 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full peer-checked:translate-x-4 sm:peer-checked:translate-x-full transition-transform duration-300" />
                      {isUpdating && updatingField === "Mobile" && (
                        <FaSpinner className="ml-2 animate-spin text-green-500 w-4 h-4" />
                      )}
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 flex justify-center gap-2 sm:gap-4">
                <button
                  className="px-4 sm:px-6 py-1 sm:py-2 border border-[#8A1538] rounded-md text-[#8A1538] text-sm sm:text-base font-semibold"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 sm:px-6 py-1 sm:py-2 bg-[#8A1538] text-white rounded-md text-sm sm:text-base font-semibold"
                  onClick={handleSave}
                  disabled={isUpdating}
                >
                  {isUpdating && updatingField === "Save" ? (
                    <>
                      <FaSpinner className="animate-spin mr-2 inline w-4 h-4" />
                      Saving...
                    </>
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}