import React from 'react'
import Navbar2 from '../Navbar2'
import sell from '../assets/land4.svg'
import sell2 from '../assets/landlord.svg'
import { useNavigate } from 'react-router-dom'
import bg from '../assets/bg3.jpg'
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
                    I am a landlord
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
                        Become a Premier Agent partner
                    </h1>
                    <p style={{ fontFamily: 'Poppins' }} className="text-gray-700 text-sm sm:text-base md:text-[17px] mb-4 sm:mb-6">
                        HOMVIL connects Premier Agent partner with an active buyer every four seconds. As a Premier Agent partner, you’ll receive targeted advertising buyer leads, and detailed ROI reports.
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
                                    Post Your Listing
                                </button>
                                <button onClick={() => {
    navigate('/selldash');
  }}
                                    style={{ fontFamily: 'Poppins' }}
                                    className="bg-white text-[#8A1538] text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium py-2 px-4 rounded-lg self-start"
                                >
                                    View Your Listings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div
                    className="relative w-full bg-cover bg-center min-h-[250px] sm:min-h-[350px] md:min-h-[450px] flex items-center justify-center px-4 sm:px-6 md:px-16"
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#00000099] z-0"></div>

                    {/* Inner container */}
                    <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-white">
                        {/* Centered Heading */}
                        <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-[36px] mulish-font leading-[1.3] font-semibold mb-4 sm:mb-6">
                            Take the guesswork out of managing<br className="block sm:inline" /> your business
                        </h2>

                        {/* Flex content below heading */}
                        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 sm:gap-6">
                            {/* Left Image */}
                            <div className="w-full md:w-[40%] flex justify-center md:justify-start">
                                <img
                                    src={ima}
                                    alt="House"
                                    className="rounded-2xl shadow-2xl w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] object-cover"
                                />
                            </div>

                            {/* Right Text Block */}
                            <div className="w-full md:w-[60%] text-center md:text-left space-y-4 sm:space-y-6 md:space-y-8">
                                <h3 className="text-base sm:text-lg md:text-xl lg:text-[40px] mulish-font font-bold">
                                    Price your rental competitively
                                </h3>
                                <p className="text-xs sm:text-sm md:text-[20px] mulish-font leading-[1.2] text-gray-200 max-w-xl">
                                    Use our pricing tools to optimize the return on investment for your property.
                                </p>
                                <button className="mt-4 sm:mt-6 md:mt-8 bg-white text-[#8A1538] text-lg sm:text-xl md:text-2xl lg:text-[32px] font-semibold px-4 sm:px-6 md:px-8 py-1 sm:py-2 rounded-md hover:bg-gray-200 transition-all duration-300">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Landlord