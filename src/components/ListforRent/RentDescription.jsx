// RentDescription component
import React, { useState, useEffect } from "react";
import sideImage from "../assets/right5.svg";
import Navbar2 from "../Navbar2";
import { useNavigate } from "react-router-dom";
import { FaLightbulb } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../store/slices/rentHomeSlice";

const RentDescription = () => {
  const dispatch = useDispatch();
  const formDataFromStore = useSelector((state) => state.rentHome);
  const [description, setDescription] = useState(formDataFromStore.Property_Listing_Description || '');
  const navigate = useNavigate();

  const handleNext = () => {
    const fullDesc = `${description} ${formDataFromStore.improvements ? `\nImprovements: ${formDataFromStore.improvements}` : ''}`;
    dispatch(updateFormData({ Property_Listing_Description: fullDesc }));
    navigate('/rentphotos');
  };

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full lg:w-2/3 p-6 md:p-12">
          <h2 className="text-2xl md:text-[40px] mulish-font font-bold mb-4 text-center sm:text-left">Description</h2>
          <p className="text-sm md:text-[28px] mulish-font font-medium text-[#000000] mb-4 text-center sm:text-left">
            Description of your home ?
          </p>
          <p style={{ fontFamily: 'Poppins' }} className="text-[20px]  text-gray-500 mb-8">Help Renters Get To Know Your Home</p>


          <div className=" space-y-3">
            <div>
              <label className="block text-[20px] font-semibold mulish-font text-gray-800 ">Listing Description</label>
              <textarea style={{ fontFamily: 'Poppins' }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 text-sm text-gray-600 resize-none h-24 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="You’ll love this spacious colonial nestled in the heart of Birmingham’s rolling..."
              ></textarea>
            </div>

            <div className="flex items-start space-x-2 text-[22px] text-gray-700">
              <FaLightbulb className="text-yellow-400 mulish-font text-[24px] mt-1" />
              <p>
                <span className="font-bold">Tips:</span> Ask ChatGPT to write nice description for your house.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mt-20 justify-between text-[20px] mulish-font gap-4 sm:gap-20">
            <button
              onClick={() => navigate('/rentlisting')}
              className="w-full border border-[#8A1538] text-[#8A1538] py-2 rounded-md font-semibold hover:bg-gray-100"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="w-full bg-[#8A1538] mulish-font text-white py-2 rounded-md font-semibold hover:bg-[#72152e]"
            >
              Next
            </button>
          </div>
        </div>

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

export default RentDescription;