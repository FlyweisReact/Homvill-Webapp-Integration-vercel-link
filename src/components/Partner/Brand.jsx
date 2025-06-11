import React from 'react'
import Navbar2 from '../Navbar2'
import sell from '../assets/land4.svg'
import sell2 from '../assets/brand2.svg'
import { useNavigate } from 'react-router-dom'
import bgImg from '../assets/bgs.jpg'; // Replace with your background image
import Footer from '../Footer'
import bg from '../assets/brand.svg'
import ima from '../assets/ima.jpg'
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
                    I am a brand or local advisor
                </h2>
                <p
                    style={{ fontFamily: 'Poppins' }}
                    className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-xl lg:text-[32px] font-medium"
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div className="flex justify-center items-center bg-gray-100 mt-6 sm:mt-8 md:mt-10 px-3 sm:px-4">
                <div className="bg-pink-100 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-7xl">
                    <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-[36px] mulish-font font-bold mb-2 sm:mb-3">
                        Brand Advertising
                    </h1>
                    <p style={{ fontFamily: 'Poppins' }} className="text-gray-700 text-sm sm:text-base md:text-[17px] mb-4 sm:mb-6">
                        Tell your brand’s story across HomVill Group’s network of real estate sites.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                        <div className="w-full md:w-1/2">
                            <img src={sell2} className="w-full h-auto" alt="Premier Agent" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            <div>
                                <h2 style={{ fontFamily: 'Poppins' }} className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold mb-2">
                                    Headline comes here...
                                </h2>
                                <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 text-sm sm:text-base md:text-[16px]">
                                    Lorem ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                            {/* <button
                           
                                style={{ fontFamily: 'Poppins' }}
                                className="bg-[#8A1538] text-white text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium py-2 px-4 rounded-lg mt-3 sm:mt-4 self-start"
                            >
                                Get Started
                            </button>
                            <button
                           
                                style={{ fontFamily: 'Poppins' }}
                                className="bg-[#8A1538] text-white text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium py-2 px-4 rounded-lg mt-3 sm:mt-4 self-start"
                            >
                                Get Started
                            </button> */}
                            <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-4">
                                <button onClick={() => {
                                    navigate('/details');
                                }}
                                    style={{ fontFamily: 'Poppins' }}
                                    className="bg-[#8A1538] text-white text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium py-2 px-4 rounded-lg self-start"
                                >
                                    Get Started
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
               <div
      className=" relative bg-cover bg-center py-10 px-4"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className=" relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-white text-lg sm:text-xl md:text-[36px] mulish-font font-semibold mb-8">Our Network</h2>

        <div className="flex justify-center gap-6 flex-wrap">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-16 bg-gray-300 rounded-md mb-2"></div>
              <p className="text-white text-xs sm:text-sm font-semibold">Partners LOGO</p>
            </div>
          ))}
        </div>
      </div>
    </div>
            <Footer/>
            
        </>
    )
}

export default Landlord