// import React from "react";
// import { FiSearch, FiMoreVertical } from "react-icons/fi";
// import { FaRegSmile, FaPaperclip, FaPaperPlane } from "react-icons/fa";
// import Navbar2 from "./Navbar2";
// import link  from './assets/link2.svg'
// import link1 from './assets/link3.jpg'
// import Footer from "./Footer";
// export default function ChatPage() {
//     const propertyImages = [link, link1, link, link1];

//   return (
//     <>
//     <Navbar2/>
//     <div className="h-screen w-full px-12 flex bg-white text-[#1D1D1D] font-sans">
//       {/* Left Sidebar */}
//       <div className="w-[280px] border-r border-gray-200 p-4 flex flex-col">
//         <div className="text-sm font-semibold mb-4">Messages</div>
//         <input
//           type="text"
//           placeholder="Search"
//           className="w-full px-3 py-2 rounded-md border bg-gray-100 text-sm mb-4"
//         />

//         {/* Contact List */}
//         <div className="flex flex-col gap-3 overflow-y-auto">
//           {[
//             { name: "Killan James", status: "Typing...", active: true },
//             { name: "Design Team", status: "2 new messages", unread: true },
//             { name: "Ahmad Modi", status: "Typing..." },
//             { name: "Claude Mexdi", status: "1 new message", unread: true },
//             { name: "Newsha", status: "Typing..." },
//             { name: "Milia Nose", status: "4 new messages", unread: true },
//             { name: "Ikram SD", status: "Online" },
//             { name: "Aditya", status: "2 new messages", unread: true },
//           ].map((person, i) => (
//             <div
//               key={i}
//               className={`flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer ${
//                 person.active ? "bg-[#fce6ed]" : "hover:bg-gray-100"
//               }`}
//             >
//               <img
//                 src={`https://i.pravatar.cc/150?img=${i + 1}`}
//                 className="w-9 h-9 rounded-full"
//                 alt={person.name}
//               />
//               <div className="flex flex-col">
//                 <p className="text-sm font-medium">{person.name}</p>
//                 <span
//                   className={`text-xs ${
//                     person.unread ? "text-[#9E1556] font-semibold" : "text-gray-500"
//                   }`}
//                 >
//                   {person.status}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 flex flex-col border-r border-gray-200">
//         {/* Chat Header */}
//         <div className="flex items-center justify-between px-6 py-4 border-b">
//           <div className="flex items-center gap-3">
//             <img
//               src="https://i.pravatar.cc/150?img=1"
//               alt="Killan"
//               className="w-10 h-10 rounded-full"
//             />
//             <span className="text-lg font-semibold">Killan James</span>
//           </div>
//           <FiMoreVertical />
//         </div>

//         {/* Chat Body */}
//         <div className="flex-1 p-6 space-y-6 overflow-y-auto">
//           <div className="flex flex-col items-start">
//             <span className="text-xs text-gray-500 mb-1">09:22 AM</span>
//             <div className="bg-gray-100 p-3 rounded-lg text-sm max-w-xs">
//               Lorem Ipsum is simply dummy text.
//             </div>
//           </div>
//           <div className="flex flex-col items-start">
//             <span className="text-xs text-gray-500 mb-1">09:45 AM</span>
//             <div className="bg-gray-100 p-3 rounded-lg text-sm max-w-xs">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//             </div>
//           </div>
//           <div className="text-center text-xs text-gray-400">Today, 04:00 PM</div>
//           <div className="flex flex-col items-start">
//             <div className="bg-gray-100 p-3 rounded-lg text-sm max-w-xs">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//             </div>
//           </div>
//           <div className="flex justify-end">
//             <div className="bg-[#9E1556] text-white px-4 py-2 rounded-lg text-sm max-w-xs">
//               That's a nice design idea 💡
//             </div>
//           </div>
//         </div>

//         {/* Chat Input */}
//         <div className="flex items-center gap-3 px-6 py-3 border-t bg-white">
//           <input
//             type="text"
//             placeholder="Type your message..."
//             className="flex-1 border px-4 py-2 rounded-lg text-sm bg-gray-100"
//           />
//           <FaRegSmile className="text-xl text-gray-500" />
//           <FaPaperclip className="text-xl text-gray-500" />
//           <button className="bg-[#9E1556] p-2 rounded-full text-white">
//             <FaPaperPlane />
//           </button>
//         </div>
//       </div>

//       {/* Right Sidebar */}
//       <div className="w-[280px] p-4 bg-[#fce6ed] space-y-4">
//         <div className="flex flex-col items-center">
//           <img
//             src="https://i.pravatar.cc/100?img=1"
//             className="w-16 h-16 rounded-full mb-2"
//             alt="Killan"
//           />
//           <h3 className="font-bold text-md">Killan James</h3>
//           <span className="text-xs text-gray-600">@killan.james</span>
//         </div>

//         <div className="text-sm space-y-2">
//           <p className="font-semibold">Furnished Apartment</p>
//           <p className="text-gray-600 text-xs">🚗 Mercedes Vito</p>
//           <p className="text-xs text-gray-600">
//             4 guest | 2 bedroom | 1 bathroom
//           </p>
//           <p className="text-xs text-gray-600">📍 Inline home</p>
//         </div>

//         <div className="text-[#9E1556] font-bold text-lg">$4,955,000</div>

        
//         <div className="grid grid-cols-2 gap-2">
//   {propertyImages.map((image, i) => (
//     <img
//       key={i}
//       src={image}
//       alt={`property-${i}`}
//       className="w-full h-[70px] rounded-md object-cover"
//     />
//   ))}
// </div>


