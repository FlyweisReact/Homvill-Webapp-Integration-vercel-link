// RentHomefeature component
import React, { useState, useEffect } from "react";
import sideImage from "../assets/feature.svg";
import Navbar2 from "../Navbar2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../store/slices/rentHomeSlice";

const RentHomefeature = () => {
  const dispatch = useDispatch();
  const formDataFromStore = useSelector((state) => state.rentHome);
  const [appliances, setAppliances] = useState(formDataFromStore.Appliances || []);
  const [floors, setFloors] = useState(formDataFromStore.floors || []);
  const [others, setOthers] = useState(formDataFromStore.others || []);
  const [parking, setParking] = useState(formDataFromStore.parking || []);
  const [rooms, setRooms] = useState(formDataFromStore.Rooms || []);
  const [views, setViews] = useState(formDataFromStore.views || []);
  const navigate = useNavigate();

  const sections = {
    Appliances: {
      items: [
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
      state: appliances,
      setter: setAppliances,
    },
    Floors: {
      items: [
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
      state: floors,
      setter: setFloors,
    },
    Others: {
      items: [
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
      state: others,
      setter: setOthers,
    },
    Parking: {
      items: [
        "Carport",
        "Garage Setached/Balcony",
        "Garage Attached",
        "On street",
        "Off Street",
        "None",
      ],
      state: parking,
      setter: setParking,
    },
    Rooms: {
      items: [
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
      state: rooms,
      setter: setRooms,
    },
    Tagging: {
      items: [
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
      state: views,
      setter: setViews,
    },
  };

  const toggleFeature = (setter, feature) => {
    setter((prev) =>
      prev.includes(feature)
        ? prev.filter((item) => item !== feature)
        : [...prev, feature]
    );
  };

  const isFormValid = () => {
    return (
      appliances.length > 0 ||
      floors.length > 0 ||
      others.length > 0 ||
      parking.length > 0 ||
      rooms.length > 0 ||
      views.length > 0
    );
  };

  const handleNext = () => {
    if (isFormValid()) {
      dispatch(updateFormData({
        Appliances: appliances,
        floors: floors,
        others: others,
        parking: parking,
        Rooms: rooms,
        views: views,
      }));
      navigate('/rentimprovement');
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full lg:w-2/3 p-6 md:p-12">
          <div className="">
            <h2 className="text-2xl md:text-[40px] mulish-font font-bold mb-4 text-center sm:text-left">Your Home Features</h2>


            {Object.entries(sections).map(([section, { items, state, setter }]) => (
              <div key={section} className="mb-6">
                <h3 className="text-[30px] mulish-font font-semibold mb-3">{section}</h3>
                <div style={{ fontFamily: 'Poppins' }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {items.map((item) => (
                    <label
                      key={item}
                      className={`flex items-center  rounded-md  py-2 cursor-pointer text-[15px] font-medium transition ${state.includes(item)
                        ? ""
                        : ""
                        }`}
                    >
                      <input
                        type="checkbox"
                        checked={state.includes(item)}
                        onChange={() => toggleFeature(setter, item)}
                        className="form-checkbox text-[#8A1538] w-5 h-5 mr-3 accent-[#8A1538]"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between text-[20px] mulish-font gap-4 sm:gap-20">
            <button
              onClick={() => navigate('/rentdetails')}
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

export default RentHomefeature;