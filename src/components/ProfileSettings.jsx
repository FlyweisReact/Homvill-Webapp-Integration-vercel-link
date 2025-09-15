// import React, { useState } from 'react'
// import Navbar2 from './Navbar2'
// import bgImage from './assets/rectbg.svg'
// import profile from './assets/prof.svg'
// import profs from './assets/profs.jpg'
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useAuth } from "./Authprovider/AuthContext";
// import { useNavigate, Link } from 'react-router-dom';
// import Footer from './Footer'
// const ProfileSettings = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isModalOpen2, setIsModalOpen2] = useState(false);
//  const [isModalOpen3, setIsModalOpen3] = useState(false);
//  const [isModalOpen4, setIsModalOpen4] = useState(false);
//   const [isModalOpen5, setIsModalOpen5] = useState(false);
//   const [newPasswordVisible, setNewPasswordVisible] = useState(false);
//   const [rePasswordVisible, setRePasswordVisible] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);
//      const navigate = useNavigate();
//     const [isOpen2, setIsOpen2] = useState(false);
//     const [isOpen3, setIsOpen3] = useState(false);
//       const [isOpen4, setIsOpen4] = useState(false);
//       const [isOpen5, setIsOpen5] = useState(false);
//   const [selectedReason, setSelectedReason] = useState('');
//   const [comment, setComment] = useState('');
//       const { setIsLoggedIn } = useAuth();
  
//  const handleLogout = () => {
//        setIsOpen5(false);
//        navigate('/')
//         setIsLoggedIn(false); // update auth context
//     };
//   const reasons = [
//     "Too many emails.",
//     "I have a duplicate account.",
//     "I am not getting any value.",
//     "I have a privacy concern.",
//     "Other",
//   ];
//   const [selectedOption, setSelectedOption] = useState('every');
//   // ✅ Default profile image
//   const defaultImage = profs; // Replace with your actual image path
//   const [selectedImage, setSelectedImage] = useState(defaultImage);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//     }
//   };
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
//                     Recent Activity
//                 </h2>
//                 <p
//                     style={{ fontFamily: 'Poppins' }}
//                     className="mt-5 text-xl sm:text-2xl lg:text-[32px] font-medium"
//                 >
//                     Stay Updated with Your Latest Activity!
//                 </p>
//             </div>
//             <div className="max-w-7xl mulish-font mx-auto p-4 space-y-6 font-[Poppins]">
//                 {/* Personal Info */}
//                 <div className="bg-white shadow-md rounded-xl p-6 border border-pink-100">
//                     <h2 className="text-[40px] font-bold text-[#1D1D1D] mb-4">Personal Info</h2>

//                     <div className="flex justify-between items-center py-3">
//                         <div>
//                             <p className="text-[32px] text-[#1D1D1D]">Name</p>
//                             <p className="text-[24px] text-[#1D1D1D80] font-medium">Your first and last given name. Updates are reflected across all Hormvill account.</p>
//                         </div>
//                         <div className="text-right">
//                             <p className="text-[#870A28] text-[32px] font-bold">Jaydon Donin</p>
//                             <button onClick={() => setIsModalOpen(true)} className="text-[24px] text-white bg-[#870A28] px-4 py-1 rounded mt-1">Edit</button>
//                             {isModalOpen && (
//                                 <div style={{fontFamily:'Poppins'}} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//                                     <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
//                                         {/* Close Button */}
//                                         <button
//                                             onClick={() => setIsModalOpen(false)}
//                                             className="absolute top-3 right-4 text-gray-500 text-xl font-semibold"
//                                         >
//                                             &times;
//                                         </button>

//                                         <h2 className="text-lg font-semibold text-start mb-5">Change Your Full Name</h2>

//                                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                             <div>
//                                                 <label className="block text-sm text-start font-medium mb-1">First Name</label>
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Enter Your First Name"
//                                                     className="w-full border border-pink-300 font-normal px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400"
//                                                 />
//                                             </div>
//                                             <div>
//                                                 <label className="block text-sm text-start font-medium mb-1">Last Name</label>
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Enter Your Last Name"
//                                                     className="w-full border border-pink-300 font-normal px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400"
//                                                 />
//                                             </div>
//                                         </div>

//                                         <div className="mt-6 flex justify-center gap-4">
//                                             <button
//                                                 onClick={() => setIsModalOpen(false)}
//                                                 className="bg-pink-100 text-[#870A28] font-medium px-5 py-2 rounded"
//                                             >
//                                                 Cancel
//                                             </button>
//                                             <button onClick={() => setIsModalOpen(false)}
//                                                 className="bg-[#870A28] text-white font-medium px-5 py-2 rounded"
//                                             >
//                                                 Save
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>

//                     <div className="flex justify-between items-center  py-3">
//                         <div>
//                             <p className="text-[32px] text-[#1D1D1D]">User Name</p>
//                             <p className="text-[24px] text-[#1D1D1D80] font-medium">Your user given name. Updates are reflected across all Hormvill account.</p>
//                         </div>
//                         <div className="text-right">
//                             <p className="text-[#870A28] text-[32px] font-bold">jaydondonin123</p>
//                             <button onClick={() => setIsModalOpen2(true)} className="text-[24px] text-white bg-[#870A28] px-4 py-1 rounded mt-1">Edit</button>
//                             {isModalOpen2 && (
//                                 <div style={{fontFamily:'Poppins'}} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//                                     <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
//                                         {/* Close Button */}
//                                         <button
//                                             onClick={() => setIsModalOpen2(false)}
//                                             className="absolute top-3 right-4 text-gray-500 text-xl font-semibold"
//                                         >
//                                             &times;
//                                         </button>

