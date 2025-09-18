// import React, { useState } from "react";
// import Navbar2 from "./Navbar2";
// import { IoClose } from "react-icons/io5";
// import { FaUpload } from "react-icons/fa";
// import bgImage from './assets/bgs.svg'
// import Footer from "./Footer";
// export default function DocumentPreferences() {
//   const [toggle1, setToggle1] = useState(true);
//   const [toggle2, setToggle2] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [showModal2, setShowModal2] = useState(false);

//   return (
//     <>
//     <Navbar2/>
//      <div
//             className="bg-cover bg-center text-white py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-10 lg:px-24"
//             style={{ backgroundImage: `url(${bgImage})` }}
//           >
//             <h2
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mulish-font"
//             >
//               Document Settings
//             </h2>
//             <p
//               style={{ fontFamily: 'Poppins, sans-serif' }}
//               className="mt-3 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium"
//             >
//               Update and Manage Your Documents Easily!
//             </p>
//           </div>
//     <div className=" mx-24 mt-10 mulish-font p-6 border border-[#e4bcc7] rounded-xl shadow bg-white space-y-6 mulish-font">
//       <h2 className="text-[40px] font-bold text-[#1D1D1D]">Document preferences</h2>

//       <div>
//         <h3 className="text-[32px] font-bold text-[#1D1D1D] mb-2">Benefits of Going Paperless</h3>
//         <ul className="list-disc list-inside text-[#1D1D1D80] space-y-2 text-[24px]">
//           <li>
//             By agreeing, you will receive and sign documents electronically. Otherwise,
//             physical copies will be mailed to you.
//           </li>
//           <li>
//             For further details, please review our information on electronic signatures.
//           </li>
//         </ul>

//         {/* Add Signature Button */}
//         <div className="mt-4 text-end">
//           <button onClick={() => setShowModal(true)} className="bg-[#8A1538] text-white px-4 py-2 rounded-md text-[24px] font-semibold">
//             Add Signature
//           </button>
//           {showModal && (
//         <div style={{fontFamily:'Poppins'}} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
//           <div className="bg-white w-[500px] rounded-xl shadow-lg p-6 relative">
//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 text-black"
//               onClick={() => setShowModal(false)}
//             >
//               <IoClose size={20} />
//             </button>

//             {/* Modal Title */}
//             <h2 className="text-[18px] text-start font-bold text-[#1D1D1D] mb-4">
//               Add Your Signature
//             </h2>

//             {/* Label */}
//             <p className="text-[14px] text-start font-medium text-[#1D1D1D] mb-2">Photo</p>

//             {/* Upload Drop Zone */}
//             <div className="border-2 border-dashed border-[#8A1538] rounded-md p-8 flex flex-col items-center text-center text-[#8A1538] text-sm mb-6">
//               <FaUpload className="text-2xl mb-2" />
//               <p>Make your signature or drag & drop signature</p>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-6 py-2 border border-[#8A1538] text-[#8A1538] rounded-md bg-[#FCE9F0] text-sm font-semibold"
//               >
//                 Cancel
//               </button>
//               <button onClick={() => setShowModal(false)} className="px-6 py-2 bg-[#8A1538] text-white rounded-md text-sm font-semibold">
//                 Upload
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//         </div>
//       </div>

//       {/* Your Settings */}
//       <div>
//         <h3 className="text-[32px] font-bold text-[#1D1D1D] mb-2">Your Settings</h3>
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <p className="text-[24px] text-[#1D1D1D80] ">
//               • I agree to sending, signing, and receiving documents electronically from
//               HomVill, Inc., which includes HomVill.com.
//             </p>
//             <label className="inline-flex relative items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="sr-only peer"
//                 checked={toggle1}
//                 onChange={() => setToggle1(!toggle1)}
//               />
//               <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all duration-300" />
//               <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-full transition-transform duration-300" />
//             </label>
//           </div>

//           <div className="flex justify-between items-center">
//             <p className="text-[24px] text-[#1D1D1D80]">
//               • I agree to sending, signing, and receiving documents electronically from
//               HomVill Closing Services.
//             </p>
//             <label className="inline-flex relative items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="sr-only peer"
//                 checked={toggle2}
//                 onChange={() => setToggle2(!toggle2)}
//               />
//               <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all duration-300" />
//               <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-full transition-transform duration-300" />
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-end gap-4">
//         <button className="px-5 py-2 border border-[#8A1538] text-[#8A1538] rounded-md font-semibold text-[24px] bg-[#FCE9F0]">
//           Reject All
//         </button>
//         <button  onClick={() => setShowModal2(true)} className="px-5 py-2 bg-[#8A1538] text-white rounded-md font-semibold text-[24px]">
//           Accept All
//         </button>
//            {showModal2 && (
//         <div style={{fontFamily:'Poppins'}} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
//           <div className="bg-white w-[550px] max-h-[90vh] rounded-xl shadow-lg p-6 relative overflow-hidden">
//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 text-black"
//               onClick={() => setShowModal2(false)}
//             >
//               <IoClose size={20} />
//             </button>

