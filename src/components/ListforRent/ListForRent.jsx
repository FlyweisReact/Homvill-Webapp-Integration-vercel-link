import React from 'react'
import bgImage from '../assets/bg12.svg'
import { FaSearch } from "react-icons/fa";
import { useAuth } from '../Authprovider/AuthContext';
import Footer from '../Footer';
import woman from '../assets/woman.svg'
import saving from '../assets/saving.svg'
import new1 from '../assets/new.svg'
import Testimonial from '../Sell/Testimonial'
import right from '../assets/right.jpg'
import left from '../assets/left1.jpg'
import PropertiesSlider from '../Sell/PropertiesSlider'
import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
const Review = () => {
  const cards = [
    {
      img: woman,
      title: 'Partner with a neighborhood real estate pro',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      img: saving,
      title: 'Reduce selling costs and boost your returns',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      img: new1,
      title: 'Showcase your home to the right audience',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ];
   const { isLoggedIn } = useAuth();
  return (
    <>
      {/* <Navbar /> */}
       {isLoggedIn ? <Navbar2 /> : <Navbar />}
      <div
        className="w-full h-[260px] bg-cover bg-center flex items-center px-6 sm:px-24"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div style={{ fontFamily: 'Poppins' }} className="text-white">
          {/* <h1 className="text-3xl sm:text-5xl font-semibold leading-snug">
          Sell your home with <br/> confidence
        </h1> */}
          <h1 className="text-3xl sm:text-[45px] font-semibold leading-[1.1] text-white">
            <span className="block mb-2">List your home for rent</span>
            <span className="block">with confidence</span>
          </h1>

          <p className="text-base sm:text-[30px] mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="mt-4 flex items-center bg-white rounded-lg overflow-hidden w-full max-w-md">
            <input
              type="text"
              placeholder="Enter your property address you want to sell"
              className="flex-1 px-4 py-3 text-sm sm:text-base text-gray-700 outline-none"
            />
            <button className="bg-[#8A1538] hover:bg-[#72152e] text-white p-3 mr-2 rounded-lg">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      <PropertiesSlider />

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 px-20 py-10 place-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#FFE0E9] hover:bg-gradient-to-b hover:from-[#424242] hover:to-[#8A1538] text-[#000000] hover:text-white rounded-xl p-4 sm:p-6 w-full max-w-[360px] text-center shadow-md transition-colors duration-300"
          >

            <div className="bg-white rounded-t-full w-24 h-24 sm:w-32 sm:h-32 mx-auto flex items-center justify-center shadow-sm mb-4">
              <img
                src={card.img}
                alt="icon"
                className="h-20 sm:h-32 w-auto object-contain"
              />
            </div>
            <h3
              style={{ fontFamily: 'Poppins' }}
              className="text-base sm:text-lg  font-semibold mb-2"
            >
              {card.title}
            </h3>
            <p
              style={{ fontFamily: 'Poppins' }}
              className="text-sm sm:text-[16px]"
            >
              {card.desc}
            </p>
          </div>
        ))}
      </div>
      <Testimonial />
      {/* <div style={{fontFamily:'Poppins'}} className="w-full bg-[#F7F7F7] px-4 md:px-16 py-12 space-y-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-xl md:text-[32px] text-[#000000] font-semibold mb-2">
              You can sell directly to Opendoor hassle-free
            </h3>
            <p className="text-[#000000] text-[20px]  md:text-[20px] ">
              Get an all-cash offer from our trusted partner, Opendoor, to sell your home on your timeline and avoid the hassle of showings.*
            </p>
          </div>
          <img
            src={right}
            alt="Opendoor"
            className="flex-1 rounded-lg object-cover w-full max-w-md"
          />
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="flex-1">
            <h3 className="text-xl md:text-[32px] leading-[1.2] text-[#000000] font-semibold mb-2">
              You can sell for more money with a app name partner agent
            </h3>
            <p className="text-[#000000] text-[20px] md:text-[20px]">
              Select app partner agents offer Showcase listings, which sell for 2% more – that’s more than $9K on a home sold at the average home sales price
            </p>
          </div>
          <img
            src={left}
            alt="Partner Agent"
            className="flex-1 rounded-lg object-cover w-full max-w-md"
          />
        </div>
      </div> */}
      <div style={{ fontFamily: 'Poppins' }} className="w-full bg-[#F7F7F7] px-4 md:px-8 lg:px-20 py-8 lg:py-12 space-y-12">
       
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-[32px] text-[#000000] font-semibold mb-3">
              You can sell directly to Opendoor hassle-free
            </h3>
            <p className="text-[#000000] text-base sm:text-lg lg:text-[20px] leading-relaxed">
              Get an all-cash offer from our trusted partner, Opendoor, to sell your home on your timeline and avoid the hassle of showings.*
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={right}
              alt="Opendoor"
              className="rounded-lg object-cover w-full h-auto max-w-full"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-[32px] text-[#000000] font-semibold mb-3 leading-tight">
              You can sell for more money with a app name partner agent
            </h3>
            <p className="text-[#000000] text-base sm:text-lg lg:text-[20px] leading-relaxed">
              Select app partner agents offer Showcase listings, which sell for 2% more – that’s more than $9K on a home sold at the average home sales price
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={left}
              alt="Partner Agent"
              className="rounded-lg object-cover w-full h-auto max-w-full"
            />
          </div>
        </div>
      </div>
 <Footer/>

    </>
  )
}

export default Review