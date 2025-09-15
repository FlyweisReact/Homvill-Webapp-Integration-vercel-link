import React from 'react'
import Navbar2 from './Navbar2'
import sell from './assets/render.svg'
import sell2 from './assets/landlord.svg'
import { useNavigate } from 'react-router-dom'
import bg from './assets/bg3.jpg'
import Footer from './Footer'
import ima from './assets/ger.gif'
const Landlord = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar2 />
      {/* Hero Section */}
      <div
        className="bg-cover bg-center text-white py-4 px-3 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-10 lg:px-12"
        style={{ backgroundImage: `url(${sell})` }}
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mulish-font"
        >
          Saved searches
        </h2>
        <p
          style={{ fontFamily: 'Poppins' }}
          className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-xl lg:text-[32px] font-medium"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 bg-[#F7F7F7] px-6 md:px-12 py-8 gap-8">
        {/* Left Section: Text and Button */}
        <div className="flex-1 text-center md:text-left">
          <h2
            style={{ fontFamily: 'Poppins' }}
            className="text-[28px] md:text-[40px] font-bold text-gray-900 mb-2"
          >
            Get updates on your saved searches
          </h2>
          <p
            style={{ fontFamily: 'Poppins' }}
            className="text-gray-600 text-[16px] md:text-[17px] mb-4"
          >
            Saving your updates time and we'll let you know whenever a match comes on the market.
          </p>
          <button
            onClick={() => navigate('/properties')}
            className="bg-[#8A1538] mulish-font text-[20px] md:text-[32px] text-white px-6 py-2 rounded-md hover:bg-red-900 transition"
          >
            Search for homes
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={ima}
            alt="Saved Searches Illustration"
            className="w-[250px] md:w-auto h-auto"
          />
        </div>
      </div>

      <Footer />

    </>
  )
}

export default Landlord
