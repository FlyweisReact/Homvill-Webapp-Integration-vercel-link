

// import React, { useState } from 'react'
// import Navbar2 from './Navbar2'
// import Navbar from './Navbar'
// import bgImage from './assets/carbg.svg'
// import car from './assets/career.svg'
// import group2 from './assets/group2.svg'
// import sell2 from './assets/link8.svg'
// import { useAuth } from './Authprovider/AuthContext'
// import Footer from './Footer'
// import { Link } from 'react-router-dom'
// const Partner = () => {
//     const slides = [
//         {
//             title: 'Culture',
//             description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
//       took a galley of type and scrambled it to make a type specimen book...`,
//             image: car,
//         },
//         {
//             title: 'Flexible Working',
//             description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
//       took a galley of type and scrambled it to make a type specimen book...`,
//             image: car,
//         },
//         {
//             title: 'Growth',
//             description: `We believe in nurturing potential and empowering individuals to grow in their roles and careers.`,
//             image: car,
//         },
//     ];
//     const [current, setCurrent] = useState(0);

//     const prevSlide = () => {
//         setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     };

//     const nextSlide = () => {
//         setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     };
//     const { isLoggedIn } = useAuth();
//     return (
//         <>
//             {isLoggedIn ? <Navbar2 /> : <Navbar />}
//             <div
//                 className="bg-cover bg-center text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-10 lg:px-12"
//                 style={{ backgroundImage: `url(${bgImage})` }}
//             >
//                 <h2
//                     className="text-3xl sm:text-4xl lg:text-[48px] font-bold mulish-font"
//                 >
//                     Join us as we reimagine real estate.
//                 </h2>
//                 <p
//                     style={{ fontFamily: 'Poppins' }}
//                     className="mt-5 text-xl sm:text-2xl lg:text-[32px] font-medium"
//                 >
//                     orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
//                 </p>
//             </div>
//             <div className="max-w-6xl mx-auto px-4 py-10">
//                 <h2 className="text-center mulish-font text-2xl md:text-[40px] font-semibold text-black mb-8">
//                     A company where employees feels like home
//                 </h2>

//                 <div className="relative p-6 flex flex-col md:flex-row items-center">
//                     {/* Left Arrow */}
//                     <button
//                         onClick={prevSlide}
//                         className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-white border rounded-lg py-2 px-4 shadow hover:bg-gray-100"
//                     >
//                         <span className="text-[33px]">{'<'}</span>
//                     </button>

//                     {/* Slide Content */}
//                     <div className="md:w-1/2">
//                         <h3 className="text-[32px] mulish-font font-bold mb-2">{slides[current].title}</h3>
//                         <p className="text-[20px] mulish-font text-[#1D1D1D] font-normal leading-relaxed" style={{ fontFamily: 'Poppins' }}>
//                             {slides[current].description}
//                         </p>
//                     </div>

//                     {/* Slide Image */}
//                     <div className="md:w-1/2 mt-6 md:mt-0">
//                         <img
//                             src={slides[current].image}
//                             alt="slide"
//                             className="rounded-2xl w-auto h-[300px] object-cover"
//                         />
//                     </div>

//                     {/* Right Arrow */}
//                     <button
//                         onClick={nextSlide}
//                         className="absolute right-[20px] top-1/2 transform -translate-y-1/2 bg-white border rounded-lg py-2 px-4 shadow hover:bg-gray-100"
//                     >
//                         <span className="text-[33px]">{'>'}</span>
//                     </button>
//                 </div>

//                 {/* Dots */}
//                 <div className="flex justify-center mt-4 gap-2">
//                     {slides.map((_, idx) => (
//                         <span
//                             key={idx}
//                             onClick={() => setCurrent(idx)}
//                             className={`w-3 h-3 rounded-full cursor-pointer ${idx === current ? 'bg-[#7a0e2e]' : 'bg-gray-300'
//                                 }`}
//                         ></span>
//                     ))}
//                 </div>
//             </div>

//             <div style={{ fontFamily: 'Poppins' }} className="px-4 sm:px-8 md:px-10 lg:px-12 py-6 sm:py-8 bg-[#FFE0E9]">
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-gray-800 text-center px-4">
//                     What we do
//                 </h2>
//                 <p className="text-gray-600 mb-6 sm:mb-8 mt-2 sm:mt-4 text-center text-xs sm:text-sm md:text-base lg:text-[17px] px-4">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                 </p>
//                 <img src={group2} />
//             </div>
//             <div className="flex justify-center items-center bg-gray-100 mt-6 sm:mt-8 md:mt-10 px-3 sm:px-4">
//                             <div className="bg-pink-100 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-7xl">
//                                 <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-[36px] mulish-font font-bold mb-2 sm:mb-3">
//                                     Our Office
//                                 </h1>
//                                 <p style={{ fontFamily: 'Poppins' }} className="text-gray-700 text-sm sm:text-base md:text-[17px] mb-4 sm:mb-6">
//                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                                 </p>
//                                 <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
//                                     <div className="w-full md:w-1/2">
//                                         <img src={sell2} className="w-full h-auto" alt="Premier Agent" />
//                                     </div>
//                                     <div className="w-full md:w-1/2 flex flex-col justify-center">
//                                         <div>
//                                             <h2 style={{ fontFamily: 'Poppins' }} className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold mb-2">
//                                                 Headline comes here...
//                                             </h2>
//                                             <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 text-sm sm:text-base md:text-[16px]">
//                                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                                             </p>
//                                         </div>
                                       
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//             <Footer />
//         </>
//     )
// }

// export default Partner 
import React, { useState } from 'react';
import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import bgImage from './assets/carbg.svg';
import car from './assets/career.svg';
import group2 from './assets/group2.svg';
import sell2 from './assets/link8.svg';
import { useAuth } from './Authprovider/AuthContext';
import Footer from './Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import emp from './assets/zbra.jpg'
import emp1 from './assets/emplo.jpg'
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