//         <button className="w-full bg-[#9E1556] text-white py-2 rounded-md font-semibold text-sm">
//           Block
//         </button>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }
import React from "react";
import { FiSearch, FiMoreVertical } from "react-icons/fi";
import { FaRegSmile, FaPaperclip, FaPaperPlane } from "react-icons/fa";
import Navbar2 from "./Navbar2";
import link from './assets/link2.svg';
import link1 from './assets/link3.jpg';
import Footer from "./Footer";

export default function ChatPage() {
    const propertyImages = [link, link1, link, link1];

    return (
        <>
            <Navbar2 />
            <div className="min-h-screen w-full flex flex-col md:flex-row lg:px-12 bg-white text-[#1D1D1D] font-sans">
                {/* Left Sidebar - Hidden on mobile, shown via toggle */}
                <div className="hidden md:block md:w-[280px] border-r border-gray-200 p-4 flex-shrink-0">
                    <div className="text-sm font-semibold mb-4">Messages</div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full px-3 py-2 rounded-md border bg-gray-100 text-sm mb-4"
                    />
                    <div className="flex flex-col gap-3 overflow-y-auto max-h-[calc(100vh-200px)]">
                        {[
                            { name: "Killan James", status: "Typing...", active: true },
                            { name: "Design Team", status: "2 new messages", unread: true },
                            { name: "Ahmad Modi", status: "Typing..." },
                            { name: "Claude Mexdi", status: "1 new message", unread: true },
                            { name: "Newsha", status: "Typing..." },
                            { name: "Milia Nose", status: "4 new messages", unread: true },
                            { name: "Ikram SD", status: "Online" },
                            { name: "Aditya", status: "2 new messages", unread: true },
                        ].map((person, i) => (
                            <div
                                key={i}
                                className={`flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer ${
                                    person.active ? "bg-[#fce6ed]" : "hover:bg-gray-100"
                                }`}
                            >
                                <img
                                    src={`https://i.pravatar.cc/150?img=${i + 1}`}
                                    className="w-9 h-9 rounded-full"
                                    alt={person.name}
                                />
                                <div className="flex flex-col">
                                    <p className="text-sm font-medium">{person.name}</p>
                                    <span
                                        className={`text-xs ${
                                            person.unread ? "text-[#9E1556] font-semibold" : "text-gray-500"
                                        }`}
                                    >
                                        {person.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col px-4 md:px-0">
                    {/* Chat Header */}
                    <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://i.pravatar.cc/150?img=1"
                                alt="Killan"
                                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                            />
                            <span className="text-base md:text-lg font-semibold">Killan James</span>
                        </div>
                        <FiMoreVertical />
                    </div>

                    {/* Chat Body */}
                    <div className="flex-1 p-4 md:p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                        <div className="flex flex-col items-start">
                            <span className="text-xs text-gray-500 mb-1">09:22 AM</span>
                            <div className="bg-gray-100 p-3 rounded-lg text-sm max-w-[80%] md:max-w-xs">
                                Lorem Ipsum is simply dummy text.
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-xs text-gray-500 mb-1">09:45 AM</span>
                            <div className="bg-gray-100 p-3 rounded-lg text-sm max-w-[80%] md:max-w-xs">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                        </div>
                        <div className="text-center text-xs text-gray-400">Today, 04:00 PM</div>
                        <div className="flex flex-col items-start">
                            <div className="bg-gray-100 p-3 rounded-lg text-sm max-w-[80%] md:max-w-xs">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="bg-[#9E1556] text-white px-4 py-2 rounded-lg text-sm max-w-[80%] md:max-w-xs">
                                That's a nice design idea 💡
                            </div>
                        </div>
                    </div>

                    {/* Chat Input */}
                    <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 border-t bg-white">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="flex-1 border px-3 md:px-4 py-2 rounded-lg text-sm bg-gray-100"
                        />
                        <FaRegSmile className="text-lg md:text-xl text-gray-500" />
                        <FaPaperclip className="text-lg md:text-xl text-gray-500" />
                        <button className="bg-[#9E1556] p-2 rounded-full text-white">
                            <FaPaperPlane className="text-sm md:text-base" />
                        </button>
                    </div>
                </div>

                {/* Right Sidebar - Hidden on mobile, shown via toggle */}
                <div className="hidden md:block md:w-[280px] p-4 bg-[#fce6ed] space-y-4 flex-shrink-0">
                    <div className="flex flex-col items-center">
                        <img
                            src="https://i.pravatar.cc/100?img=1"
                            className="w-14 h-14 md:w-16 md:h-16 rounded-full mb-2"
                            alt="Killan"
                        />
                        <h3 className="font-bold text-sm md:text-md">Killan James</h3>
                        <span className="text-xs text-gray-600">@killan.james</span>
                    </div>

                    <div className="text-sm space-y-2">
                        <p className="font-semibold">Furnished Apartment</p>
                        <p className="text-gray-600 text-xs">🚗 Mercedes Vito</p>
                        <p className="text-xs text-gray-600">
                            4 guest | 2 bedroom | 1 bathroom
                        </p>
                        <p className="text-xs text-gray-600">📍 Inline home</p>
                    </div>

                    <div className="text-[#9E1556] font-bold text-base md:text-lg">$4,955,000</div>

                    <div className="grid grid-cols-2 gap-2">
                        {propertyImages.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                alt={`property-${i}`}
                                className="w-full h-[60px] md:h-[70px] rounded-md object-cover"
                            />
                        ))}
                    </div>

                    <button className="w-full bg-[#9E1556] text-white py-2 rounded-md font-semibold text-sm">
                        Block
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}