// MapView.jsx
import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import vector from '../assets/Vector 312.svg'

// Custom icon with Tailwind styling
const CustomMarker = ({ label }) => {
  return L.divIcon({
    className: "custom-div-icon",
    html: `<div class="bg-red-900 text-white text-xs px-2 py-1 rounded-md shadow-md">${label}</div>`,
    iconSize: [40, 20],
    iconAnchor: [20, 10],
  });
};

const MapView = () => {
  const center = [51.505, -0.09]; // Set to desired lat/lng
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Default View");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false); // close dropdown on selection
  };

  const options = ["Default View", "Map View", "List View"];
  // const toggleDropdown = () => setShowDropdown(!showDropdown);
  const markers = [
    { id: 1, position: [51.505, -0.09], label: "50K" },
    { id: 2, position: [51.507, -0.088], label: "50K" },
    { id: 3, position: [51.503, -0.092], label: "50K" },
    // Add more as needed
  ];
const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="h-[350px] w-full relative">
      <MapContainer center={center} zoom={15} scrollWheelZoom={true} className="h-full w-full z-0">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            icon={CustomMarker({ label: marker.label })}
          />
        ))}
      </MapContainer>

      {/* Dropdown View */}
      {/* <div className="absolute top-4 right-4 z-10 bg-white rounded-lg shadow p-2">
        <button className="text-sm font-medium">Default View ▼</button>
      </div> */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        {/* Draw Button */}
        <button className="bg-white px-3 py-1 rounded shadow text-sm font-medium">
          Draw
        </button>

        {/* Dropdown Button */}
        {/* <div className="relative">
          <div onClick={toggleDropdown} style={{ display: "flex", alignItems: "center" }} className=" bg-[#FFE0E9] px-3 py-1 rounded shadow text-sm font-medium">
            Default View
            <img
              src={vector}
              alt="dropdown arrow"
              style={{
                width: "16px",
                height: "16px",
                marginLeft: "5px",
                transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease" // Smooth rotation animation
              }}
            />
          </div>
          {showDropdown && (
            <div className="absolute right-0 mt-1 w-36 bg-pink-100 rounded shadow text-sm font-medium py-1">
              <div className="px-3 py-2 hover:bg-pink-200 cursor-pointer">
                Default View
              </div>
              <div className="px-3 py-2 hover:bg-pink-200 cursor-pointer">
                Map View
              </div>
              <div className="px-3 py-2 hover:bg-pink-200 cursor-pointer">
                List View
              </div>
            </div>
          )}
        </div> */}
        <div className="relative inline-block text-left">
      {/* Button */}
      <div
        onClick={toggleDropdown}
        className="bg-[#FFE0E9] px-3 py-1 rounded shadow text-sm font-medium flex items-center cursor-pointer"
      >
        {selectedOption}
        <img
          src={vector}
          alt="dropdown arrow"
          className="ml-1 transition-transform duration-300"
          style={{
            width: "16px",
            height: "16px",
            transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute right-0 mt-1 w-36 bg-pink-100 rounded shadow text-sm font-medium py-1 z-10">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className={`px-3 py-2 hover:bg-pink-200 cursor-pointer ${
                selectedOption === option ? "bg-pink-200" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
      </div>

    
      {/* <div className="absolute bottom-4 left-4 z-10">
        <button className="bg-white px-3 py-1 rounded shadow text-sm">Map ▼</button>
      </div> */}
<div className="absolute bottom-4 left-4 z-10" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-white px-4 py-1 rounded shadow text-sm border border-gray-300"
      >
        Map {open ? "▲" : "▼"}
      </button>

      {/* Dropdown Content (opens upwards) */}
      {open && (
        <div style={{fontFamily:'Poppins'}} className="absolute bottom-10 left-0 w-[340px] bg-white shadow-lg rounded border border-gray-200 text-sm p-4 space-y-2">
          <div>
            <p className="font-semibold text-xs text-gray-500 mb-1">Map Options</p>
            <div className="space-y-1">
              <label className="flex items-center gap-2">
                <input type="radio" name="mapType" /> Automatic
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="mapType" /> Satellite
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="mapType" /> Street view
              </label>
            </div>
          </div>

          <hr className="my-2 border-pink-200" />

          <div>
            <p className="font-semibold text-xs text-gray-500 mb-1">Map Options</p>
            <div className="grid grid-cols-2 gap-1">
              <label className="flex items-center gap-2">
                <input type="radio" name="hazard" /> None selected
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="hazard" /> Wind
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="hazard" /> Flood
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="hazard" /> Air
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="hazard" /> Fire
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="hazard" /> Heat
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
      {/* Zoom Controls */}
      {/* <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
        <button className="bg-white rounded-full p-2 shadow">＋</button>
        <button className="bg-white rounded-full p-2 shadow">－</button>
      </div> */}
    </div>
  );
};

export default MapView;
