
import React, { useState } from "react";
import sideImage from "../assets/right3.svg"; // Replace with your actual path
import Navbar2 from "../Navbar2";
import { useNavigate } from "react-router-dom";
const AddDetailsForm = () => {
  const [reasons, setReasons] = useState([]);

  const options = [
    "Upgrading my home",
    "Selling secondary home",
    "Relocating",
    "Downsizing my home",
    "Retiring",
    "Other",
  ];

  const toggleReason = (value) => {
    setReasons((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const navigate = useNavigate();

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Form Section */}
        <div className="w-full lg:w-2/3 p-6 md:p-12">
          <h2 className="text-2xl md:text-[40px] mulish-font font-bold mb-4 text-center sm:text-left">Add Details</h2>
          <p className="text-sm md:text-[28px] mulish-font font-medium text-[#000000] mb-6 text-center sm:text-left">
            Tell me something about yourself
          </p>

          <div style={{ fontFamily: 'Poppins' }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-[20px] font-medium mb-1">First Name</label>
              <input
                type="text"
                placeholder="Enter first name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Enter last name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 Enter phone number"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter email here"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Timeline Selection */}
          <h3 className="text-xl md:text-[40px] mulish-font text-[#1D1D1D] font-bold mb-5 mt-4 text-center sm:text-left">How soon you want to sell</h3>
          <p className="text-sm md:text-[28px] mulish-font text-[#000000] font-normal mb-4 text-center sm:text-left">When do you want to sell?</p>

          <div style={{ fontFamily: 'Poppins' }} className="grid grid-cols-2 gap-4 mb-6">
            {["< 1 week", "< 1 month", "< 2 months", "< 3 months"].map((time, idx) => (
              <div
                key={idx}
                className="border rounded-md px-4 py-2 text-start bg-gray-100 text-sm cursor-pointer hover:border-[#8A1538]"
              >
                {time}
              </div>
            ))}
          </div>
          <div className="">
            <h2 className="text-xl md:text-[40px] text-[#1D1D1D] mulish-font font-bold mb-5 text-center sm:text-left">
              Reason for selling your home?
            </h2>
            <p className="md:text-[28px] text-[#000000] font-normal mulish-font mb-6 text-center sm:text-left">
              We’ll tailor our service based on your needs. Select all that apply.
            </p>

            <div style={{ fontFamily: 'Poppins' }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {options.map((reason) => (
                <label
                  key={reason}
                  className={`flex items-center border rounded-md px-4 py-3 cursor-pointer text-sm font-medium transition ${
                    reasons.includes(reason) ? "border-[#8A1538] bg-[#FFF4F7]" : "bg-gray-100"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={reasons.includes(reason)}
                    onChange={() => toggleReason(reason)}
                    className="form-checkbox text-[#8A1538] w-5 h-5 mr-3 accent-[#8A1538]"
                  />
                  {reason}
                </label>
              ))}
            </div>
          </div>
          <h2 className="text-2xl md:text-[40px] mulish-font text-[#1D1D1D] font-bold mb-6 mt-4 text-center sm:text-left">Home Facts</h2>
          <p className="text-sm md:text-[28px] mulish-font font-normal text-[#000000] mb-6 text-center sm:text-left">
            Lets verify some home facts
          </p>

          <div style={{ fontFamily: 'Poppins' }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-[20px] font-medium mb-1">Year Build</label>
              <input
                type="text"
                placeholder="Enter here"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Lot size(Sq.ft)</label>
              <input
                type="text"
                placeholder="Enter here"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Finished(Sq.ft)</label>
              <input
                type="tel"
                placeholder="Enter here"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Bed Rooms</label>
              <input
                type="email"
                placeholder="Enter here"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Full Baths</label>
              <input
                type="email"
                placeholder="Enter here"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">1/2 Baths</label>
              <input
                type="email"
                placeholder="Enter here"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between text-[20px] mulish-font gap-4 sm:gap-20">
            <button onClick={() => navigate(-1)} className="w-full border border-[#8A1538] text-[#8A1538] py-2 rounded-md font-semibold hover:bg-gray-100">
              Back
            </button>
            <button   onClick={() => navigate('/homefeature')} className="w-full bg-[#8A1538] mulish-font text-white py-2 rounded-md font-semibold hover:bg-[#72152e]">
              Next
            </button>
          </div>
        </div>

        {/* Right Sticky Image Section */}
        <div className="hidden lg:block lg:w-1/3 sticky top-0 lg:h-screen">
          <img
            src={sideImage}
            alt="Scenic cabin"
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </div>
      </div>
    </>
  );
};

export default AddDetailsForm;