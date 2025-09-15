
import React, { useState, useEffect } from 'react';
import link from '../assets/shopname.jpg';
import location from '../assets/location.svg';
import link2 from '../assets/cont13.jpg';
import link3 from '../assets/cont14.jpg';
import link4 from '../assets/cont15.jpg';
import link5 from '../assets/cont16.jpg';
import bed from '../assets/bed.svg';
import bath from '../assets/bath.svg';
import square from '../assets/Icon (13).svg';

const Midpage = () => {
  const images = [
   
    link2,
    link3,
    link4, 
    link5, 
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
    <div style={{fontFamily: 'Poppins'}} className="flex flex-col items-center  py-8  w-full min-h-[500px]">

      {/* <div className="relative w-[1200px] max-w-[95vw] h-96 rounded-lg overflow-hidden shadow-lg lg:h-96 md:h-80 sm:h-64 xs:h-56"> */}
<div className="relative w-[91%] h-96 rounded-lg overflow-hidden shadow-lg mx-auto">

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
            Contractor Name
          </h2>
          <div className="flex items-center text-[#000000] mt-4">
            <span className="mr-1">
              <img src={location} alt="Location" className="w-5 h-5 sm:w-4 sm:h-4 xs:w-3 xs:h-3" />
            </span>
            <p className="lg:text-base md:text-sm sm:text-xs xs:text-[10px]">2050 Bloomingdale Ave</p>
          </div>
          <p className="text-[#000000] mt-2 lg:text-base md:text-sm sm:text-xs xs:text-[9px] leading-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            
          </p>
          {/* <div className="flex items-center space-x-2 text-[#000000] mt-2 sm:space-x-1 xs:space-x-1">
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
          </p> */}
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