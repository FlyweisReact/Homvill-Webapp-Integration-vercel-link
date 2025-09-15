
import React, { useState } from "react";
import sideImage from "../assets/feature.svg"; // Replace with your actual path
import Navbar2 from "../Navbar2";
import { useNavigate } from "react-router-dom";
const AddDetailsForm = () => {
      const [selected, setSelected] = useState([]);
      const sections = {
    Appliances: [
      "Upgrading my home",
      "Garbage Disposal",
      "Refrigerator",
      "Microwave",
      "Dryer",
      "Trash Compactor",
      "Freezer",
      "Range Oven",
      "Washer",
    ],
    Floors: [
      "Carpet",
      "Laminate",
      "Softwood",
      "Concrete",
      "Linoleum-Vinyl",
      "Tile",
      "Hardwood",
      "Slate",
      "Other",
    ],
    Others: [
      "Security Systems",
      "Patio/Balcony",
      "Central Heating",
      "Basement",
      "Central AC",
      "Furnished",
      "Deck",
      "Fireplace",
      "Porch",
      "Spa/Jacuzzi",
      "Fenced Yard",
      "Sprinkler System",
      "Pool",
      "Jetted Bathtub",
    ],
    Parking: [
      "Carport",
      "Garage Setached/Balcony",
      "Garage Attached",
      "On street",
      "Off Street",
      "None",
    ],
    Rooms: [
      "Breakfast Milk",
      "Master Bath",
      "Workshop",
      "Dining Room",
      "Mud Room AC",
      "Salanium-Atrium",
      "Family Room",
      "Office",
      "Sun Room",
      "Loundry Room",
      "Walk-in Closet Yard",
      "Library",
      "Recreation Room",
      "Pantry",
    ],
    Tagging: [
      "None",
      "Mountain",
      "Territorial",
      "City",
      "Park",
      "Water",
      "Ocean",
      "Lake",
      "Garden",
    ],
  };

  const toggleFeature = (feature) => {
    setSelected((prev) =>
      prev.includes(feature)
        ? prev.filter((item) => item !== feature)
        : [...prev, feature]
    );
  };
  const navigate = useNavigate();
    return (
        <>
            <Navbar2 />
            <div className="min-h-screen flex flex-col md:flex-row">
                {/* Left Form Section */}
                <div className="w-full lg:w-2/3 p-6 md:p-12">
                    <div className="">
     <h2 className="text-2xl md:text-[40px] mulish-font font-bold mb-4 text-center sm:text-left">Your Home Features</h2>
          

      {Object.entries(sections).map(([section, items]) => (
        <div key={section} className="mb-6">
          <h3 className="text-[30px] mulish-font font-semibold mb-3">{section}</h3>
          <div style={{fontFamily:'Poppins'}} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {items.map((item) => (
              <label
                key={item}
                className={`flex items-center  rounded-md  py-2 cursor-pointer text-[15px] font-medium transition ${
                  selected.includes(item)
                    ? ""
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={selected.includes(item)}
                  onChange={() => toggleFeature(item)}
                  className="form-checkbox text-[#8A1538] w-5 h-5 mr-3 accent-[#8A1538]"
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between text-[20px] mulish-font gap-4 sm:gap-20">
                        <button onClick={() => navigate(-1)} className="w-full border border-[#8A1538] text-[#8A1538] py-2 rounded-md font-semibold hover:bg-gray-100">
                            Back
                        </button>
                        <button onClick={() => navigate('/improvement')} className="w-full bg-[#8A1538] mulish-font text-white py-2 rounded-md font-semibold hover:bg-[#72152e]">
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