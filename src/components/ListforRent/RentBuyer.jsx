// RentBuyer component
import React, { useState, useEffect } from "react";
import sideImage from "../assets/right10.svg";
import Navbar2 from "../Navbar2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../store/slices/rentHomeSlice";

const RentBuyer = () => {
  const dispatch = useDispatch();
  const formDataFromStore = useSelector((state) => state.rentHome);
  const [negotiateCommission, setNegotiateCommission] = useState(formDataFromStore.i_am_able_negotiate_on_Commision || false);
  const [commissionPercentage, setCommissionPercentage] = useState(formDataFromStore.commission_percentage || 0);
  const [workWithAgent, setWorkWithAgent] = useState(formDataFromStore.i_will_work_with_agent || false);
  const [onlyDirect, setOnlyDirect] = useState(formDataFromStore.i_am_only_willing_to_Directly || false);
  const [creditRefund, setCreditRefund] = useState(formDataFromStore.Buyers_Credit_Refund || 'NO');
  const navigate = useNavigate();

  const handleNext = () => {
    dispatch(updateFormData({
      i_am_able_negotiate_on_Commision: negotiateCommission,
      commission_percentage: commissionPercentage,
      i_will_work_with_agent: workWithAgent,
      i_am_only_willing_to_Directly: onlyDirect,
      Buyers_Credit_Refund: creditRefund,
    }));
    navigate('/rentopen');
  };

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full lg:w-2/3 p-6 md:p-12">

          <div className=" space-y-6  text-black">
            <div>
              <p className="md:text-[30px] text-[#000000] font-medium mulish-font mb-2">Are you willing to work with a renter’s agent?</p>
              <div className="md:text-[24px] mulish-font font-normal text-[#1D1D1D] space-y-2">
                <label className="flex  items-start gap-2">
                  <input type="radio" name="buyerAgent" checked={negotiateCommission} onChange={() => {
                    setNegotiateCommission(true);
                    setWorkWithAgent(false);
                    setOnlyDirect(false);
                  }} className="mt-4" />
                  <span>
                    I am able to work with a renter’s agent, and willing to negotiate
                    on commission
                  </span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="radio" name="buyerAgent" checked={workWithAgent} onChange={() => {
                    setNegotiateCommission(false);
                    setWorkWithAgent(true);
                    setOnlyDirect(false);
                  }} className="mt-4" />
                  <span>
                    I will work with a renter’s agent, but i won’t pay a renter agent’s
                    commission
                  </span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="radio" name="buyerAgent" checked={onlyDirect} onChange={() => {
                    setNegotiateCommission(false);
                    setWorkWithAgent(false);
                    setOnlyDirect(true);
                  }} className="mt-4" />
                  <span>I am only willing to work renters directly</span>
                </label>
              </div>
            </div>

            {negotiateCommission && (
              <div className="mb-4">
                <label className="block mb-2 md:text-[23px]  mt-4 text-[#000000] font-medium mulish-font">Add Percentage</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={commissionPercentage}
                    onChange={(e) => setCommissionPercentage(Number(e.target.value))}
                    placeholder="Enter here"
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm w-[350px] focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <span className="text-base font-semibold">%</span>
                </div>
              </div>
            )}

            <div>
              <p className="mb-2 md:text-[30px] text-[#000000] font-medium mulish-font">Renters Credit or refund ?</p>
              <div className="space-y-2 md:text-[24px] mulish-font font-normal text-[#1D1D1D]">
                <label className="flex items-center gap-2">
                  <input type="radio" name="buyerCredit" checked={creditRefund === 'Yes'} onChange={() => setCreditRefund('Yes')} />
                  <span>Renters Credit</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="buyerCredit" checked={creditRefund === 'NO'} onChange={() => setCreditRefund('NO')} />
                  <span>No Credit or Refund</span>
                </label>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between text-[20px] mt-10 mulish-font gap-4 sm:gap-20">
            <button
              onClick={() => navigate('/rentvideo')}
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

export default RentBuyer;