const Partner = () => {
  const slides = [
    {
      title: 'Culture',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book...`,
      image: car,
    },
    {
      title: 'Benefits',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book...`,
      image: emp,
    },
    {
      title: 'Flexible Working',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book...`,
      image: emp1,
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? <Navbar2 /> : <Navbar />}
      <div
        className="bg-cover bg-center text-white py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-10 lg:px-12"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mulish-font">
          Join us as we reimagine real estate.
        </h2>
        <p
          style={{ fontFamily: 'Poppins' }}
          className="mt-3 text-base sm:text-lg md:text-xl lg:text-[32px] lg:leading-[1.1] font-medium"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 md:py-10">
        <h2 className="text-center mulish-font text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold text-black mb-6 sm:mb-8">
          A company where employees feels like home
        </h2>

        {/* <div className="relative p-4 sm:p-6">
        
          <button
            onClick={prevSlide}
            className="absolute left-[-16px] sm:left-[-40px] md:left-[-40px] top-1/2 transform -translate-y-1/2 bg-white border rounded-lg py-2 px-3 sm:px-4 shadow hover:bg-gray-100 z-10"
          >
            <span style={{fontFamily:'Poppins'}} className="text-xl sm:text-2xl md:text-[33px]">{'<'}</span>
          </button>


          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] mulish-font font-bold mb-2">
                {slides[current].title}
              </h3>
              <p
                style={{ fontFamily: 'Poppins' }}
                className="text-sm sm:text-base md:text-lg lg:text-[20px] text-[#1D1D1D] font-normal leading-relaxed"
              >
                {slides[current].description}
              </p>
            </div>

        
            <div className="w-full md:w-1/2">
              <img
                src={slides[current].image}
                alt="slide"
                className="rounded-2xl w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
              />
            </div>
          </div>

    
          <button style={{fontFamily:'Poppins'}}
            onClick={nextSlide}
            className="absolute right-[-16px] sm:right-[-40px] md:right-[-40px] top-1/2 transform -translate-y-1/2 bg-white border rounded-lg py-2 px-3 sm:px-4 shadow hover:bg-gray-100 z-10"
          >
            <span className="text-xl sm:text-2xl md:text-[33px]">{'>'}</span>
          </button>
        </div> */}
        <div className="relative p-4 sm:p-6">
  {/* Left Button */}
  <button
    onClick={prevSlide}
    className="absolute left-[-13px] sm:left-[-40px] md:left-[-40px] top-1/2 transform -translate-y-1/2 bg-white border rounded-lg py-2 px-3 sm:px-4 shadow hover:bg-gray-100 z-10"
  >
    <span style={{ fontFamily: 'Poppins' }} className="text-xl sm:text-2xl md:text-[33px]">{'<'}</span>
  </button>

  {/* Main Content */}
  <div className={`flex flex-col md:flex-row items-center ${current === 1 ? 'md:flex-row-reverse' : ''}`}>
    {/* Title + Description */}
    <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-4 md:pl-4">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] mulish-font font-bold mb-2">
        {slides[current].title}
      </h3>
      <p
        style={{ fontFamily: 'Poppins' }}
        className="text-sm sm:text-base md:text-lg lg:text-[20px] text-[#1D1D1D] font-normal leading-relaxed"
      >
        {slides[current].description}
      </p>
    </div>

    {/* Slide Image */}
    <div className="w-full md:w-1/2">
      {/* <img
        src={slides[current].image}
        alt="slide"
        className="rounded-2xl w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
      /> */}
      <img
  src={slides[current].image}
  alt="slide"
  className="w-full h-[200px] sm:h-[250px] md:h-[380px] object-cover rounded-tl-[130px]"
/>

    </div>
  </div>

  {/* Right Button */}
  <button
    style={{ fontFamily: 'Poppins' }}
    onClick={nextSlide}
    className="absolute right-[-13px] sm:right-[-40px] md:right-[-40px] top-1/2 transform -translate-y-1/2 bg-white border rounded-lg py-2 px-3 sm:px-4 shadow hover:bg-gray-100 z-10"
  >
    <span className="text-xl sm:text-2xl md:text-[33px]">{'>'}</span>
  </button>
</div>


  
        <div className="flex justify-center mt-4 gap-2">
          {slides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer ${
                idx === current ? 'bg-[#7a0e2e]' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>

      <div
        style={{ fontFamily: 'Poppins' }}
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 bg-[#FFE0E9]"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-medium text-gray-800 text-center px-4">
          What we do
        </h2>
        <p className="text-gray-600 mb-4 sm:mb-6 mt-2 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-[17px] text-center px-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="flex justify-center">
          <img src={group2} alt="What we do" className="w-full max-w-4xl h-auto object-contain" />
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#F7F7F7] py-6 sm:py-8 md:py-10 px-4 sm:px-6">
        <div className="bg-[#F7F7F7]  p-4 sm:p-6 md:p-8 w-full max-w-7xl">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[36px] mulish-font font-bold mb-2 sm:mb-3">
            Our Office
          </h1>
          <p
            style={{ fontFamily: 'Poppins' }}
            className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-[17px] mb-4 sm:mb-6"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            <div className="w-full md:w-1/2">
              <img src={sell2} className="w-full h-auto object-cover rounded-lg" alt="Premier Agent" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2
                style={{ fontFamily: 'Poppins' }}
                className="text-base sm:text-lg md:text-xl lg:text-[24px] font-semibold mb-2"
              >
                Headline comes here...
              </h2>
              <p
                style={{ fontFamily: 'Poppins' }}
                className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[16px]"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Partner;