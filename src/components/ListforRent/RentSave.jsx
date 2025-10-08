// RentSave component
import React from "react";
import sideImage from "../assets/right3.svg";
import Navbar2 from "../Navbar2";
import { useNavigate } from "react-router-dom";
import { Pencil, MessageSquare, LineChart } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { useCreatePropertyMutation } from "../../store/api/propertyApiSlice";
import { resetForm } from "../../store/slices/rentHomeSlice";

const RentSave = () => {
  const formData = useSelector((state) => state.rentHome);
  const [createProperty, { isLoading, isError, error }] = useCreatePropertyMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      await createProperty(formData).unwrap();
      dispatch(resetForm());
      navigate('/selldash'); // Or rent dash if separate
    } catch (err) {
      console.error('Failed to create property:', err);
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full lg:w-2/3 p-6 md:p-12">
          <h2 className="text-2xl md:text-[40px] mulish-font font-bold mb-4 text-center sm:text-left">Your Listing is Posted!</h2>
          <p className="text-sm md:text-[28px] mulish-font font-medium text-[#000000] mb-6 text-center sm:text-left">
            <h2 className="text-[30px] mulish-font font-semibold mt-2">What is next?</h2>

          </p>

          <div className=" text-black font-sans">
            <div>

              <p className="mt-2 text-[24px] mulish-font font-medium text-black">
                Welcome to your Listing Dashboard. Here is everything you will need to manage your home rental, all from one convenient place.
              </p>
            </div>

            <div className="space-y-4 mt-8 mulish-font">
              <div className="flex items-start gap-3">
                <Pencil className="w-8 h-8 mt-1" />
                <span className="text-[24px] font-medium">View & edit your listing anytime.</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-8 h-8 mt-1" />
                <span className="text-[24px] font-medium">Receive messages and connect with interested renters.</span>
              </div>
              <div className="flex items-start gap-3">
                <LineChart className="w-8 h-8 mt-1" />
                <span className="text-[24px] font-medium">See how many people are discovering & favoriting your home.</span>
              </div>
            </div>

            {isError && <p className="text-red-500 mt-4">{error?.data?.message || 'An error occurred'}</p>}

            <button onClick={handleSave} disabled={isLoading} className="w-full mt-24 bg-[#8A1538] text-white py-2 rounded-md text-[20px] mulish-font font-medium">
              {isLoading ? 'Saving...' : 'Save'}
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

export default RentSave;