//             {/* Modal Header */}
//             <h2 className="text-[18px] font-bold text-[#1D1D1D] mb-4">
//               Go Easy With Paperless
//             </h2>

//             {/* Scrollable Content */}
//             <div className="h-[300px] overflow-y-auto pr-2">
//               <h3 className="font-semibold text-[15px] mb-2">Terms & Conditions</h3>
//               <p className="text-sm text-gray-700 font-normal leading-relaxed space-y-2">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 Lorem Ipsum has been the industry's standard dummy text ever since the
//                 1500s, when an unknown printer took a galley of type and scrambled it to
//                 make a type specimen book. It has survived not only five centuries, but
//                 also the leap into electronic typesetting, remaining essentially unchanged.
//                 It was popularised in the 1960s with the release of Letraset sheets
//                 containing Lorem Ipsum passages, and more recently with desktop publishing
//                 software like Aldus PageMaker including versions of Lorem Ipsum.
//               </p>
//               <br />
//               <p className="text-sm text-gray-700 font-normal leading-relaxed">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 Lorem Ipsum has been the industry's standard dummy text ever since the
//                 1500s, when an unknown printer took a galley of type and scrambled it to
//                 make a type specimen book.
//               </p>
//             </div>

//             {/* Modal Footer */}
//             <div className="mt-6 flex justify-center gap-4">
//               <button
//                 onClick={() => setShowModal2(false)}
//                 className="px-6 py-2 border border-[#8A1538] text-[#8A1538] rounded-md bg-[#FCE9F0] text-sm font-semibold"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => setShowModal2(false)}
//                 className="px-6 py-2 bg-[#8A1538] text-white rounded-md text-sm font-semibold"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import Navbar2 from "./Navbar2";
import { IoClose } from "react-icons/io5";
import { FaUpload, FaSpinner } from "react-icons/fa";
import bgImage from './assets/bgs.svg';
import Footer from "./Footer";
import { useGetAllDocumentPreferencesQuery, useUpdateDocumentPreferencesMutation } from "../store/api/documentPreferencesApiSlice";

