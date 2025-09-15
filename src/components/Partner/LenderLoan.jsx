import React from 'react'
import Navbar2 from '../Navbar2'
import sell from '../assets/land4.svg'
import sell2 from '../assets/landlord.svg'
import { useNavigate } from 'react-router-dom'
import bg from '../assets/ladies.svg'
import { FaPhone } from 'react-icons/fa';
import bannerImage from '../assets/b.svg';
import vector from '../assets/vectors.svg';
import vector1 from '../assets/vectors2.svg';
import vector2 from '../assets/vectors3.svg';
import Footer from '../Footer'
import ima from '../assets/ima.jpg'
const Landlord = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar2 />
            {/* Hero Section */}
            <div
                className="bg-cover bg-center text-white py-4 px-3 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-10 lg:px-12"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mulish-font"
                >
                    I am a lender or loan officer
                </h2>
                <p
                    style={{ fontFamily: 'Poppins' }}
                    className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-xl lg:text-[32px] font-medium"
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div className="bg-[#FFE0E9] px-12 py-10">
                {/* Title */}
                <h2 className="text-xl sm:text-2xl mulish-font md:text-[36px] font-semibold text-[#1A1A1A] mb-1">
                    Grow Your Purchase Pipeline
                </h2>
                <p style={{ fontFamily: 'Poppins' }} className="text-[#4B4B4B] text-[17px] mb-6">
                    Join thousands of loan officers who connect with potential borrowers on Zillow and Trulia.
                </p>

                {/* Banner Card */}
                <div
                    className="relative rounded-xl overflow-hidden h-48 md:h-60 flex items-center justify-center"
                    style={{
                        backgroundImage: `url(${bannerImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Dark overlay */}
                    {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        {/* Centered content */}

                </div>
            </div>
             <div className="flex flex-col px-3 sm:px-6 md:px-8 lg:px-12 mt-6 sm:mt-8 py-4 sm:py-6 md:py-8 lg:py-10 bg-white">
                            <h1 className="text-base sm:text-lg md:text-2xl lg:text-[36px] mulish-font font-bold text-start mb-2 sm:mb-3 md:mb-4">
                               How it works
                            </h1>
                            <p style={{ fontFamily: 'Poppins' }} className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[17px] mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-start">
                                Whether you work independently or lead a large team of agents, we have tailored options to grow your real estate network.
                            </p>
                            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-24 w-full px-2 sm:px-3 md:px-4">
                                <div className="bg-[#FFE0E9]  rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 flex-1 flex flex-col items-center text-center group transition-all duration-300">
                                    <div className="bg-white rounded-full shadow-md p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4">
                                        <img src={vector} className="w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16" alt="Agent Icon" />
                                    </div>
                                    <h2 style={{ fontFamily: 'Poppins' }} className="text-base sm:text-lg md:text-xl lg:text-[27px] leading-[1.2] font-semibold mb-1 sm:mb-2">
                                        Connect With Potential Borrowers
                                    </h2>
                                    <p style={{ fontFamily: 'Poppins' }} className="text-[#000000]  text-[10px] sm:text-xs md:text-sm lg:text-[16px] mb-3 sm:mb-4 md:mb-5 lg:mb-6 transition-all duration-300">
                                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                   
                                </div>
                                <div className=" bg-[#FFE0E9]   rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 flex-1 flex flex-col items-center text-center transition-all duration-300">
                                    <div className="bg-white rounded-full shadow-md p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4">
                                        <img
                                            src={vector1}
                                            className="w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16"
                                            alt="Team Icon"
                                        />
                                    </div>
                                    <h2
                                        style={{ fontFamily: 'Poppins' }}
                                        className="text-base sm:text-lg md:text-xl lg:text-[27px] font-semibold mb-1 sm:mb-2 transition-all duration-300 group-hover:text-white"
                                    >
                                        Get Contacts Instantly
                                    </h2>
                                    <p
                                        style={{ fontFamily: 'Poppins' }}
                                        className="text-[#000000] text-[10px] sm:text-xs md:text-sm lg:text-[16px] mb-3 sm:mb-4 md:mb-5 lg:mb-6 transition-all duration-300 group-hover:text-white"
                                    >
                                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                   
                                </div>
                                <div className="bg-[#FFE0E9]  rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 flex-1 flex flex-col items-center text-center group transition-all duration-300">
                                    <div className="bg-white rounded-full shadow-md p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4">
                                        <img src={vector2} className="w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16" alt="Broker Icon" />
                                    </div>
                                    <h2 style={{ fontFamily: 'Poppins' }} className="text-base sm:text-lg md:text-xl lg:text-[28px] font-semibold mb-1 sm:mb-2">
                                       We're Here To Help
                                    </h2>
                                    <p style={{ fontFamily: 'Poppins' }} className="text-[#000000] group-hover:text-white text-[10px] sm:text-xs md:text-sm lg:text-[16px] mb-3 sm:mb-4 md:mb-5 lg:mb-6 transition-all duration-300">
                                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <Footer/>
        </>
    )
}

export default Landlord