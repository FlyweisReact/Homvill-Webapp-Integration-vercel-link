
import React from 'react';
import Navbar from '../Navbar';
import about from '../assets/about.svg';
import map from '../assets/map3.svg'
import AboutSlider from './AboutSlider'
import Testimonial from './Testimonial'
import Footer from '../Footer';
import garden from '../assets/garden.jpg'
const About = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 md:py-0  py-10 gap-10 bg-white">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl lg:text-[55px]  font-bold text-[#333333] mb-4 font-[Poppins] leading-[1.2]">
                        Affordable property<br />service
                    </h2>
                    <p className="text-[12px]  lg:text-[16px] text-[#333333cc] mb-6 leading-relaxed font-[Poppins] max-w-md mx-auto md:mx-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                    </p>
                    <button className="bg-[#7A0C2E] text-white text-[16px] md:text-[18px] font-medium py-2 px-6 rounded-lg font-[Poppins]">
                        Learn More
                    </button>
                </div>

                <div className="w-full md:w-1/2">
                    <img src={about} alt="House" className="w-full max-w-md mx-auto md:max-w-full" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-12 mt-10 bg-white gap-10">
                {/* Left Text Section */}
                <div className="w-full lg:w-1/2 font-[Poppins] text-center lg:text-left">
                    <h2 className="text-3xl text-[7vw] lg:text-[48px] font-bold text-gray-900 mb-6 leading-[1.3]">
                        Our secure partners <br /> helps you.
                    </h2>
                    <p className="text-[16px] lg:text-[18px] text-[#333333CC] mb-4 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                    </p>
                    <p className="text-[16px] lg:text-[18px] text-[#333333CC] mb-4 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                    </p>
                    <p className="text-[16px] lg:text-[18px] text-[#333333CC] leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                    </p>
                </div>

                {/* Partner Logos Grid */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 justify-items-center">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="w-[120px] sm:w-[130px] lg:w-[164px] h-[70px] sm:h-[80px] lg:h-[100px] bg-[#D9D9D9] rounded-xl mb-2"></div>
                            <span className="text-[16px] lg:text-[25px] font-[Poppins] font-semibold text-gray-800">
                                Partners LOGO
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col bg-[#F7F7F7] mt-10 mb-12 md:flex-row items-center px-4 sm:px-8 md:px-12 w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                <div className="md:w-1/2 font-[Poppins] px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 flex flex-col justify-center">
                    <h2 className="text-2xl sm:text-3xl font-bold font-[Poppins] text-gray-800 mb-4 md:mb-6">Visit our office</h2>
                    <p className="text-base sm:text-lg md:text-[18px] text-[#333333CC] mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                    </p>
                    <p className="text-base sm:text-lg md:text-[18px] text-[#333333CC] mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                    </p>
                    <p className="text-base sm:text-lg md:text-[18px] text-[#333333CC]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                    </p>
                </div>
                <div className="md:w-1/2 w-full">
                    <img
                        src={map}
                        alt="Map"
                        className="w-full h-auto md:h-full object-cover"
                    />
                </div>
            </div>
            <AboutSlider />
            <Testimonial />
            {/* <div
                className="h-[687px] bg-cover bg-center flex items-center justify-start px-12"
                style={{ backgroundImage: `url(${garden})`, fontFamily: 'Poppins' }}
            >
                <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact</h2>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Us!</h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-[#F8EDEF] placeholder-gray-500"
                        />
                        <input
                            type="email"
                            placeholder="Your mail id"
                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-[#F8EDEF] placeholder-gray-500"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#830A35] text-white py-3 rounded-md font-semibold hover:bg-[#6e082c] transition"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div> */}
            <div
      className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-[687px] bg-cover bg-center flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-12"
      style={{ backgroundImage: `url(${garden})`, fontFamily: 'Poppins' }}
    >
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg w-full max-w-[90%] sm:max-w-[80%] md:max-w-lg lg:max-w-md">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Contact
        </h2>
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Us!
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <form className="space-y-3 sm:space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-2 sm:p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-[#F8EDEF] placeholder-gray-500 text-sm sm:text-base"
          />
          <input
            type="email"
            placeholder="Your mail id"
            className="w-full p-2 sm:p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-[#F8EDEF] placeholder-gray-500 text-sm sm:text-base"
          />
          <button
            type="submit"
            className="w-full bg-[#830A35] text-white py-2 sm:py-3 rounded-md font-semibold hover:bg-[#6e082c] transition text-sm sm:text-base"
          >
            Send
          </button>
        </form>
      </div>
    </div>
            <Footer/>
        </>
    );
};

export default About;
