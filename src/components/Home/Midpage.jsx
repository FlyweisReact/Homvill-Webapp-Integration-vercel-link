
// import React,{useState ,useEffect} from 'react'
// import link from '../assets/villa.jpg'
// import location from '../assets/location.svg'
// import link2 from '../assets/villa2.jpg'
// import link3 from '../assets/villa3.jpg'
// import link4 from '../assets/villa4.jpg'
// import bed from '../assets/bed.svg'
// import bath from '../assets/bath.svg'
// import square from '../assets/Icon (13).svg';

// const Midpage = () => {
//       const images = [
//         link,
//         link2,
//         link3,
//         link4, 
//       ];

//        const [currentImage, setCurrentImage] = useState(0);

//       useEffect(() => {
//         const interval = setInterval(() => {
//           setCurrentImage((prev) => (prev + 1) % images.length);
//         }, 3000); // Change image every 3 seconds
//         return () => clearInterval(interval);
//       }, [images.length]);

//       const handleDotClick = (index) => {
//         setCurrentImage(index);
//       };

//       return (
//         <div style={{fontFamily: 'Poppins'}}   className="flex flex-col items-center py-8 bg-[#FFE0E9]">
//            <h2 className="text-[40px] font-medium text-gray-800">
//                Mid Page Banner Headline Goes Here
//               </h2>
//           <p className="text-gray-600 mb-8">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </p>

//           <div className="relative w-[1200px] h-96 rounded-lg overflow-hidden shadow-lg">
//             {/* Background Slider */}
//             <div className="absolute inset-0">
//               {images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Slide ${index}`}
//                   className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//                     index === currentImage ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 />
//               ))}
//             </div>

//             {/* Overlay Container */}
//             <div style={{fontFamily: 'Poppins'}} className="absolute top-4 left-4 w-[600px] h-3/4 bg-transparent  backdrop-blur-lg p-6 rounded-lg">
//               <h2 className="text-[40px] font-medium text-gray-800">
//                 Villa One Hyde Park
//               </h2>
//               <div className="flex items-center text-[#000000]">
//                 <span className="mr-2"><img src={location}/></span>
//                 <p>2050 Bloomingdale Ave</p>
//               </div>
//               <p className="text-[#000000] mt-2">
//                 Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details.
//               </p>
//               <div className="flex items-center space-x-2 text-[#000000] mt-2">
//                 {/* <p>🛏️ 4 Beds</p>
//                 <p>🛁 2 Baths</p>
//                 <p>📏 390 sq ft</p> */}
//                  <span><img src={bed}/></span>
//                 <p>4 Beds</p>
//                  <span><img src={bath}/></span>
//                 <p>2 Baths</p>
//                  <span><img src={square}/></span>
//                 <p>350 sqft</p>
//               </div>
//               <p className="text-2xl font-bold text-gray-800 mt-2">$120,000</p>
//             </div>

//             {/* Slider Dots */}
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//               {images.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleDotClick(index)}
//                   className={`w-3 h-3 rounded-full ${
//                     index === currentImage ? 'bg-[#8A1538]' : 'bg-gray-400'
//                   }`}
//                 ></button>
//               ))}
//             </div>
//           </div>
//         </div>
//       );
//     };

// export default Midpage
import React, { useState, useEffect } from 'react';
import link from '../assets/villa.jpg';
import location from '../assets/location.svg';
import link2 from '../assets/villa2.jpg';
import link3 from '../assets/villa3.jpg';
import link4 from '../assets/villa4.jpg';
import bed from '../assets/bed.svg';
import bath from '../assets/bath.svg';
import square from '../assets/Icon (13).svg';

const Midpage = () => {
  const images = [
    link,
    link2,
    link3,
    link4, 
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div style={{fontFamily: 'Poppins'}} className="flex flex-col items-center  py-8 bg-[#FFE0E9] w-full min-h-[500px]">
      <h2 className="text-[40px] font-medium text-gray-800 text-center lg:text-[40px] md:text-3xl sm:text-2xl xs:text-xl px-4">
        Mid Page Banner Headline Goes Here
      </h2>
      <p className="text-gray-600 mb-8 mt-4 text-center lg:text-base md:text-sm sm:text-xs xs:text-xs px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="relative w-[1200px] max-w-[95vw] h-96 rounded-lg overflow-hidden shadow-lg lg:h-96 md:h-80 sm:h-64 xs:h-56">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Overlay Container */}
        <div 
          style={{fontFamily: 'Poppins'}} 
          className="absolute top-4 left-4 w-[600px] max-w-[88%] h-3/4  bg-transparent backdrop-blur-lg p-1 md:p-6 rounded-lg 
                     lg:max-w-[48%] md:max-w-[50%] md:p-4 sm:max-w-[80%] sm:p-3 sm:top-4 sm:left-4 sm:h-[80%] xs:max-w-[75%] xs:p-2 xs:h-[70%] xs:top-1 xs:left-1"
        >
          <h2 className="text-[20px] font-medium text-gray-800 mt-4 lg:text-[40px] md:text-2xl sm:text-xl xs:text-base">
            Villa One Hyde Park
          </h2>
          <div className="flex items-center text-[#000000] mt-4">
            <span className="mr-1">
              <img src={location} alt="Location" className="w-5 h-5 sm:w-4 sm:h-4 xs:w-3 xs:h-3" />
            </span>
            <p className="lg:text-base md:text-sm sm:text-xs xs:text-[10px]">2050 Bloomingdale Ave</p>
          </div>
          <p className="text-[#000000] mt-2 lg:text-base md:text-sm sm:text-xs xs:text-[9px] leading-tight">
            Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details.
          </p>
          <div className="flex items-center space-x-2 text-[#000000] mt-2 sm:space-x-1 xs:space-x-1">
            <span>
              <img src={bed} alt="Bed" className="w-5 h-5 sm:w-4 sm:h-4 xs:w-3 xs:h-3" />
            </span>
            <p className="lg:text-base md:text-sm sm:text-xs xs:text-[10px]">4 Beds</p>
            <span>
              <img src={bath} alt="Bath" className="w-5 h-5 sm:w-4 sm:h-4 xs:w-3 xs:h-3" />
            </span>
            <p className="lg:text-base md:text-sm sm:text-xs xs:text-[10px]">2 Baths</p>
            <span>
              <img src={square} alt="Square" className="w-5 h-5 sm:w-4 sm:h-4 xs:w-3 xs:h-3" />
            </span>
            <p className="lg:text-base md:text-sm sm:text-xs xs:text-[10px]">350 sqft</p>
          </div>
          <p className="text-2xl font-bold text-gray-800 md:mt-3 lg:text-2xl md:text-xl sm:text-lg xs:text-sm">
            $120,05
          </p>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:bottom-2 xs:bottom-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full sm:w-2 sm:h-2 xs:w-2 xs:h-2 ${
                index === currentImage ? 'bg-[#8A1538]' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Midpage;