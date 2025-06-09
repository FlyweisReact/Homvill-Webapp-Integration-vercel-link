import React from 'react'
import Navbar2 from '../Navbar2'
import sell from '../assets/sell3.svg'
import sell2 from '../assets/sell6.svg'
import vector from '../assets/Vector (77).svg'
import vector1 from '../assets/Vector (78).svg'
import vector2 from '../assets/Vector (79).svg'
import Footer from '../Footer'
const Seller2 = () => {
    return (
        <>
            <Navbar2 />
            <div
                className="bg-cover bg-center text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-10 lg:px-12"
                style={{ backgroundImage: `url(${sell})` }}
            >
                <h2
                    className="text-3xl sm:text-4xl lg:text-[48px] font-bold mulish-font"
                >
                    I am a seller
                </h2>
                <p
                    style={{ fontFamily: 'Poppins' }}
                    className="mt-5 text-xl sm:text-2xl lg:text-[32px] font-medium"
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div className="flex justify-center items-center bg-gray-100 mt-10">
                <div className="bg-pink-100 rounded-lg shadow-lg p-6 px-12 w-full">
                    <h1 className="md:text-[36px] text-xl mulish-font font-bold mb-2">
                        Become a Premier Agent partner
                    </h1>
                    <p style={{ fontFamily: 'Poppins' }} className="text-gray-700 text-[17px] mb-6">
                        HOMVIL connects Premier Agent partner with an active buyer every four seconds. As a Premier Agent partner, you’ll receive targeted advertising buyer leads, and detailed ROI reports.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/2">
                            <img src={sell2} />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            <div>
                                <h2 style={{ fontFamily: 'Poppins' }} className="text-[24px] font-semibold mb-2">
                                    Headline comes here...
                                </h2>
                                <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 text-[16px]">
                                    Lorem ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                            <button style={{ fontFamily: 'Poppins' }} className="bg-[#8A1538] text-white text-[32px] font-medium py-2 px-4 rounded-lg mt-4 self-start">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-4 sm:px-8 md:px-12 mt-8 text-start py-6 sm:py-8 md:py-10 bg-white">
                {/* Heading and Subheading */}
                <h1 className="text-lg sm:text-2xl md:text-[36px] mulish-font font-bold text-start mb-2 sm:mb-3 md:mb-4">
                    Find the right real estate solution for you
                </h1>
                <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 text-sm sm:text-base md:text-[17px] mb-6 sm:mb-8 md:mb-10 text-start">
                    Whether you work independently or lead a large team of agents, we have tailored options to grow your real estate network.
                </p>

                {/* Cards Section */}
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-24 w-full px-2 sm:px-3 md:px-4">
                    {/* Agent Solutions Card */}
                    {/* <div className="bg-[#FFE0E9] hover:bg-gradient-to-b hover:from-[#424242] hover:to-[#8A1538] hover:text-white rounded-3xl p-4 sm:p-5 md:p-6 flex-1 flex flex-col items-center text-center">
                        <div className="bg-white rounded-full shadow-md p-3 sm:p-4 mb-3 sm:mb-4">
                            <img src={vector} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="Agent Icon" />
                        </div>
                        <h2 style={{ fontFamily: 'Poppins' }} className="text-xl sm:text-2xl md:text-[32px] font-semibold mb-1 sm:mb-2">
                            Agent solutions
                        </h2>
                        <p style={{ fontFamily: 'Poppins' }} className="text-[#000000] hover:text-white text-xs sm:text-sm md:text-[16px] mb-4 sm:mb-5 md:mb-6">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        <button style={{ fontFamily: 'Poppins' }} className="bg-[#8A1538]  text-white font-semibold text-sm sm:text-lg md:text-[22px] py-1 sm:py-1.5 md:py-2 px-3 sm:px-4 rounded-lg">
                            Learn More
                        </button>
                    </div> */}
                    <div className="bg-[#FFE0E9] hover:bg-gradient-to-b hover:from-[#424242] hover:to-[#8A1538] hover:text-white rounded-3xl p-4 sm:p-5 md:p-6 flex-1 flex flex-col items-center text-center group transition-all duration-300">
    <div className="bg-white rounded-full shadow-md p-3 sm:p-4 mb-3 sm:mb-4">
        <img src={vector} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="Agent Icon" />
    </div>
    <h2 style={{ fontFamily: 'Poppins' }} className="text-xl sm:text-2xl md:text-[32px] font-semibold mb-1 sm:mb-2">
        Agent solutions
    </h2>
    <p style={{ fontFamily: 'Poppins' }} className="text-[#000000] group-hover:text-white text-xs sm:text-sm md:text-[16px] mb-4 sm:mb-5 md:mb-6 transition-all duration-300">
        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
    </p>
    <button
        style={{ fontFamily: 'Poppins' }}
        className="bg-[#8A1538] text-white group-hover:bg-white group-hover:text-[#8A1538] font-semibold text-sm sm:text-lg md:text-[22px] py-1 sm:py-1.5 md:py-2 px-3 sm:px-4 rounded-lg transition-all duration-300"
    >
        Learn More
    </button>
</div>


                    {/* Team Solutions Card */}
                    {/* <div className="bg-[#FFEEB3] rounded-3xl p-4 sm:p-5 md:p-6 flex-1 flex flex-col items-center text-center">
                        <div className="bg-white rounded-full shadow-md p-3 sm:p-4 mb-3 sm:mb-4">
                            <img src={vector1} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="Team Icon" />
                        </div>
                        <h2 style={{ fontFamily: 'Poppins' }} className="text-xl sm:text-2xl md:text-[32px] font-semibold mb-1 sm:mb-2">
                            Team solutions
                        </h2>
                        <p style={{ fontFamily: 'Poppins' }} className="text-[#000000] text-xs sm:text-sm md:text-[16px] mb-4 sm:mb-5 md:mb-6">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        <button style={{ fontFamily: 'Poppins' }} className="bg-[#E7C873] text-white font-semibold text-sm sm:text-lg md:text-[22px] py-1 sm:py-1.5 md:py-2 px-3 sm:px-4 rounded-lg">
                            Learn More
                        </button>
                    </div> */}
                    <div className="group bg-[#FFEEB3] hover:bg-[linear-gradient(180deg,_#424242_0%,_#E7C873_100%)] rounded-3xl p-4 sm:p-5 md:p-6 flex-1 flex flex-col items-center text-center transition-all duration-300">
  <div className="bg-white rounded-full shadow-md p-3 sm:p-4 mb-3 sm:mb-4">
    <img
      src={vector1}
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
      alt="Team Icon"
    />
  </div>

  <h2
    style={{ fontFamily: 'Poppins' }}
    className="text-xl sm:text-2xl md:text-[32px] font-semibold mb-1 sm:mb-2 transition-all duration-300 group-hover:text-white"
  >
    Team solutions
  </h2>

  <p
    style={{ fontFamily: 'Poppins' }}
    className="text-[#000000] text-xs sm:text-sm md:text-[16px] mb-4 sm:mb-5 md:mb-6 transition-all duration-300 group-hover:text-white"
  >
    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
  </p>

  <button
    style={{ fontFamily: 'Poppins' }}
    className="bg-[#E7C873] text-white group-hover:bg-white group-hover:text-[#E7C873] font-semibold text-sm sm:text-lg md:text-[22px] py-1 sm:py-1.5 md:py-2 px-3 sm:px-4 rounded-lg transition-all duration-300"
  >
    Learn More
  </button>
</div>


                    {/* Broker Solutions Card */}
                    <div className="bg-[#FFE0E9] hover:bg-gradient-to-b hover:from-[#424242] hover:to-[#8A1538] hover:text-white rounded-3xl p-4 sm:p-5 md:p-6 flex-1 flex flex-col items-center text-center group transition-all duration-300">
    <div className="bg-white rounded-full shadow-md p-3 sm:p-4 mb-3 sm:mb-4">
        <img src={vector2} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" alt="Agent Icon" />
    </div>
    <h2 style={{ fontFamily: 'Poppins' }} className="text-xl sm:text-2xl md:text-[32px] font-semibold mb-1 sm:mb-2">
        Broker solutions
    </h2>
    <p style={{ fontFamily: 'Poppins' }} className="text-[#000000] group-hover:text-white text-xs sm:text-sm md:text-[16px] mb-4 sm:mb-5 md:mb-6 transition-all duration-300">
        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
    </p>
    <button
        style={{ fontFamily: 'Poppins' }}
        className="bg-[#8A1538] text-white group-hover:bg-white group-hover:text-[#8A1538] font-semibold text-sm sm:text-lg md:text-[22px] py-1 sm:py-1.5 md:py-2 px-3 sm:px-4 rounded-lg transition-all duration-300"
    >
        Learn More
    </button>
</div>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Seller2