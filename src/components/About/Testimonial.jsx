// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import comma from '../assets/Vector (70).svg'
// const testimonials = [
//     {
//         name: "Cameron Williamson",
//         title: "Designer",
//         image: "https://randomuser.me/api/portraits/women/68.jpg",
//         content:
//             "Searches for multiplexes, property comparisons and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
//     },
//     {
//         name: "Esther Howard",
//         title: "Marketing",
//         image: "https://randomuser.me/api/portraits/men/45.jpg",
//         content:
//             "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
//     },
//     {
//         name: "Devon Lane",
//         title: "Developer",
//         image: "https://randomuser.me/api/portraits/women/65.jpg",
//         content:
//             "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos.",
//     },

// ];

// const TestimonialSlider = () => {
//     return (
//         <div className="px-4 md:px-16 py-12 bg-white">
//             {/* Header */}
//             <div style={{ fontFamily: 'Poppins' }} className="flex flex-col md:flex-row justify-between items-start mb-10">
//                 <h2 className="text-2xl md:text-[40px] leading-snug font-semibold text-gray-900 mb-4 md:mb-0">
//                     What our customers are <br className="hidden md:block" />
//                     saying us?
//                 </h2>

//                 <div className="flex items-start gap-10 text-[#1A1A1A]">
//                     {/* Happy People Block */}
//                     <div>
//                         <p className="text-[26px] font-semibold">10m+</p>
//                         <p className="text-[15px] text-gray-600">Happy People</p>
//                     </div>

//                     {/* Rating Block */}
//                     <div>
//                         <p className="text-[26px] font-semibold">4.88</p>
//                         <p className="text-[15px] text-gray-600">Overall rating</p>
//                         <div className="text-yellow-500 mt-1 space-x-1 text-sm">
//                             {"★".repeat(5).split("").map((star, index) => (
//                                 <span key={index}>{star}</span>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <Swiper
//                 spaceBetween={24}
//                 breakpoints={{
//                     0: {
//                         slidesPerView: 1.1,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                     },
//                     1024: {
//                         slidesPerView: 2.9,
//                     },
//                 }}
//             >
//                 {testimonials.map((item, index) => (
//                     <SwiperSlide key={index}>
//                         <div style={{ fontFamily: 'Poppins' }} className="bg-[#F9F9F9] p-6  h-[301px] rounded-xl shadow-sm hover:shadow-md transition">
//                             <div className="flex items-center gap-4 mb-4">
//                                 <img
//                                     src={item.image}
//                                     alt={item.name}
//                                     className="w-20 h-20 rounded-full object-cover"
//                                 />
//                                 <div>
//                                     <h3 className="text-[19px] font-semibold text-gray-900">
//                                         {item.name}
//                                     </h3>
//                                     <p className="text-sm text-gray-500">{item.title}</p>
//                                 </div>
//                                 <img
//                                     src={comma}
//                                     alt="quote"
//                                     className="ml-auto w-4 h-4 text-gray-400"
//                                 />
//                             </div>
//                             <p className="text-[17px] text-[#1A1A1A] leading-relaxed">
//                                 {item.content}
//                             </p>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default TestimonialSlider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import comma from '../assets/Vector (70).svg';

const testimonials = [
  {
    name: "Cameron Williamson",
    title: "Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "Searches for multiplexes, property comparisons and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    name: "Esther Howard",
    title: "Marketing",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    name: "Devon Lane",
    title: "Developer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos.",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 bg-white">
      {/* Header */}
      <div
        style={{ fontFamily: 'Poppins' }}
        className="flex flex-col md:flex-row justify-between items-start mb-6 sm:mb-8 md:mb-10"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-tight font-semibold text-gray-900 mb-4 sm:mb-6 md:mb-0">
          What our customers are <br className="hidden md:block" />
          saying us?
        </h2>

        <div className="flex items-start gap-4 sm:gap-6 md:gap-10 text-[#1A1A1A]">
          {/* Happy People Block */}
          <div>
            <p className="text-xl sm:text-2xl md:text-[26px] font-semibold">10m+</p>
            <p className="text-sm sm:text-base text-gray-600">Happy People</p>
          </div>

          {/* Rating Block */}
          <div>
            <p className="text-xl sm:text-2xl md:text-[26px] font-semibold">4.88</p>
            <p className="text-sm sm:text-base text-gray-600">Overall rating</p>
            <div className="text-yellow-500 mt-1 space-x-1 text-xs sm:text-sm">
              {"★".repeat(5).split("").map((star, index) => (
                <span key={index}>{star}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Swiper
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.9,
            spaceBetween: 24,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ fontFamily: 'Poppins' }}
              className="bg-[#F9F9F9] p-4 sm:p-5 md:p-6 h-[280px] sm:h-[301px] rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-base sm:text-lg md:text-[19px] font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">{item.title}</p>
                </div>
                <img
                  src={comma}
                  alt="quote"
                  className="ml-auto w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
                />
              </div>
              <p className="text-sm sm:text-base md:text-[17px] text-[#1A1A1A] leading-relaxed line-clamp-5">
                {item.content}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
