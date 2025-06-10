import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import Navbar from '../Navbar';
import Navbar2 from '../Navbar2';
import Map from './Map';
import Cards from './Cards';
import { useAuth } from '../Authprovider/AuthContext';
import vector from '../assets/Vector 312.svg';
import vect from '../assets/Vector (69).svg';

const HomeForSale = () => {
    const [saleDropdownOpen, setSaleDropdownOpen] = useState(false);
    const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);
    const [bedBathOpen, setBedBathOpen] = useState(false);
    const [homeTypeOpen, setHomeTypeOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("For Sale");
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [bedrooms, setBedrooms] = useState("Any");
    const [bathrooms, setBathrooms] = useState("Any");
    const [exactMatch, setExactMatch] = useState(false);
    const [selectedHomeTypes, setSelectedHomeTypes] = useState([]);
 const { isLoggedIn } = useAuth();
    const toggleSaleDropdown = () => {
        setSaleDropdownOpen(!saleDropdownOpen);
        setPriceDropdownOpen(false);
        setBedBathOpen(false);
        setHomeTypeOpen(false);
    };

    const togglePriceDropdown = () => {
        setPriceDropdownOpen(!priceDropdownOpen);
        setSaleDropdownOpen(false);
        setBedBathOpen(false);
        setHomeTypeOpen(false);
    };

    const toggleBedBath = () => {
        setBedBathOpen(!bedBathOpen);
        setSaleDropdownOpen(false);
        setPriceDropdownOpen(false);
        setHomeTypeOpen(false);
    };

    const toggleHomeType = () => {
        setHomeTypeOpen(!homeTypeOpen);
        setSaleDropdownOpen(false);
        setPriceDropdownOpen(false);
        setBedBathOpen(false);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setSaleDropdownOpen(false);
    };

    const applyPriceFilter = () => {
        console.log("Min:", minPrice, "Max:", maxPrice);
        setPriceDropdownOpen(false);
    };

    const handleHomeTypeChange = (type) => {
        setSelectedHomeTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    const applyHomeTypeFilter = () => {
        console.log("Selected Home Types:", selectedHomeTypes);
        setHomeTypeOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const bedBathOptions = ["Any", "1+", "2+", "3+", "4+", "5+"];
    const homeTypes = [
        "Houses", "Townhomes", "Multi-family", "Condos", "Co-ops", "Lots/Land", "Apartments", "Manufactured"
    ];

    const getButtonClass = (selected, current) => {
        if (selected === current) {
            return "bg-[#8A1538] text-white border border-[#8A1538]";
        } else if (current === "Any") {
            return "bg-[#F8E0E7] text-[#8A1538] border border-[#8A1538]";
        }
        return "bg-white text-black border border-gray-300";
    };

    return (
        <> 
        
            {/* <Navbar /> */}
              {isLoggedIn ? <Navbar2 /> : <Navbar />}
            <div
                style={{ fontFamily: 'Poppins' }}
                className="relative z-10 flex flex-col sm:flex-row flex-wrap gap-2 items-center justify-center p-4 bg-white shadow-sm rounded-md border w-full mx-auto"
            >
                {/* Search input */}
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full sm:w-[360px]">
                    <input
                        type="text"
                        placeholder="Address, Neighborhood, City, Zip"
                        className="outline-none w-full text-sm"
                    />
                    <FaSearch className="text-gray-500 ml-2" />
                </div>

                {/* For Sale dropdown */}
                <div className="relative w-full sm:w-[149px]">
                    <button
                        onClick={toggleSaleDropdown}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full text-[16px] font-medium hover:bg-gray-100 flex justify-between items-center"
                    >
                        {selectedOption} <span className="ml-1">▾</span>
                    </button>
                    {saleDropdownOpen && (
                        <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-md">
                            {["For Sale", "For Rent", "Sold"].map((option) => (
                                <div
                                    key={option}
                                    onClick={() => handleOptionClick(option)}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Price dropdown */}
                <div className="relative w-full sm:w-[149px]">
                    <button
                        onClick={togglePriceDropdown}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full text-[16px] font-medium hover:bg-gray-100 flex justify-between items-center"
                    >
                        Price <span className="ml-1">▾</span>
                    </button>
                    {priceDropdownOpen && (
                        <div className="absolute z-20 w-full sm:w-[300px] mt-1 bg-white border border-gray-300 rounded-md shadow-md p-4">
                            <div className="flex flex-col sm:flex-row gap-2 mb-3">
                                <input
                                    type="number"
                                    placeholder="Minimum"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                    className="w-full sm:w-[130px] px-3 py-2 border border-gray-300 rounded-md text-sm"
                                />
                                <input
                                    type="number"
                                    placeholder="Maximum"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                    className="w-full sm:w-[130px] px-3 py-2 border border-gray-300 rounded-md text-sm"
                                />
                            </div>
                            <button
                                onClick={applyPriceFilter}
                                className="w-full bg-[#8A1538] text-white py-2 rounded-md text-sm"
                            >
                                Apply
                            </button>
                        </div>
                    )}
                </div>

                {/* Beds & Baths dropdown */}
                <div className="relative w-full sm:w-[154px]">
                    <button
                        onClick={toggleBedBath}
                        className="border border-gray-300 rounded-md px-2 py-2 w-full text-[16px] font-medium hover:bg-gray-100 flex justify-between items-center"
                    >
                        Beds & Baths <span className="ml-1">▾</span>
                    </button>
                    {bedBathOpen && (
                        <div className="absolute z-20 w-full sm:w-[300px] mt-1 bg-white border border-gray-300 rounded-md shadow-md p-4 text-sm">
                            <div>
                                <p className="mb-2 font-medium">Number of Bedrooms</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {bedBathOptions.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => setBedrooms(option)}
                                            className={`px-3 py-1 rounded-md text-sm ${getButtonClass(bedrooms, option)}`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                                <label className="flex items-center mb-3">
                                    <input
                                        type="checkbox"
                                        checked={exactMatch}
                                        onChange={() => setExactMatch(!exactMatch)}
                                        className="mr-2"
                                    />
                                    Use exact match
                                </label>
                            </div>
                            <div>
                                <p className="mb-2 font-medium">Number of Bathrooms</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {bedBathOptions.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => setBathrooms(option)}
                                            className={`px-3 py-1 rounded-md text-sm ${getButtonClass(bathrooms, option)}`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <button
                                className="w-full bg-[#8A1538] text-white py-2 rounded-md"
                                onClick={() => setBedBathOpen(false)}
                            >
                                Apply
                            </button>
                        </div>
                    )}
                </div>

                {/* Home Type Dropdown */}
                <div className="relative w-full sm:w-[149px]">
                    <button
                        onClick={toggleHomeType}
                        className="border border-gray-300 rounded-md px-2 py-2 w-full text-[16px] font-medium hover:bg-gray-100 flex justify-between items-center"
                    >
                        Home Type <span className="ml-1">▾</span>
                    </button>
                    {homeTypeOpen && (
                        <div className="absolute z-20 w-full sm:w-[200px] mt-1 bg-white border border-gray-300 rounded-md shadow-md p-4 text-sm">
                            <div className="flex flex-col gap-2 mb-4">
                                {homeTypes.map((type) => (
                                    <label key={type} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedHomeTypes.includes(type)}
                                            onChange={() => handleHomeTypeChange(type)}
                                            className="text-[#8A1538] accent-[#8A1538]"
                                        />
                                        <span>{type}</span>
                                    </label>
                                ))}
                            </div>
                            <button
                                onClick={applyHomeTypeFilter}
                                className="w-full bg-[#8A1538] text-white py-2 rounded-md text-sm"
                            >
                                Apply
                            </button>
                        </div>
                    )}
                </div>

                {/* More Button */}
                <button className="border border-gray-300 rounded-md px-2 py-2 w-full sm:w-[149px] text-[16px] font-medium hover:bg-gray-100 flex justify-between items-center">
                    More <span className="ml-1">▾</span>
                </button>

                {/* Save Search */}
                <button className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto text-sm bg-white hover:bg-gray-100">
                    Save search
                </button>
            </div>

            {/* Map and Cards with lower z-index */}
            <div className="relative z-0">
                <Map />
                <Cards />
            </div>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-[#8A1538] rounded-full flex items-center justify-center hover:bg-[#6B102B] transition-colors"
                aria-label="Back to Top"
            >
                <img src={vect} alt="Back to top" />
            </button>
        </>
    );
};

export default HomeForSale;