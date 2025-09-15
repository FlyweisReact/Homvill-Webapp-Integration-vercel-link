import React from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import bgImage from './assets/del.svg'
import { useNavigate } from 'react-router-dom'
const Applications = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar2 />
            <div
                className="bg-cover bg-center text-white py-6 px-4 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-10 lg:px-24"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mulish-font"
                >
                    Your Rental Applications
                </h2>
                <p
                    style={{ fontFamily: 'Poppins' }}
                    className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium"
                >
                    Lorem Ipsum Simply a dummy text
                </p>
            </div>
            <div className="bg-pink-200 p-4 md:px-24 flex flex-col items-start justify-start text-gray-800 border border-gray-300">
                <h2 style={{ fontFamily: 'Poppins' }} className="text-[40px] font-semibold mb-2">Find a rental you love</h2>
                <p style={{ fontFamily: 'Poppins' }} className="text-[17px] mb-2">Browse and apply for rentals all in one place. With appname applications you're one step closer to finding your new home.</p>
                {/* <p className="text-sm mb-2 mulish-font"><strong>Save </strong> time and avoid multiple fees with one application, one payment.</p>
          <p className="text-sm mb-2 mulsih-font">View your credit and background check before submitting.</p>
          <p className="text-sm mb-2 mulish-font">Apply to as many participating appname listings as you'd like - just $5 for 30 days.</p> */}
                <p className="text-[16px]  mulish-font">
                    <span className="text-[22px] font-bold">Save</span> time and avoid multiple fees with one application, one payment.
                </p>
                <p className="text-[16px] mb-2 mulish-font">
                    <span className="text-[22px] font-bold">View</span> your credit and background check before submitting.
                </p>
                <p className="text-[16px] mb-2 mulish-font">
                    <span className="text-[22px] font-bold">Apply</span> to as many participating appname listings as you'd like - just $5 for 30 days.
                </p>

                <button  onClick={() => navigate('/properties')} className="bg-maroon-700 text-white mulish-font px-8 py-2 rounded mt-4 bg-[#8A1538]">
                    View all rentals
                </button>
            </div>
            <Footer />
        </>
    )
}

export default Applications