//                                         <h2 className="text-lg font-semibold text-start mb-5">Change Your Full Name</h2>

//                                         <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
//                                             <div>
//                                                 <label className="block text-sm text-start font-medium mb-1">New User Name</label>
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Enter Your User Name"
//                                                     className="w-full border border-pink-300 font-normal px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400"
//                                                 />
//                                             </div>
                                            
//                                         </div>

//                                         <div className="mt-6 flex justify-center gap-4">
//                                             <button
//                                                 onClick={() => setIsModalOpen2(false)}
//                                                 className="bg-pink-100 text-[#870A28] font-medium px-5 py-2 rounded"
//                                             >
//                                                 Cancel
//                                             </button>
//                                             <button onClick={() => setIsModalOpen2(false)}
//                                                 className="bg-[#870A28] text-white font-medium px-5 py-2 rounded"
//                                             >
//                                                 Save
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>

//                     <div className="flex justify-between items-center pt-3">
//                         <div>
//                             <p className="text-[32px] text-[#1D1D1D]">Photo</p>
//                             <p className="text-[24px] text-[#1D1D1D80]  font-medium">Customize your profile picture with a personal touch.</p>
//                         </div>
//                         <div className="text-right">
//                             <img
//                                 src={profile} // Replace with your image path
//                                 alt="profile"
//                                 className="w-10 h-10  mx-auto mb-1"
//                             />
//                             <button  onClick={() => setIsModalOpen3(true)} className="text-[24px] text-white bg-[#870A28] px-4 py-1 rounded">Edit</button>
//                              {isModalOpen3 && (
//         <div style={{fontFamily:'Poppins'}} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setIsModalOpen3(false)}
//               className="absolute top-3 right-4 text-gray-500 text-xl font-semibold"
//             >
//               &times;
//             </button>

//             <h2 className="text-lg text-start font-semibold mb-4">Change Your Profile Photos</h2>

//             {/* Upload Area */}
//             <div className="mb-6">
//               <label className="block text-sm text-start font-medium mb-1">Photo</label>
//               <label
//                 htmlFor="file-upload"
//                 className="w-full h-40 border border-dashed border-pink-300 flex justify-center items-center bg-gray-100 cursor-pointer rounded-md overflow-hidden"
//               >
//                 <img
//                   src={selectedImage}
//                   alt="Preview"
//                   className="object-cover w-full h-full"
//                 />
//                 <input
//                   id="file-upload"
//                   type="file"
//                   className="hidden"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                 />
//               </label>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => {
//                   setSelectedImage(defaultImage); // Reset to default on cancel
//                   setIsModalOpen3(false);
//                 }}
//                 className="bg-pink-100 text-[#870A28] font-medium px-5 py-2 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => {
//                   // Handle upload logic here (API call, etc.)
                 
//                   setIsModalOpen3(false);
//                 }}
//                 className="bg-[#870A28] text-white font-medium px-5 py-2 rounded"
//               >
//                 Upload
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Sign in & Security */}
//                 <div className="bg-white shadow-md rounded-xl p-6 border border-pink-100">
//                     <h2 className="text-[40px] font-bold text-[#1D1D1D] mb-4">Sign in & Security</h2>

//                     <div className="flex justify-between items-center py-3">
//                         <div>
//                             <p className="text-[32px] text-[#1D1D1D]">Email</p>
//                             <p className="text-[24px] text-[#1D1D1D80] font-medium">The registered email address linked to your account.</p>
//                         </div>
//                         <div className="text-right">
//                             <p className="text-[#870A28] text-[32px] font-bold">jaydondonin@gmail.com</p>
//                             <button onClick={() => setIsModalOpen4(true)} className="text-[24px] text-white bg-[#870A28] px-4 py-1 rounded mt-1">Edit</button>
//                              {isModalOpen4 && (
//                                 <div style={{fontFamily:'Poppins'}} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//                                     <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
//                                         {/* Close Button */}
//                                         <button
//                                             onClick={() => setIsModalOpen4(false)}
//                                             className="absolute top-3 right-4 text-gray-500 text-xl font-semibold"
//                                         >
//                                             &times;
//                                         </button>

//                                         <h2 className="text-lg font-semibold text-start mb-5">Change Your Email</h2>

//                                         <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
//                                             <div>
//                                                 <label className="block text-sm text-start font-medium mb-1">New Email</label>
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Enter Your User Name"
//                                                     className="w-full border border-pink-300 font-normal px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400"
//                                                 />
//                                             </div>
//                                             <div>
//                                                 <label className="block text-sm text-start font-medium mb-1">Enter Password</label>
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Enter Your current password"
//                                                     className="w-full border border-pink-300 font-normal px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400"
//                                                 />
//                                             </div>
                                            
//                                         </div>

//                                         <div className="mt-6 flex justify-center gap-4">
                                          
//                                             <button onClick={() => setIsModalOpen4(false)}
//                                                 className="bg-[#870A28] text-white font-medium px-5 py-2 rounded"
//                                             >
//                                                 Save
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}

//                         </div>
//                     </div>

//                     <div className="flex justify-between items-center  py-3">
//                         <div>
//                             <p className="text-[32px] text-[#1D1D1D]">Password</p>
//                             <p className="text-[24px] text-[#1D1D1D80] font-medium">Create a secure and unique password to safeguard your account.</p>
//                         </div>
//                         <div className="text-right">
//                             <button onClick={() => setIsModalOpen5(true)} className="text-[24px] text-white bg-[#870A28] px-4 py-1 rounded">Change Password</button>
//                              {isModalOpen5 && (
//         <div style={{fontFamily:'Poppins'}} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
//             {/* Close */}
//             <button
//               onClick={() => setIsModalOpen5(false)}
//               className="absolute top-3 right-4 text-gray-500 text-xl font-semibold"
//             >
//               &times;
//             </button>

