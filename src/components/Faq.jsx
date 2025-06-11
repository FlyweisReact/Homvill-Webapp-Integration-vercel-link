
// import React from "react";
// import scrollIcon from "./assets/scroll.svg";
// import bg from './assets/BG13.svg';
// import Navbar from "./Navbar";
// import Navbar2 from "./Navbar2";
// import Footer from "./Footer";
// import { useAuth } from "./Authprovider/AuthContext";
// const HeroSection = () => {
//     const { isLoggedIn } = useAuth();
//     return (
//         <>
//             {/* <Navbar /> */}
//             {isLoggedIn ? <Navbar2 /> : <Navbar />}
//             <div
//                 className="w-full bg-cover bg-center text-white h-[500px] px-4 sm:px-6 md:px-8 relative"
//                 style={{ backgroundImage: `url(${bg})`, fontFamily: 'Poppins' }}
//             >
//                 <div className="absolute inset-0 bg-[#00386166] bg-opacity-60"></div>
//                 <div className="max-w-7xl mx-auto text-center space-y-6">
//                     <div className="relative z-10 text-start pt-8 sm:pt-10 ps-4 sm:ps-6 md:ps-8">
//                         <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold leading-[1.2] mulish-font">
//                            Everything You Need to Know: Frequently Asked  <br className="hidden md:block" /> Questions
//                         </h2>
//                         <p className="mt-4 text-base sm:text-lg md:text-[28px]">
//                             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                         </p>

//                         {/* Search Input */}
//                     </div>

//                     <div className="relative z-10 text-center space-y-4 sm:space-y-4 pt-16 lg:md:pt-24">
//                         <div className="text-lg sm:text-xl md:text-[18px] font-bold mulish-font">
//                             Scroll Down
//                         </div>
//                         <img
//                             src={scrollIcon}
//                             className="inline-flex items-center text-white text-sm font-semibold px-3 py-1 rounded-full mx-auto w-8 sm:w-10 md:w-12"
//                             alt="Scroll down icon"
//                         />
//                     </div>
//                 </div>
//             </div>
            
//             <Footer />
//         </>
//     );
// };

// export default HeroSection;

import React, { useState } from 'react';
import scrollIcon from "./assets/scroll.svg";
import bg from './assets/BG13.svg';
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import { useAuth } from "./Authprovider/AuthContext";

const faqsLeft = [
  {
    question: "What services does your real estate company offer?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    question: "How is the value of a property determined?",
  },
  {
    question: "What costs are involved in buying or selling a home?",
  },
  {
    question: "How long does it typically take to sell a property?",
  },
  {
    question: "How do you market properties for sale?",
  },
  {
    question: "What should I look for during a home inspection?",
  },
];

const faqsRight = [
  {
    question: "Do you assist with rental properties?",
  },
  {
    question: "How do I prepare my home for sale?",
  },
  {
    question: "What areas do you specialize in?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    question: "How do I know if it's the right time to buy or sell?",
  },
  {
    question: "Can you help with relocating to a new city or state?",
  },
  {
    question: "Do you assist with first-time homebuyers?",
  },
];

const AccordionItem = ({ item, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;
  return (
    <div style={{fontFamily:'Poppins'}} className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="flex justify-between w-full text-left"
      >
        <span
          className={`font-semibold text-sm md:text-[18px] ${
            isOpen ? 'text-[#8A1538]' : 'text-gray-900'
          }`}
        >
          {item.question}
        </span>
        <span className="text-xl font-bold text-gray-600">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && item.answer && (
        <p className="text-sm md:text-base text-[#666] mt-3 leading-relaxed font-normal">
          {item.answer}
        </p>
      )}
    </div>
  );
};

const FaqSection = () => {
  const [openLeft, setOpenLeft] = useState(0); // 0 index is open by default
  const [openRight, setOpenRight] = useState(2); // index 2 is open in right side
const { isLoggedIn } = useAuth();
  return (
    <>
     {isLoggedIn ? <Navbar2 /> : <Navbar />}
            <div
                className="w-full bg-cover bg-center text-white h-[500px] px-4 sm:px-6 md:px-8 relative"
                style={{ backgroundImage: `url(${bg})`, fontFamily: 'Poppins' }}
            >
                <div className="absolute inset-0 bg-[#00386166] bg-opacity-60"></div>
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <div className="relative z-10 text-start pt-8 sm:pt-10 ps-4 sm:ps-6 md:ps-8">
                        <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold leading-[1.2] mulish-font">
                           Everything You Need to Know: Frequently Asked  <br className="hidden md:block" /> Questions
                        </h2>
                        <p className="mt-4 text-base sm:text-lg md:text-[28px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>

                        {/* Search Input */}
                    </div>

                    <div className="relative z-10 text-center space-y-4 sm:space-y-4 pt-16 lg:md:pt-24">
                        <div className="text-lg sm:text-xl md:text-[18px] font-bold mulish-font">
                            Scroll Down
                        </div>
                        <img
                            src={scrollIcon}
                            className="inline-flex items-center text-white text-sm font-semibold px-3 py-1 rounded-full mx-auto w-8 sm:w-10 md:w-12"
                            alt="Scroll down icon"
                        />
                    </div>
                </div>
            </div>
    <div className=" mx-12 px-4 py-12 grid md:grid-cols-2 gap-8">
      <div>
        {faqsLeft.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            index={index}
            openIndex={openLeft}
            setOpenIndex={setOpenLeft}
          />
        ))}
      </div>
      <div>
        {faqsRight.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            index={index}
            openIndex={openRight}
            setOpenIndex={setOpenRight}
          />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FaqSection;
