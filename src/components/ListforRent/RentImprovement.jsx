// RentImprovement component
import React, { useState, useEffect } from "react";
import sideImage from "../assets/improve.svg";
import Navbar2 from "../Navbar2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../store/slices/rentHomeSlice";

const RentImprovement = () => {
  const dispatch = useDispatch();
  const formDataFromStore = useSelector((state) => state.rentHome);
  const [improvements, setImprovements] = useState(formDataFromStore.improvements || '');
  const navigate = useNavigate();

  const handleNext = () => {
    dispatch(updateFormData({ improvements }));
    navigate('/rentlisting');
  };

  return (
    <>
      <Navbar2 />
      <div className=" flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 flex flex-col justify-center">
          <div className=" mx-10 flex flex-col justify-center">
            <h2 className="text-2xl md:text-[40px] mulish-font font-bold mb-2 text-center lg:text-left">
              Improvements
            </h2>
            <p className="text-md md:text-[24px] mulish-font text-[#000000] mb-2 text-center lg:text-left">
              Have you made any improvements to your home?
            </p>
            <p style={{ fontFamily: 'Poppins' }} className="text-sm md:text-[16px] text-[#000000] mb-6 text-center lg:text-left">
              Enter any improvements you made (optional)
            </p>

            <textarea
              value={improvements}
              onChange={(e) => setImprovements(e.target.value)}
              rows={5}
              className="w-full p-4 bg-[#F9F9F9] border border-gray-200 rounded-md placeholder-gray-400 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#8A1538]"
              placeholder="E.g. I remodeled my kitchen, upgraded the HVAC system, added new roofing, and installed hardwood floors."
            />

            <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4 text-[18px]">
              <button
                onClick={() => navigate('/renthomfeature')}
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
        </div>

        <div className="hidden lg:block lg:w-1/3 sticky top-0 h-screen">
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

export default RentImprovement;