//             <h2 className="text-lg text-start font-semibold mb-5">Change Password</h2>

//             {/* New Password */}
//             <div className="mb-4 relative">
//               <label className="block text-sm text-start font-medium mb-1">New Password</label>
//               <input
//                 type={newPasswordVisible ? 'text' : 'password'}
//                 placeholder="Enter your password here"
//                 className="w-full border font-normal border-pink-300 px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400"
//               />
//               <span
//                 className="absolute right-4 top-[42px] text-gray-500 cursor-pointer"
//                 onClick={() => setNewPasswordVisible(!newPasswordVisible)}
//               >
//                 {newPasswordVisible ? <FaEyeSlash /> : <FaEye />}
//               </span>
//               <p className="text-xs text-gray-400 mt-1">e.g. P@ssw0rd2024</p>
//             </div>

//             {/* Re-enter Password */}
//             <div className="mb-4 relative">
//               <label className="block text-sm text-start font-medium mb-1">Re-enter Password</label>
//               <input
//                 type={rePasswordVisible ? 'text' : 'password'}
//                 placeholder="Enter your password here"
//                 className="w-full border font-normal border-pink-300 px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400"
//               />
//               <span
//                 className="absolute right-4 top-[42px] text-gray-500 cursor-pointer"
//                 onClick={() => setRePasswordVisible(!rePasswordVisible)}
//               >
//                 {rePasswordVisible ? <FaEyeSlash /> : <FaEye />}
//               </span>
//               <p className="text-xs text-gray-400 mt-1">e.g. P@ssw0rd2024</p>
//             </div>

//             {/* Password Rules */}
//             <div className="text-sm text-start text-gray-600 leading-relaxed mb-4">
//               <p><strong>Length:</strong> Minimum 8 characters, maximum 20 characters.</p>
//               <p className="mt-1">
//                 <strong>Complexity:</strong> Must include at least one of each:
//                 <br />
//                 &bull; Uppercase Letter (A–Z) &nbsp;&bull; Number (0–9)
//                 <br />
//                 &bull; Special Character (!@#$%^&amp;*()_+ etc.)
//                 &nbsp;&bull; Lowercase Letter (a–z)
//               </p>
//             </div>

//             {/* Save Button */}
//             <div className="flex justify-center">
//               <button
//                 onClick={() => {
                 
//                   setIsModalOpen5(false);
//                 }}
//                 className="bg-[#870A28] text-white font-medium px-6 py-2 rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//                         </div>
//                     </div>

//                     <div className="flex justify-between items-center pt-3">
//                         <div>
//                             <p className="text-[32px] text-[#1D1D1D]">Two-Step Verification</p>
//                             <p className="text-[24px] text-[#1D1D1D80] font-medium">Enhance your account security with two-step verification.</p>
//                         </div>
//                         <div className="text-right">
//                             <button      onClick={() => setIsOpen(true)} className="text-[24px] text-white bg-[#870A28] px-4 py-1 rounded">Set Up</button>
//                              {isOpen && (
//         <div style={{fontFamily:'Poppins'}} className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
//           <div className="bg-white w-full max-w-lg rounded-lg p-6 relative shadow-lg">
//             {/* Close Button */}
//             <button
//               className="absolute top-3 right-4 text-gray-600 text-xl"
//               onClick={() => setIsOpen(false)}
//             >
//               &times;
//             </button>

//             {/* Title */}
//             <h2 className="text-lg text-start font-semibold mb-2">Choose When To Confirm</h2>
//             <p className="text-sm text-center font-normal text-gray-600 mb-5">
//               Select when a verification code is required before signing in. You’ll enter your phone number next.
//             </p>

//             {/* Radio Options */}
//             <div className="space-y-4 mb-6">
//               <label className="flex items-center text-start gap-3 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="confirm"
//                   value="every"
//                   checked={selectedOption === 'every'}
//                   onChange={() => setSelectedOption('every')}
//                   className="mt-1 accent-[#870A28]"
//                 />
//                 <div>
//                   <p className="text-sm font-medium text-start">Every time you sign in</p>
//                   <p className="text-sm text-gray-600 font-normal">Enter a code each time you access your account.</p>
//                 </div>
//               </label>

//               <label className="flex items-start gap-3 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="confirm"
//                   value="secure"
//                   checked={selectedOption === 'secure'}
//                   onChange={() => setSelectedOption('secure')}
//                   className="mt-1 accent-[#870A28]"
//                 />
//                 <div>
//                   <p className="text-sm text-start font-medium">Only for secure information</p>
//                   <p className="text-sm text-gray-600 font-normal">Enter a code only when accessing secure information.</p>
//                 </div>
//               </label>
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="bg-pink-100 text-[#870A28] px-5 py-2 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => {
                 
//                   setIsOpen(false);
//                   setIsOpen2(true);
//                 }}
//                 className="bg-[#870A28] text-white px-6 py-2 rounded"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {isOpen2 && (
//                                 <div style={{fontFamily:'Poppins'}} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//                                     <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
//                                         {/* Close Button */}
//                                         <button
//                                             onClick={() => setIsOpen2(false)}
//                                             className="absolute top-3 right-4 text-gray-500 text-xl font-semibold"
//                                         >
//                                             &times;
//                                         </button>

