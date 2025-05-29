
// import React from "react";
// import shoes from '../assets/shoes.svg'; // Replace with your actual images

// const AdSlider = () => {
//   const ads = [
//     shoes,
//     shoes,
//     shoes,
//   ];

//   // Repeat for seamless scroll
//   const repeatedAds = [...ads, ...ads];

//   return (
//     <>
//     <div style={{fontFamily:'Poppins'}} className="flex justify-center text-[40px] font-semibold pt-12 pb-4">
//        Advertisement goes here
//     </div>
//     <div className="overflow-hidden w-full bg-white py-4">
//       <div className="slider-track flex gap-x-6 animate-marquee">
//         {repeatedAds.map((src, idx) => (
//           <img
//             key={idx}
//             src={src}
//             alt={`ad-${idx}`}
//             className="w-[600px] h-[365px] object-cover flex-shrink-0 rounded-md"
//           />
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default AdSlider;
import React from "react";
import shoes from '../assets/shoes.svg'; // Replace with your actual images
import house from '../assets/house.svg'; // Replace with your actual images
import default1 from '../assets/default.svg'; // Replace with your actual images

const AdSlider = () => {
  const ads = [
    shoes,
    house,
    default1,
  ];

  // Repeat for seamless scroll
  const repeatedAds = [...ads, ...ads];

  return (
    <>
      <div
        style={{ fontFamily: 'Poppins' }}
        className="flex justify-center font-semibold pt-8 pb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[40px]"
      >
        Advertisement goes here
      </div>
      <div className="overflow-hidden w-full bg-white py-2 sm:py-3 lg:py-4">
        <div className="slider-track flex gap-x-2 sm:gap-x-4 lg:gap-x-6 animate-marquee">
          {repeatedAds.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`ad-${idx}`}
              className="w-[300px] h-[182px] sm:w-[400px] sm:h-[243px] md:w-[500px] md:h-[304px] lg:w-[630px] lg:h-[365px] object-cover flex-shrink-0 rounded-md"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AdSlider;
