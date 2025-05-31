import React, { useState } from 'react';
import comma from '../assets/Vector (70).svg'

const testimonials = [
  {
    name: 'Cameron Williamson',
    role: 'Designer',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.',
  },
  {
    name: 'John Smith',
    role: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote: 'Fantastic experience! The platform made finding the right home so simple and fast. Will recommend to others!',
  },
  {
    name: 'Sophia Lee',
    role: 'Marketing Lead',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    quote: 'User interface is intuitive and really helpful. Helped me compare properties and save money.',
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { name, role, image, quote } = testimonials[current];

  return (
    <div style={{fontFamily:'Poppins'}} className="w-full px-8 md:px-16 py-10 bg-white flex flex-col lg:flex-row justify-between items-start gap-8">
      {/* Left Side */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-[40px] leading-[1.2] font-semibold mb-4">What our customers are saying us?</h2>
        <p className="text-[#1A1A1A] mb-6">
          Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
        </p>
        <div className="flex items-start gap-8">
          <div className='text-[#1A1A1A]'>
            <p className="text-2xl font-semibold">10m+</p>
            <p className=" text-sm">Happy People</p>
          </div>
          <div className='text-[#1A1A1A]'>
            <p className="text-2xl font-semibold">4.88</p>
            
            <p className=" text-sm">Overall rating</p>
            <p className="text-yellow-500 text-sm">★★★★★</p>
          </div>
        </div>
      </div>

      {/* Right Side - Testimonial */}
      <div className="flex-1 bg-white">
        <div className="bg-white p-6  relative">
          <div className="flex items-center gap-4 mb-4">
            <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="text-[#1A1A1A] font-medium">{name}</p>
              <p className="text-[#1A1A1A] text-sm">{role}</p>
            </div>
            <img src={comma} className="ml-auto text-2xl md:text-3xl  text-gray-400"></img>
          </div>
          <p className="text-[#1A1A1A] text-[19px]">{quote}</p>

          {/* Controls */}
          <div className="flex justify-start gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-xl flex items-center justify-center"
            >
              &lt;
            </button>
            <button
              onClick={nextTestimonial}
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-xl flex items-center justify-center"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