//                                         <h2 className="text-lg font-semibold text-start mb-5">Add a Phone Number</h2>
// <p className="text-sm text-start font-normal text-gray-600 mb-5">
//               Enter a phone number for two step verification.A confirmation code send via text.
//             </p>
//                                         <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
//                                             <div>
//                                                 <label className="block text-sm text-start font-medium mb-1"> Phone Number</label>
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Enter a Phone Number"
//                                                     className="w-full border border-pink-300 font-normal px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400"
//                                                 />
//                                             </div>
                                            
//                                         </div>

//                                         <div className="mt-6 flex justify-center gap-4">
//                                             <button
//                                                 onClick={() => {
                 
//                   setIsOpen(true);
//                   setIsOpen2(false);
//                 }}
//                                                 className="bg-pink-100 text-[#870A28] font-medium px-5 py-2 rounded"
//                                             >
//                                                 Back
//                                             </button>
//                                             <button onClick={() => setIsOpen3(true)}
//                                                 className="bg-[#870A28] text-white font-medium px-5 py-2 rounded"
//                                             >
//                                                 Get OTP
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                             {isOpen3 && (
//         <div style={{fontFamily:'Poppins'}} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setIsOpen3(false)}
//               className="absolute top-3 right-4 text-gray-500 text-xl font-semibold"
//             >
//               &times;
//             </button>

//             {/* Title */}
//             <h2 className="text-lg text-start font-semibold mb-2">Add A Phone Number</h2>
//             <p className="text-sm font-normal text-start text-gray-600 mb-5">
//               Enter a phone number for two-step verification. A confirmation code will be sent via text.
//             </p>

//             {/* Label */}
//             <label className="block text-sm text-start font-medium mb-2">Enter Your OTP</label>

//             {/* OTP Input Boxes */}
//             <div className="flex justify-between mb-6">
//               {Array.from({ length: 6 }).map((_, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   maxLength={1}
//                   className="w-12 h-12 border border-[#870A28] text-center rounded text-lg focus:outline-none"
//                 />
//               ))}
//             </div>

//             {/* Buttons */}
//            <div className="flex justify-center gap-4">
//   <button
//     type="button"
//     onClick={() => {
//       setIsOpen2(true);  // Go back to modal 2
//       setIsOpen3(false); // Close modal 3
//     }}
//     className="bg-pink-100 text-[#870A28] font-medium px-6 py-2 rounded"
//   >
//     Back
//   </button>

//   <button
//     type="button"
//    onClick={() => setIsOpen3(false)} // Just close current modal
//     className="bg-[#870A28] text-white font-medium px-6 py-2 rounded"
//   >
//     Save
//   </button>
// </div>

//           </div>
//         </div>
//       )}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Manage Account */}
//                 <div  className="bg-white shadow-md rounded-xl p-6 border border-pink-100">
//                     <h2 className="text-[40px] font-bold text-[#1D1D1D] mb-4">Manage account</h2>

//                     <div className="flex justify-between items-center py-3">
//                         <div>
//                             <p className="text-[32px] text-[#1D1D1D]">Deactivate my account</p>
//                             <p className="text-[24px] text-[#1D1D1D80] font-medium">Deactivating your account will temporarily disable access while retaining<br /> your information. You can reactivate it at any time to regain access.</p>
//                         </div>
//                         <div className="text-right">
//                             <button         onClick={() => setIsOpen4(true)}
//  className="text-[20px] text-white bg-[#870A28] px-2 py-2 rounded">Deactivate account</button>
//  {isOpen4 && (
//         <div style={{fontFamily:'Poppins'}} className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg w-full max-w-lg p-6 relative shadow-lg">
//             {/* Close */}
//             <button
//               className="absolute top-3 right-4 text-gray-600 text-xl"
//               onClick={() => setIsOpen4(false)}
//             >
//               &times;
//             </button>

//             {/* Title */}
//             <h2 className="text-lg font-semibold mb-4 text-start">Deactivate Account</h2>

//             {/* Points */}
//             <ul className="text-sm text-start text-black font-normal space-y-3 mb-6 list-disc pl-4">
//               <li><strong>Temporary Suspension –</strong> Your account will be disabled, but your data will be retained.</li>
//               <li><strong>No Access –</strong> You won’t be able to sign in until you reactivate your account.</li>
//               <li><strong>Reactivation Anytime –</strong> Simply log back in to restore your account.</li>
//               <li><strong>No Public Visibility –</strong> Your profile and content may no longer be visible to others.</li>
//               <li><strong>Subscription Impact –</strong> Any active subscriptions or services may be paused or canceled.</li>
//               <li><strong>Security & Data –</strong> Your personal information remains stored as per platform policies.</li>
//             </ul>

//             {/* Buttons */}
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => setIsOpen4(false)}
//                 className="bg-pink-100 text-[#870A28] font-medium px-6 py-2 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => {
//                   setIsOpen5(true)
//                   setIsOpen4(false);
//                 }}
//                 className="bg-[#870A28] text-white font-medium px-6 py-2 rounded"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {isOpen5 && (
//         <div style={{fontFamily:'Poppins'}} className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg w-full max-w-lg p-6 relative shadow-lg">
//             {/* Close Button */}
//             <button
//               className="absolute top-3 right-4 text-gray-600 text-xl"
//               onClick={() => setIsOpen5(false)}
//             >
//               &times;
//             </button>

//             {/* Title */}
//             <h2 className="text-lg text-start font-semibold mb-5">Deactivate Account</h2>

//             {/* Reason Options */}
//             <div className="space-y-4 text-start mb-6">
//               {reasons.map((reason, index) => (
//                 <label key={index} className="flex font-normal items-start gap-3 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="reason"
//                     value={reason}
//                     checked={selectedReason === reason}
//                     onChange={() => setSelectedReason(reason)}
//                     className="mt-1 accent-[#870A28]"
//                   />
//                   <span className="text-sm">{reason}</span>
//                 </label>
//               ))}
//             </div>

//             {/* Comment Box */}
//             <div className="mb-6 text-start">
//               <label className="text-sm font-medium block mb-1">
//                 Is there anything else we should know?
//               </label>
//               <textarea
//                 placeholder="Enter your comment..."
//                 rows={3}
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 className="w-full border border-pink-300 font-normal rounded p-3 focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm"
//               ></textarea>
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="bg-pink-100 text-[#870A28] font-medium px-6 py-2 rounded"
//               >
//                 Cancel
//               </button>
//               <button
                
//                   onClick={handleLogout}

//                 className="bg-[#870A28] text-white font-medium px-6 py-2 rounded"
//               >
//                 Deactivate my account
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//                         </div>
//                     </div>

//                     <div className="flex justify-between items-center pt-3">
//                         <div>
//                             <p className="text-[32px] text-[#1D1D1D]">Privacy & Cookies</p>
//                             <p className="text-[24px] text-[#1D1D1D80] font-medium">Resources to access and manage your personal data efficiently.</p>
//                         </div>
//                         <div className="text-right">
//                             <button  onClick={() => navigate('/privacy')} className="text-[24px] text-white bg-[#870A28] px-2 py-1 rounded">Go to Privacy Portal</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer/>
//         </>
//     )
// }

// export default ProfileSettings
import React, { useState } from 'react'
import Navbar2 from './Navbar2'
import bgImage from './assets/rectbg.svg'
import profile from './assets/prof.svg'
import profs from './assets/profs.jpg'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from "./Authprovider/AuthContext";
import { useNavigate, Link } from 'react-router-dom';
import Footer from './Footer'

const ProfileSettings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isModalOpen5, setIsModalOpen5] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [rePasswordVisible, setRePasswordVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [selectedReason, setSelectedReason] = useState('');
    const [comment, setComment] = useState('');
    const { setIsLoggedIn } = useAuth();

    const handleLogout = () => {
        setIsOpen5(false);
        navigate('/');
        setIsLoggedIn(false);
    };

    const reasons = [
        "Too many emails.",
        "I have a duplicate account.",
        "I am not getting any value.",
        "I have a privacy concern.",
        "Other",
    ];

    const [selectedOption, setSelectedOption] = useState('every');
    const defaultImage = profs;
    const [selectedImage, setSelectedImage] = useState(defaultImage);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
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
                    Recent Activity
                </h2>
                <p
                    style={{ fontFamily: 'Poppins' }}
                    className="mt-3 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium"
                >
                    Stay Updated with Your Latest Activity!
                </p>
            </div>
            <div className=" mulish-font mx-12 p-4 sm:p-6 space-y-6 font-[Poppins]">
                {/* Personal Info */}
                <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 border border-pink-100">
                    <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#1D1D1D] mb-4">Personal Info</h2>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 gap-4">
                        <div>
                            <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">Name</p>
                            <p className="text-base sm:text-lg lg:pt-4 md:text-[24px] text-[#1D1D1D80] font-medium">Your first and last given name. Updates are reflected across all Hormvill account.</p>
                        </div>
                        <div className="text-left sm:text-right w-full sm:w-auto">
                            <p className="text-[#870A28] text-xl sm:text-2xl md:text-[32px] font-bold">Jaydon Donin</p>
                            <button onClick={() => setIsModalOpen(true)} className="text-base sm:text-lg md:text-[24px] text-white bg-[#870A28] px-3 sm:px-4 py-1 rounded mt-1 w-full sm:w-auto">Edit</button>
                            {isModalOpen && (
                                <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                    <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative">
                                        <button
                                            onClick={() => setIsModalOpen(false)}
                                            className="absolute top-3 right-4 text-gray-500 text-lg sm:text-xl font-semibold"
                                        >
                                            ×
                                        </button>
                                        <h2 className="text-base sm:text-lg font-semibold text-start mb-4 sm:mb-5">Change Your Full Name</h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs sm:text-sm text-start font-medium mb-1">First Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Your First Name"
                                                    className="w-full border border-pink-300 font-normal px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs sm:text-sm text-start font-medium mb-1">Last Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Your Last Name"
                                                    className="w-full border border-pink-300 font-normal px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4 sm:mt-6 flex justify-center gap-4">
                                            <button
                                                onClick={() => setIsModalOpen(false)}
                                                className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={() => setIsModalOpen(false)}
                                                className="bg-[#870A28] text-white font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 gap-4">
                        <div>
                            <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">User Name</p>
                            <p className="text-base lg:pt-4 sm:text-lg md:text-[24px] text-[#1D1D1D80] font-medium">Your user given name. Updates are reflected across all Hormvill account.</p>
                        </div>
                        <div className="text-left sm:text-right w-full sm:w-auto">
                            <p className="text-[#870A28] text-xl sm:text-2xl md:text-[32px] font-bold">jaydondonin123</p>
                            <button onClick={() => setIsModalOpen2(true)} className="text-base sm:text-lg md:text-[24px] text-white bg-[#870A28] px-3 sm:px-4 py-1 rounded mt-1 w-full sm:w-auto">Edit</button>
                            {isModalOpen2 && (
                                <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                    <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative">
                                        <button
                                            onClick={() => setIsModalOpen2(false)}
                                            className="absolute top-3 right-4 text-gray-500 text-lg sm:text-xl font-semibold"
                                        >
                                            ×
                                        </button>
                                        <h2 className="text-base sm:text-lg font-semibold text-start mb-4 sm:mb-5">Change Your User Name</h2>
                                        <div className="grid grid-cols-1 gap-4">
                                            <div>
                                                <label className="block text-xs sm:text-sm text-start font-medium mb-1">New User Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Your User Name"
                                                    className="w-full border border-pink-300 font-normal px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4 sm:mt-6 flex justify-center gap-4">
                                            <button
                                                onClick={() => setIsModalOpen2(false)}
                                                className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={() => setIsModalOpen2(false)}
                                                className="bg-[#870A28] text-white font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 gap-4">
                        <div>
                            <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">Photo</p>
                            <p className="text-base lg:pt-4 sm:text-lg md:text-[24px] text-[#1D1D1D80] font-medium">Customize your profile picture with a personal touch.</p>
                        </div>
                        <div className="text-left sm:text-right w-full sm:w-auto">
                            <img
                                src={profile}
                                alt="profile"
                                className="w-8 h-8 sm:w-10 sm:h-10 mx-auto sm:mx-0 mb-1"
                            />
                            <button onClick={() => setIsModalOpen3(true)} className="text-base sm:text-lg md:text-[24px] text-white bg-[#870A28] px-3 sm:px-4 py-1 rounded w-full sm:w-auto">Edit</button>
                            {isModalOpen3 && (
                                <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                    <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative">
                                        <button
                                            onClick={() => setIsModalOpen3(false)}
                                            className="absolute top-3 right-4 text-gray-500 text-lg sm:text-xl font-semibold"
                                        >
                                            ×
                                        </button>
                                        <h2 className="text-base sm:text-lg text-start font-semibold mb-4">Change Your Profile Photo</h2>
                                        <div className="mb-4 sm:mb-6">
                                            <label className="block text-xs sm:text-sm text-start font-medium mb-1">Photo</label>
                                            <label
                                                htmlFor="file-upload"
                                                className="w-full h-32 sm:h-40 border border-dashed border-pink-300 flex justify-center items-center bg-gray-100 cursor-pointer rounded-md overflow-hidden"
                                            >
                                                <img
                                                    src={selectedImage}
                                                    alt="Preview"
                                                    className="object-cover w-full h-full"
                                                />
                                                <input
                                                    id="file-upload"
                                                    type="file"
                                                    className="hidden"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="flex justify-center gap-4">
                                            <button
                                                onClick={() => {
                                                    setSelectedImage(defaultImage);
                                                    setIsModalOpen3(false);
                                                }}
                                                className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={() => setIsModalOpen3(false)}
                                                className="bg-[#870A28] text-white font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                            >
                                                Upload
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Sign in & Security */}
                <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 border border-pink-100">
                    <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#1D1D1D] mb-4">Sign in & Security</h2>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 gap-4">
                        <div>
                            <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">Email</p>
                            <p className="text-base lg:pt-4 sm:text-lg md:text-[24px] text-[#1D1D1D80] font-medium">The registered email address linked to your account.</p>
                        </div>
                        <div className="text-left sm:text-right w-full sm:w-auto">
                            <p className="text-[#870A28] text-xl sm:text-2xl md:text-[32px] font-bold break-all">jaydondonin@gmail.com</p>
                            <button onClick={() => setIsModalOpen4(true)} className="text-base sm:text-lg md:text-[24px] text-white bg-[#870A28] px-3 sm:px-4 py-1 rounded mt-1 w-full sm:w-auto">Edit</button>
                            {isModalOpen4 && (
                                <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                    <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative">
                                        <button
                                            onClick={() => setIsModalOpen4(false)}
                                            className="absolute top-3 right-4 text-gray-500 text-lg sm:text-xl font-semibold"
                                        >
                                            ×
                                        </button>
                                        <h2 className="text-base sm:text-lg font-semibold text-start mb-4 sm:mb-5">Change Your Email</h2>
                                        <div className="grid grid-cols-1 gap-4">
                                            <div>
                                                <label className="block text-xs sm:text-sm text-start font-medium mb-1">New Email</label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter Your Email"
                                                    className="w-full border border-pink-300 font-normal px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs sm:text-sm text-start font-medium mb-1">Enter Password</label>
                                                <input
                                                    type="password"
                                                    placeholder="Enter Your current password"
                                                    className="w-full border border-pink-300 font-normal px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4 sm:mt-6 flex justify-center gap-4">
                                            <button
                                                onClick={() => setIsModalOpen4(false)}
                                                className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={() => setIsModalOpen4(false)}
                                                className="bg-[#870A28] text-white font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 gap-4">
                        <div>
                            <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">Password</p>
                            <p className="text-base lg:pt-4 sm:text-lg md:text-[24px] text-[#1D1D1D80] font-medium">Create a secure and unique password to safeguard your account.</p>
                        </div>
                        <div className="text-left sm:text-right w-full sm:w-auto">
                            <button onClick={() => setIsModalOpen5(true)} className="text-base sm:text-lg md:text-[24px] text-white bg-[#870A28] px-3 sm:px-4 py-1 rounded w-full sm:w-auto">Change Password</button>
                            {isModalOpen5 && (
                                <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                    <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative">
                                        <button
                                            onClick={() => setIsModalOpen5(false)}
                                            className="absolute top-3 right-4 text-gray-500 text-lg sm:text-xl font-semibold"
                                        >
                                            ×
                                        </button>
                                        <h2 className="text-base sm:text-lg text-start font-semibold mb-4 sm:mb-5">Change Password</h2>
                                        <div className="mb-4">
                                            <label className="block text-xs sm:text-sm text-start font-medium mb-1">New Password</label>
                                            <div className="relative">
                                                <input
                                                    type={newPasswordVisible ? 'text' : 'password'}
                                                    placeholder="Enter your password here"
                                                    className="w-full border font-normal border-pink-300 px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                />
                                                <span
                                                    className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                                    onClick={() => setNewPasswordVisible(!newPasswordVisible)}
                                                >
                                                    {newPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-400 mt-1">e.g. P@ssw0rd2024</p>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-xs sm:text-sm text-start font-medium mb-1">Re-enter Password</label>
                                            <div className="relative">
                                                <input
                                                    type={rePasswordVisible ? 'text' : 'password'}
                                                    placeholder="Enter your password here"
                                                    className="w-full border font-normal border-pink-300 px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                />
                                                <span
                                                    className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                                    onClick={() => setRePasswordVisible(!rePasswordVisible)}
                                                >
                                                    {rePasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-400 mt-1">e.g. P@ssw0rd2024</p>
                                        </div>
                                        <div className="text-xs sm:text-sm text-start text-gray-600 leading-relaxed mb-4">
                                            <p><strong>Length:</strong> Minimum 8 characters, maximum 20 characters.</p>
                                            <p className="mt-1">
                                                <strong>Complexity:</strong> Must include at least one of each:
                                                <br />
                                                • Uppercase Letter (A–Z) • Number (0–9)
                                                <br />
                                                • Special Character (!@#$%^&*()_+ etc.) • Lowercase Letter (a–z)
                                            </p>
                                        </div>
                                        <div className="flex justify-center">
                                            <button
                                                onClick={() => setIsModalOpen5(false)}
                                                className="bg-[#870A28] text-white font-medium px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 gap-4">
                        <div>
                            <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">Two-Step Verification</p>
                            <p className="text-base lg:pt-4 sm:text-lg md:text-[24px] text-[#1D1D1D80] font-medium">Enhance your account security with two-step verification.</p>
                        </div>
                        <div className="text-left sm:text-right w-full sm:w-auto">
                            <button onClick={() => setIsOpen(true)} className="text-base sm:text-lg md:text-[24px] text-white bg-[#870A28] px-3 sm:px-4 py-1 rounded w-full sm:w-auto">Set Up</button>
                            {isOpen && (
                                <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
                                    <div className="bg-white w-11/12 sm:w-full max-w-lg rounded-lg p-4 sm:p-6 relative shadow-lg">
                                        <button
                                            className="absolute top-3 right-4 text-gray-600 text-lg sm:text-xl"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            ×
                                        </button>
                                        <h2 className="text-base sm:text-lg text-start font-semibold mb-2 sm:mb-4">Choose When To Confirm</h2>
                                        <p className="text-xs sm:text-sm text-center font-normal text-gray-600 mb-4 sm:mb-5">
                                            Select when a verification code is required before signing in. You’ll enter your phone number next.
                                        </p>
                                        <div className="space-y-4 mb-4 sm:mb-6">
                                            <label className="flex items-center text-start gap-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="confirm"
                                                    value="every"
                                                    checked={selectedOption === 'every'}
                                                    onChange={() => setSelectedOption('every')}
                                                    className="mt-1 accent-[#870A28] w-4 h-4"
                                                />
                                                <div>
                                                    <p className="text-xs sm:text-sm font-medium text-start">Every time you sign in</p>
                                                    <p className="text-xs sm:text-sm text-gray-600 font-normal">Enter a code each time you access your account.</p>
                                                </div>
                                            </label>
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="confirm"
                                                    value="secure"
                                                    checked={selectedOption === 'secure'}
                                                    onChange={() => setSelectedOption('secure')}
                                                    className="mt-1 accent-[#870A28] w-4 h-4"
                                                />
                                                <div>
                                                    <p className="text-xs sm:text-sm font-medium text-start">Only for secure information</p>
                                                    <p className="text-xs sm:text-sm text-gray-600 font-normal">Enter a code only when accessing secure information.</p>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="flex justify-center gap-4">
                                            <button
                                                onClick={() => setIsOpen(false)}
                                                className="bg-pink-100 text-[#870A28] px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    setIsOpen2(true);
                                                }}
                                                className="bg-[#870A28] text-white px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {isOpen2 && (
                                <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                    <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative">
                                        <button
                                            onClick={() => setIsOpen2(false)}
                                            className="absolute top-3 right-4 text-gray-500 text-lg sm:text-xl font-semibold"
                                        >
                                            ×
                                        </button>
                                        <h2 className="text-base sm:text-lg font-semibold text-start mb-4 sm:mb-5">Add a Phone Number</h2>
                                        <p className="text-xs sm:text-sm text-start font-normal text-gray-600 mb-4 sm:mb-5">
                                            Enter a phone number for two step verification. A confirmation code send via text.
                                        </p>
                                        <div className="grid grid-cols-1 gap-4">
                                            <div>
                                                <label className="block text-xs sm:text-sm text-start font-medium mb-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    placeholder="Enter a Phone Number"
                                                    className="w-full border border-pink-300 font-normal px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4 sm:mt-6 flex justify-center gap-4">
                                            <button
                                                onClick={() => {
                                                    setIsOpen(true);
                                                    setIsOpen2(false);
                                                }}
                                                className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                            >
                                                Back
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsOpen2(false);
                                                    setIsOpen3(true);
                                                }}
                                                className="bg-[#870A28] text-white font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                            >
                                                Get OTP
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {isOpen3 && (
                                <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                    <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative">
                                        <button
                                            onClick={() => setIsOpen3(false)}
                                            className="absolute top-3 right-4 text-gray-500 text-lg sm:text-xl font-semibold"
                                        >
                                            ×
                                        </button>
                                        <h2 className="text-base sm:text-lg text-start font-semibold mb-2 sm:mb-4">Add A Phone Number</h2>
                                        <p className="text-xs sm:text-sm font-normal text-start text-gray-600 mb-4 sm:mb-5">
                                            Enter a phone number for two-step verification. A confirmation code will be sent via text.
                                        </p>
                                        <label className="block text-xs sm:text-sm text-start font-medium mb-2">Enter Your OTP</label>
                                        <div className="flex justify-between mb-4 sm:mb-6 gap-2">
                                            {Array.from({ length: 6 }).map((_, index) => (
                                                <input
                                                    key={index}
                                                    type="text"
                                                    maxLength={1}
                                                    className="w-10 h-10 sm:w-12 sm:h-12 border border-[#870A28] text-center rounded text-sm sm:text-lg focus:outline-none"
                                                />
                                            ))}
                                        </div>
                                        <div className="flex justify-center gap-4">
                                            <button
                                                onClick={() => {
                                                    setIsOpen2(true);
                                                    setIsOpen3(false);
                                                }}
                                                className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                                            >
                                                Back
                                            </button>
                                            <button
                                                onClick={() => setIsOpen3(false)}
                                                className="bg-[#870A28] text-white font-medium px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Manage Account */}
                <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 border border-pink-100">
                    <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#1D1D1D] mb-4">Manage account</h2>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 gap-4">
                        <div>
                            <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">Deactivate my account</p>
                            <p className="text-base lg:pt-4 sm:text-lg md:text-[24px] text-[#1D1D1D80] font-medium">Deactivating your account will temporarily disable access while retaining<br className='hidden lg:block'/> your information. You can reactivate it at any time to regain access.</p>
                        </div>
                        <div className="text-left sm:text-right w-full sm:w-auto">
                            <button onClick={() => setIsOpen4(true)} className="text-base sm:text-lg md:text-[20px] text-white bg-[#870A28] px-3 sm:px-4 py-1 sm:py-2 rounded w-full sm:w-auto">Deactivate account</button>
                            {isOpen4 && (
                                <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
                                    <div className="bg-white rounded-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative shadow-lg">
                                        <button
                                            className="absolute top-3 right-4 text-gray-600 text-lg sm:text-xl"
                                            onClick={() => setIsOpen4(false)}
                                        >
                                            ×
                                        </button>
                                        <h2 className="text-base sm:text-lg font-semibold mb-4 text-start">Deactivate Account</h2>
                                        <ul className="text-xs sm:text-sm text-start text-black font-normal space-y-3 mb-4 sm:mb-6 list-disc pl-4">
                                            <li><strong>Temporary Suspension –</strong> Your account will be disabled, but your data will be retained.</li>
                                            <li><strong>No Access –</strong> You won’t be able to sign in until you reactivate your account.</li>
                                            <li><strong>Reactivation Anytime –</strong> Simply log back in to restore your account.</li>
                                            <li><strong>No Public Visibility –</strong> Your profile and content may no longer be visible to others.</li>
                                            <li><strong>Subscription Impact –</strong> Any active subscriptions or services may be paused or canceled.</li>
                                            <li><strong>Security & Data –</strong> Your personal information remains stored as per platform policies.</li>
                                        </ul>
                                        <div className="flex justify-center gap-4">
                                            <button
                                                onClick={() => setIsOpen4(false)}
                                                className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsOpen5(true);
                                                    setIsOpen4(false);
                                                }}
                                                className="bg-[#870A28] text-white font-medium px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {isOpen5 && (
                                <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
                                    <div className="bg-white rounded-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative shadow-lg">
                                        <button
                                            className="absolute top-3 right-4 text-gray-600 text-lg sm:text-xl"
                                            onClick={() => setIsOpen5(false)}
                                        >
                                            ×
                                        </button>
                                        <h2 className="text-base sm:text-lg text-start font-semibold mb-4 sm:mb-5">Deactivate Account</h2>
                                        <div className="space-y-4 text-start mb-4 sm:mb-6">
                                            {reasons.map((reason, index) => (
                                                <label key={index} className="flex font-normal items-start gap-3 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="reason"
                                                        value={reason}
                                                        checked={selectedReason === reason}
                                                        onChange={() => setSelectedReason(reason)}
                                                        className="mt-1 accent-[#870A28] w-4 h-4"
                                                    />
                                                    <span className="text-xs sm:text-sm">{reason}</span>
                                                </label>
                                            ))}
                                        </div>
                                        <div className="mb-4 sm:mb-6 text-start">
                                            <label className="text-xs sm:text-sm font-medium block mb-1">
                                                Is there anything else we should know?
                                            </label>
                                            <textarea
                                                placeholder="Enter your comment..."
                                                rows={3}
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                                className="w-full border border-pink-300 font-normal rounded p-3 focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                            ></textarea>
                                        </div>
                                        <div className="flex justify-center gap-4">
                                            <button
                                                onClick={() => setIsOpen5(false)}
                                                className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={handleLogout}
                                                className="bg-[#870A28] text-white font-medium px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                                            >
                                                Deactivate my account
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 gap-4">
                        <div>
                            <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">Privacy & Cookies</p>
                            <p className="text-base lg:pt-4 sm:text-lg md:text-[24px] text-[#1D1D1D80] font-medium">Resources to access and manage your personal data efficiently.</p>
                        </div>
                        <div className="text-left sm:text-right w-full sm:w-auto">
                            <button onClick={() => navigate('/privacy')} className="text-base sm:text-lg md:text-[24px] text-white bg-[#870A28] px-3 sm:px-4 py-1 sm:py-2 rounded w-full sm:w-auto">Go to Privacy Portal</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProfileSettings