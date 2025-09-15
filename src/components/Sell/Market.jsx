import React from 'react';
import bgImage from '../assets/bg4.svg'
import { FaSearch, FaArrowUp } from 'react-icons/fa';
import { useAuth } from '../Authprovider/AuthContext';
import Navbar from '../Navbar';
import Navbar2 from '../Navbar2';
import Map from '../assets/map.svg'; // Adjust path if needed
import Footer from '../Footer'

const HousingMarket = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>
            {/* <Navbar /> */}
            {isLoggedIn ? <Navbar2 /> : <Navbar />}
            <div
                className="w-full bg-cover bg-center text-white h-[500px] px-14"
                style={{ backgroundImage: `url(${bgImage})`, fontFamily: 'Poppins' }}
            >
                <div className=" mx-auto text-center space-y-6">
                    <div className='text-start pt-10 ps-4 md:ps-8'>
                        <h2 className="text-2xl md:text-[48px] font-semibold mulish-font">
                            United States Housing Market
                        </h2>

                        {/* Search Input */}
                        <div className="relative max-w-md  pt-10">
                            <input
                                type="text"
                                placeholder="Enter the city"
                                className="w-full py-3 pl-4 pr-12 rounded-md text-black focus:outline-none text-base"
                            />
                            <button className="absolute  right-2 bottom-1 text-white bg-[#8b004f] p-3  rounded-md">
                                <FaSearch size={16} />
                            </button>
                        </div>
                    </div>


                    <div className="text-center space-y-6 pt-6">
                        <div className="text-3xl md:text-[42px] font-bold mulish-font">
                            $357,469
                        </div>
                        <div className="inline-flex items-center bg-[#31CE79]/30 text-white text-sm font-semibold px-3 py-1 rounded-full mx-auto">
                            <FaArrowUp className="mr-1" /> 25% /year
                        </div>
                    </div>


                    {/* Description */}
                    <p style={{ fontFamily: 'Poppins' }} className="text-white text-base md:text-[32px] leading-snug mx-8">
                        The average United States home value is $357,469, up 2.5% over the past year and goes to pending in around 24 days.
                    </p>
                </div>
            </div>
            {/* <div className="flex flex-col md:flex-row items-center justify-center bg-[##F7F7F7] mt-12  px-6 py-12  md:p-10 rounded-lg shadow-md">
                <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
                    <img src={Map} alt="USA Map" className="w-full h-auto rounded-md" />
                </div>

                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-[40px] font-semibold text-[#1D1D1D] mb-4 mulish-font">United States Key Takeaways</h2>
                    <p className="text-[36px] mulish-font text-[#1D1D1D] mb-2">
                        <span style={{fontWeight:'bold'}} >Typical Home Values:</span>{' '}
                        <span className="text-[#1D1D1D80]">$357,469</span>
                    </p>
                    <p className="text-[36px] mulish-font text-[#1D1D1D] mb-2">
                        <span style={{fontWeight:'bold'}} >1-year Value Change:</span>{' '}
                        <span className="text-[#1D1D1D80]">+2.5%</span>
                    </p>
                    <p className="text-[32px] text-[#1D1D1D80]">(Data through November 30, 2024)</p>
                </div>
            </div> */}
            <div className="flex flex-col lg:flex-row items-center justify-center bg-[#F7F7F7] mt-12 px-4 py-10 lg:p-14 rounded-lg shadow-md">
                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:mr-8">
                    <img src={Map} alt="USA Map" className="w-full h-auto rounded-md" />
                </div>

                {/* Right Side - Content */}
                <div className="w-full lg:w-1/2 text-left space-y-6">
                    <h2 className="text-2xl lg:text-[40px] font-semibold text-[#1D1D1D] mulish-font">
                        United States Key Takeaways
                    </h2>

                    <p className="text-xl lg:text-[36px] mulish-font text-[#1D1D1D]">
                        <span className="font-bold">Typical Home Values:</span>{' '}
                        <span className="text-[#1D1D1D80]">$357,469</span>
                    </p>

                    <p className="text-xl lg:text-[36px] mulish-font text-[#1D1D1D]">
                        <span className="font-bold">1-year Value Change:</span>{' '}
                        <span className="text-[#1D1D1D80]">+2.5%</span>
                    </p>

                    <p className="text-base lg:text-[32px] text-[#1D1D1D80]">
                        (Data through November 30, 2024)
                    </p>
                </div>
            </div>
            <Footer/>

        </>
    );
};

export default HousingMarket;