export default function DocumentPreferences() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [updatingToggle, setUpdatingToggle] = useState(null); // Track which toggle/button is updating
  const { data: preferences, isLoading, isError, error } = useGetAllDocumentPreferencesQuery({ page: 1, limit: 10 });
  const [updateDocumentPreferences, { isLoading: isUpdating }] = useUpdateDocumentPreferencesMutation();

  // Static fallback data
  const staticPreferences = {
    Benefits_going_paperless: "Reduced paper usage, faster processing, secure digital storage, environmental benefits, and 24/7 access",
    settings: [
      {
        "I agree to sending, and receiving documents electronically form HomVill, Inc.. with includes HomVill.com": false,
        "I agree to sending, and receiving documents electronically form HomVill Closing Services.": true,
      },
    ],
    Document_preferences_id: 1,
  };

  // Initialize toggles based on API data
  useEffect(() => {
    if (preferences?.success && preferences.data?.length > 0) {
      const settings = preferences.data[0].settings[0];
      setToggle1(settings["I agree to sending, and receiving documents electronically form HomVill, Inc"]?.[""]?.[" with includes HomVill"]?.["com"] || false);
      setToggle2(settings["I agree to sending, and receiving documents electronically form HomVill Closing Services"]?.[""] || false);
    }
  }, [preferences]);

  // Handle toggle changes and update API
  const handleToggleChange = async (toggle, value) => {
    setUpdatingToggle(toggle); // Set the specific toggle being updated
    const newToggle1 = toggle === 1 ? value : toggle1;
    const newToggle2 = toggle === 2 ? value : toggle2;

    try {
      await updateDocumentPreferences({
        Document_preferences_id: preferences?.data[0]?.Document_preferences_id || staticPreferences.Document_preferences_id,
        Benefits_going_paperless: preferences?.data[0]?.Benefits_going_paperless || staticPreferences.Benefits_going_paperless,
        settings: [
          {
            "I agree to sending, and receiving documents electronically form HomVill, Inc.. with includes HomVill.com": newToggle1,
            "I agree to sending, and receiving documents electronically form HomVill Closing Services.": newToggle2,
          },
        ],
      }).unwrap();
      if (toggle === 1) setToggle1(newToggle1);
      if (toggle === 2) setToggle2(newToggle2);
    } catch (err) {
      console.error("Failed to update preferences:", err);
    } finally {
      setUpdatingToggle(null); // Clear updating state
    }
  };

  // Handle Accept All / Reject All
  const handleAcceptAll = async () => {
    setUpdatingToggle("accept"); // Set for Accept All button
    try {
      await updateDocumentPreferences({
        Document_preferences_id: preferences?.data[0]?.Document_preferences_id || staticPreferences.Document_preferences_id,
        Benefits_going_paperless: preferences?.data[0]?.Benefits_going_paperless || staticPreferences.Benefits_going_paperless,
        settings: [
          {
            "I agree to sending, and receiving documents electronically form HomVill, Inc.. with includes HomVill.com": true,
            "I agree to sending, and receiving documents electronically form HomVill Closing Services.": true,
          },
        ],
      }).unwrap();
      setToggle1(true);
      setToggle2(true);
      setShowModal2(false);
    } catch (err) {
      console.error("Failed to accept all:", err);
    } finally {
      setUpdatingToggle(null); // Clear updating state
    }
  };

  const handleRejectAll = async () => {
    setUpdatingToggle("reject"); // Set for Reject All button
    try {
      await updateDocumentPreferences({
        Document_preferences_id: preferences?.data[0]?.Document_preferences_id || staticPreferences.Document_preferences_id,
        Benefits_going_paperless: preferences?.data[0]?.Benefits_going_paperless || staticPreferences.Benefits_going_paperless,
        settings: [
          {
            "I agree to sending, and receiving documents electronically form HomVill, Inc.. with includes HomVill.com": false,
            "I agree to sending, and receiving documents electronically form HomVill Closing Services.": false,
          },
        ],
      }).unwrap();
      setToggle1(false);
      setToggle2(false);
    } catch (err) {
      console.error("Failed to reject all:", err);
    } finally {
      setUpdatingToggle(null); // Clear updating state
    }
  };

  const renderBenefits = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center py-8">
          <FaSpinner className="animate-spin text-[#8A1538] w-8 h-8" />
          <span className="ml-2 text-gray-600">Loading Document Preferences...</span>
        </div>
      );
    }
    if (isError) {
      return (
        <div className="text-center text-red-600 py-8">
          <p>Error loading preferences: {error?.data?.message || 'An error occurred'}</p>
          <p>Displaying fallback data.</p>
        </div>
      );
    }

    const benefits = preferences?.success && preferences.data?.length > 0
      ? preferences.data[0].Benefits_going_paperless
      : staticPreferences.Benefits_going_paperless;

    return (
      <ul className="list-disc list-inside text-[#1D1D1D80] space-y-2 text-base sm:text-lg md:text-xl lg:text-[24px]">
        {benefits.split(', ').map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
        <li>
          For further details, please review our information on electronic signatures.
        </li>
      </ul>
    );
  };

  const renderModalContent = () => {
    const benefits = preferences?.success && preferences.data?.length > 0
      ? preferences.data[0].Benefits_going_paperless
      : staticPreferences.Benefits_going_paperless;

    return (
      <div className="h-[250px] sm:h-[300px] overflow-y-auto pr-2">
        <h3 className="font-semibold text-sm sm:text-[15px] mb-2">
          Benefits of Going Paperless
        </h3>
        <ul className="text-xs sm:text-sm text-gray-700 font-normal leading-relaxed space-y-2">
          {benefits.split(', ').map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    );
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
          Document Settings
        </h2>
        <p
          style={{ fontFamily: 'Poppins, sans-serif' }}
          className="mt-3 text-base sm:text-lg md:text-xl lg:text-[32px] font-medium"
        >
          Update and Manage Your Documents Easily!
        </p>
      </div>
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-24 mt-6 sm:mt-8 md:mt-10 p-4 sm:p-6 border border-[#e4bcc7] rounded-xl shadow bg-white space-y-6 mulish-font">
        <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-bold text-[#1D1D1D]">
          Document Preferences
        </h2>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-[25px] lg:text-[32px] font-bold text-[#1D1D1D] mb-2">
            Benefits of Going Paperless
          </h3>
          {renderBenefits()}

          <div className="mt-4 text-end">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#8A1538] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md text-base sm:text-lg md:text-xl lg:text-[24px] font-semibold"
            >
              Add Signature
            </button>
            {showModal && (
              <div
                style={{ fontFamily: 'Poppins, sans-serif' }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4"
              >
                <div className="bg-white w-full max-w-md sm:max-w-lg md:max-w-[500px] rounded-xl shadow-lg p-4 sm:p-6 relative">
                  <button
                    className="absolute top-2 sm:top-4 right-2 sm:right-4 text-black"
                    onClick={() => setShowModal(false)}
                  >
                    <IoClose size={16} />
                  </button>
                  <h2 className="text-base sm:text-lg md:text-[18px] font-bold text-[#1D1D1D] mb-4 text-start">
                    Add Your Signature
                  </h2>
                  <p className="text-xs sm:text-sm md:text-[14px] font-medium text-[#1D1D1D] mb-2 text-start">
                    Photo
                  </p>
                  <div className="border-2 border-dashed border-[#8A1538] rounded-md p-4 sm:p-8 flex flex-col items-center text-center text-[#8A1538] text-xs sm:text-sm mb-4 sm:mb-6">
                    <FaUpload className="text-xl sm:text-2xl mb-2" />
                    <p>Make your signature or drag & drop signature</p>
                  </div>
                  <div className="flex justify-center gap-2 sm:gap-4">
                    <button
                      onClick={() => setShowModal(false)}
                      className="px-4 sm:px-6 py-1 sm:py-2 border border-[#8A1538] text-[#8A1538] rounded-md bg-[#FCE9F0] text-xs sm:text-sm font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setShowModal(false)}
                      className="px-4 sm:px-6 py-1 sm:py-2 bg-[#8A1538] text-white rounded-md text-xs sm:text-sm font-semibold"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold text-[#1D1D1D] mb-2">
            Your Settings
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-[#1D1D1D80]">
                • I agree to sending, signing, and receiving documents electronically from
                HomVill, Inc., which includes HomVill.com.
              </p>
              <label className="inline-flex relative items-center cursor-pointer mt-2 sm:mt-0">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={toggle1}
                  onChange={() => handleToggleChange(1, !toggle1)}
                  disabled={isUpdating}
                />
                <div className="w-10 h-5 sm:w-11 sm:h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all duration-300" />
                <div className="absolute left-1 top-1 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full peer-checked:translate-x-6 sm:peer-checked:translate-x-full transition-transform duration-300" />
                {isUpdating && updatingToggle === 1 && <FaSpinner className="ml-2 animate-spin text-green-500 w-4 h-4" />}
              </label>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-[#1D1D1D80]">
                • I agree to sending, signing, and receiving documents electronically from
                HomVill Closing Services.
              </p>
              <label className="inline-flex relative items-center cursor-pointer mt-2 sm:mt-0">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={toggle2}
                  onChange={() => handleToggleChange(2, !toggle2)}
                  disabled={isUpdating}
                />
                <div className="w-10 h-5 sm:w-11 sm:h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all duration-300" />
                <div className="absolute left-1 top-1 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full peer-checked:translate-x-6 sm:peer-checked:translate-x-full transition-transform duration-300" />
                {isUpdating && updatingToggle === 2 && <FaSpinner className="ml-2 animate-spin text-green-500 w-4 h-4" />}
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 sm:gap-4">
          <button
            onClick={handleRejectAll}
            className="px-3 sm:px-5 py-1 sm:py-2 border border-[#8A1538] text-[#8A1538] rounded-md font-semibold text-base sm:text-lg md:text-xl lg:text-[24px] bg-[#FCE9F0]"
            disabled={isUpdating}
          >
            {isUpdating && updatingToggle === "reject" ? (
              <>
                <FaSpinner className="animate-spin mr-2 inline w-4 h-4" />
                Rejecting...
              </>
            ) : (
              'Reject All'
            )}
          </button>
          <button
            onClick={() => setShowModal2(true)}
            className="px-3 sm:px-5 py-1 sm:py-2 bg-[#8A1538] text-white rounded-md font-semibold text-base sm:text-lg md:text-xl lg:text-[24px]"
            disabled={isUpdating}
          >
            {isUpdating && updatingToggle === "accept" ? (
              <>
                <FaSpinner className="animate-spin mr-2 inline w-4 h-4" />
                Processing...
              </>
            ) : (
              'Accept All'
            )}
          </button>
          {showModal2 && (
            <div
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4"
            >
              <div className="bg-white w-full max-w-md sm:max-w-lg md:max-w-[550px] max-h-[90vh] rounded-xl shadow-lg p-4 sm:p-6 relative overflow-hidden">
                <button
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 text-black"
                  onClick={() => setShowModal2(false)}
                >
                  <IoClose size={16} />
                </button>
                <h2 className="text-base sm:text-lg md:text-[18px] font-bold text-[#1D1D1D] mb-4">
                  Go Easy With Paperless
                </h2>
                {renderModalContent()}
                <div className="mt-4 sm:mt-6 flex justify-center gap-2 sm:gap-4">
                  <button
                    onClick={() => setShowModal2(false)}
                    className="px-4 sm:px-6 py-1 sm:py-2 border border-[#8A1538] text-[#8A1538] rounded-md bg-[#FCE9F0] text-xs sm:text-sm font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 sm:px-6 py-1 sm:py-2 bg-[#8A1538] text-white rounded-md text-xs sm:text-sm font-semibold"
                    disabled={isUpdating}
                  >
                    {isUpdating && updatingToggle === "accept" ? (
                      <>
                        <FaSpinner className="animate-spin mr-2 inline w-4 h-4" />
                        Submitting...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}