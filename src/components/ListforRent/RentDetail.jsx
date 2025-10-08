// RentDetail component
import React, { useState, useEffect } from "react";
import sideImage from "../assets/right3.svg";
import Navbar2 from "../Navbar2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../store/slices/rentHomeSlice"; // Use rent slice

const RentDetail = () => {
  const dispatch = useDispatch();
  const formDataFromStore = useSelector((state) => state.rentHome);
  const [formData, setFormData] = useState({
    firstName: formDataFromStore.Owner_Fist_name || '',
    lastName: formDataFromStore.Owner_Last_name || '',
    phoneNumber: formDataFromStore.Owner_phone_no || '',
    email: formDataFromStore.Owner_email || '',
    yearBuilt: formDataFromStore.Property_year_build || '',
    lotSize: formDataFromStore.Property_Plot_size || '',
    finishedSqFt: formDataFromStore.Property_finished_Sq_ft || '',
    bedrooms: formDataFromStore.Property_Bed_rooms || '',
    fullBaths: formDataFromStore.Property_Full_Baths || '',
    halfBaths: formDataFromStore.Property_OneTwo_Baths || '',
    address: formDataFromStore.Property_Address || '',
    city: formDataFromStore.Property_city || '',
    state: formDataFromStore.Property_state || '',
    zip: formDataFromStore.Property_zip || '',
    country: formDataFromStore.Property_country || 'USA',
  });
  const [reasons, setReasons] = useState(formDataFromStore.Property_Reason_Selling || []);
  const [timeline, setTimeline] = useState(formDataFromStore.Property_Why_sell || '');

  const options = [
    "Upgrading my home",
    "Selling secondary home",
    "Relocating",
    "Downsizing my home",
    "Retiring",
    "Other",
  ];

  const timelines = ["< 1 week", "< 1 month", "< 2 months", "< 3 months"];

  const toggleReason = (value) => {
    setReasons((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTimelineSelect = (time) => {
    setTimeline(time);
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.phoneNumber.trim() &&
      formData.email.trim() &&
      formData.yearBuilt.trim() &&
      formData.lotSize.trim() &&
      formData.finishedSqFt.trim() &&
      formData.bedrooms.trim() &&
      formData.fullBaths.trim() &&
      formData.halfBaths.trim() &&
      formData.address.trim() &&
      formData.city.trim() &&
      formData.state.trim() &&
      formData.zip.trim() &&
      formData.country.trim() &&
      reasons.length > 0 &&
      timeline
    );
  };

  const navigate = useNavigate();

  const handleNext = () => {
    if (isFormValid()) {
      dispatch(updateFormData({
        Owner_Fist_name: formData.firstName,
        Owner_Last_name: formData.lastName,
        Owner_phone_no: formData.phoneNumber,
        Owner_email: formData.email,
        Property_year_build: formData.yearBuilt,
        Property_Plot_size: formData.lotSize,
        Property_finished_Sq_ft: formData.finishedSqFt,
        Property_Bed_rooms: formData.bedrooms,
        Property_Full_Baths: formData.fullBaths,
        Property_OneTwo_Baths: formData.halfBaths,
        Property_Address: formData.address,
        Property_city: formData.city,
        Property_state: formData.state,
        Property_zip: formData.zip,
        Property_country: formData.country,
        Property_Reason_Selling: reasons,
        Property_Why_sell: timeline,
      }));
      navigate('/renthomfeature');
    }
  };

  useEffect(() => {
    setFormData((prev) => ({ ...prev, address: formDataFromStore.Property_Address || prev.address }));
  }, [formDataFromStore.Property_Address]);

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full lg:w-2/3 p-6 md:p-12">
          <h2 className="text-2xl md:text-[40px] mulish-font font-bold mb-4 text-center sm:text-left">Add Details</h2>
          <p className="text-sm md:text-[28px] mulish-font font-medium text-[#000000] mb-6 text-center sm:text-left">
            Tell us something about yourself
          </p>

          <div style={{ fontFamily: 'Poppins' }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-[20px] font-medium mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+1 Enter phone number"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email here"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <h3 className="text-xl md:text-[40px] mulish-font text-[#1D1D1D] font-bold mb-5 mt-4 text-center sm:text-left">How soon you want to rent</h3>
          <p className="text-sm md:text-[28px] mulish-font text-[#000000] font-normal mb-4 text-center sm:text-left">
            When do you want to rent?
          </p>

          <div style={{ fontFamily: 'Poppins' }} className="grid grid-cols-2 gap-4 mb-6">
            {timelines.map((time, idx) => (
              <div
                key={idx}
                className={`border rounded-md px-4 py-2 text-start bg-gray-100 text-sm cursor-pointer hover:border-[#8A1538] ${timeline === time ? 'border-[#8A1538] bg-[#FFF4F7]' : ''}`}
                onClick={() => handleTimelineSelect(time)}
              >
                {time}
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl md:text-[40px] text-[#1D1D1D] mulish-font font-bold mb-5 text-center sm:text-left">
              Reason for renting your home?
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
            Let's verify some home facts
          </p>

          <div style={{ fontFamily: 'Poppins' }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-[20px] font-medium mb-1">Year Built</label>
              <input
                type="text"
                name="yearBuilt"
                placeholder="Enter here"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                value={formData.yearBuilt}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Lot size (Sq.ft)</label>
              <input
                type="text"
                name="lotSize"
                placeholder="Enter here"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                value={formData.lotSize}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Finished (Sq.ft)</label>
              <input
                type="text"
                name="finishedSqFt"
                placeholder="Enter here"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                value={formData.finishedSqFt}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Bedrooms</label>
              <input
                type="text"
                name="bedrooms"
                placeholder="Enter here"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                value={formData.bedrooms}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Full Baths</label>
              <input
                type="text"
                name="fullBaths"
                placeholder="Enter here"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                value={formData.fullBaths}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">1/2 Baths</label>
              <input
                type="text"
                name="halfBaths"
                placeholder="Enter here"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                value={formData.halfBaths}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-[40px] mulish-font text-[#1D1D1D] font-bold mb-6 mt-4 text-center sm:text-left">Address Details</h2>

          <div style={{ fontFamily: 'Poppins' }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-[20px] font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter address"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">State</label>
              <input
                type="text"
                name="state"
                placeholder="Enter state"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                value={formData.state}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Zip Code</label>
              <input
                type="text"
                name="zip"
                placeholder="Enter zip"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                value={formData.zip}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium mb-1">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Enter country"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#8A1538] bg-gray-100 text-sm sm:text-base"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between text-[20px] mulish-font gap-4 sm:gap-20">
            <button 
              onClick={() => navigate('/listrent')} 
              className="w-full border border-[#8A1538] text-[#8A1538] py-2 rounded-md font-semibold hover:bg-gray-100"
            >
              Back
            </button>
            <button 
              onClick={handleNext}
              className={`w-full bg-[#8A1538] mulish-font text-white py-2 rounded-md font-semibold hover:bg-[#72152e] ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!isFormValid()}
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

export default RentDetail;