import React from 'react'
import Navbar from '../Navbar'
import bgImage from '../assets/bg6.svg'
import worker from '../assets/worker.svg'
import build from '../assets/build.svg'
import Buildslider from './Buildslider'
import { useNavigate } from 'react-router-dom'
import Buildslider2 from './Buildslider2'
import Buildslider3 from './Buildslider3'
import Footer from '../Footer'
const Build = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div
                className="bg-cover bg-center text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-12 lg:px-12"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h2
                    className="text-2xl sm:text-3xl lg:text-[48px] font-bold mulish-font"
                >
                    Builders near your locality 
                </h2>
                <p
                    style={{ fontFamily: 'Poppins' }}
                    className="mt-3 sm:mt-4 lg:mt-5 text-lg sm:text-xl lg:text-[32px] font-medium"
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            {/* <div className="bg-[#F7F7F7] py-4 px-12 mt-10 mb-8 flex items-center justify-between  mx-auto">
            
                <div className="flex items-center space-x-4">
                    <img
                        src={worker}
                        alt="Worker"
                        className="w-36 h-36"
                    />
                    <div>
                        <div className="flex items-center space-x-2 mulish-font">
                            <span className="font-bold text-[36px]">I am a</span>
                            <select className="border border-[#5b003b] text-black text-[30px] font-bold px-2  rounded focus:outline-none">
                                <option>Electrical Contractors</option>
                                <option>Plumbing Contractors</option>
                                <option>HVAC Contractors</option>
                                <option>Roofing Contractors</option>
                                <option>Masonry Contractors</option>
                                <option>Maintenance personal</option>
                                <option>Carpentry Contractors</option>
                                <option>Paintaing Contractors</option>
                                <option>Landscaping</option>
                                <option>Other</option>

                            </select>
                        </div>
                        <p className="text-[24px] mulish-font text-[#1D1D1D]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                        </p>
                    </div>
                </div>
                <button style={{ fontFamily: 'Poppins' }} className="bg-[#8A1538] text-white w-[364px] px-4 py-2 text-[15px] rounded-lg transition">
                    Click Here To Register With Us
                </button>
            </div> */}
            <div className="bg-[#F7F7F7] py-4 px-4 sm:px-6 md:px-8 lg:px-12 mt-10 mb-8 flex flex-col lg:flex-row items-center justify-between mx-auto">
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
                    <img
                        src={worker}
                        alt="Worker"
                        className="w-24 sm:w-28 md:w-32 lg:w-36 h-24 sm:h-28 md:h-32 lg:h-36 object-cover"
                    />
                    <div className="text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 mulish-font">
                            <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[36px]">I am a</span>
                            <select className="border border-[#5b003b] text-black text-lg sm:text-xl md:text-2xl lg:text-[30px] font-bold px-2 py-1 lg:py-0 rounded focus:outline-none w-full sm:w-auto">
                                <option>Electrical Contractors</option>
                                <option>Plumbing Contractors</option>
                                <option>HVAC Contractors</option>
                                <option>Roofing Contractors</option>
                                <option>Masonry Contractors</option>
                                <option>Maintenance personal</option>
                                <option>Carpentry Contractors</option>
                                <option>Paintaing Contractors</option>
                                <option>Landscaping</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <p className="text-base sm:text-lg md:text-xl lg:text-[24px] mulish-font text-[#1D1D1D] mt-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                        </p>
                    </div>
                </div>
                <button  onClick={() => navigate('/signin')}
                    style={{ fontFamily: 'Poppins' }}
                    className="bg-[#8A1538] text-white w-full sm:w-[300px] md:w-[320px] lg:w-[364px] px-4 py-2 text-sm md:text-base lg:text-[15px] rounded-lg transition mt-4 lg:mt-0"
                >
                    Click Here To Register With Us
                </button>
            </div>
            {/* <div className="bg-white py-10 px-6 max-w-7xl mx-auto">
              
                <div className="mb-6">
                    <h2 className="text-2xl md:text-[36px] mulish-font text-[#000000] font-bold text-black">
                        Build Your Dream Home With HomVill
                    </h2>
                    <p style={{ fontFamily: 'Poppins' }} className="text-[17px] text-[#1A1A1A] mt-1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

    
                <div className="flex flex-col md:flex-row items-center gap-8">
                  
                    <div className="flex-shrink-0">
                        <img
                            src={build}
                            alt="Construction"
                            className="rounded-lg w-[641px] h-auto object-cover"
                        />
                    </div>

                   
                    <div style={{ fontFamily: 'Poppins' }} className="flex-1">
                        <h3 className="text-[24px] font-semibold text-black mb-2">Headline comes here…</h3>
                        <p className="text-[14px] text-gray-600">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
            </div> */}
            <div className="bg-[#F7F7F7] py-10 px-4 mt-12 sm:px-6 lg:px-12 mx-auto">
                <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl lg:text-[36px] mulish-font text-[#000000] font-bold text-black">
                        Build Your Dream Home With HomVill
                    </h2>
                    <p style={{ fontFamily: 'Poppins' }} className="text-sm sm:text-base lg:text-[17px] text-[#1A1A1A] mt-1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                    <div className="flex-shrink-0 w-full sm:w-[400px] lg:w-[641px]">
                        <img
                            src={build}
                            alt="Construction"
                            className="rounded-lg w-full lg:w-[641px] h-auto object-cover"
                        />
                    </div>

                    <div style={{ fontFamily: 'Poppins' }} className="flex-1">
                        <h3 className="text-lg sm:text-xl lg:text-[24px] font-semibold text-black mb-2">Headline comes here…</h3>
                        <p className="text-xs sm:text-sm lg:text-[14px] text-gray-600">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white py-8 px-4 mt-4 sm:px-6 lg:px-12 mx-auto">
                <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl lg:text-[36px] mulish-font text-[#000000] font-bold text-black">
                       Our Professional Builders 
                    </h2>
                    <p style={{ fontFamily: 'Poppins' }} className="text-sm sm:text-base lg:text-[17px] text-[#1A1A1A] mt-1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy since the 1500s.
                    </p>
                </div>
            </div>
            <Buildslider/>
            <Buildslider2/>
            <Buildslider3/>
            <Footer/>
        </>
    )
}

export default Build