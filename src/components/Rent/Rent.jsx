import React, { useState, useEffect } from 'react';
import { FaSearch, FaSpinner } from "react-icons/fa";
import Navbar from '../Navbar';
import Map from '../Buy/Map';
import Cards from '../Buy/Cards';
import vect from '../assets/Vector (69).svg';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectAuthToken } from '../../store/slices/authSlice';

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
    const [isOpen, setIsOpen] = useState(false);
    const [properties, setProperties] = useState([]); // Initialize as empty array to prevent map error
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const token = useSelector(selectAuthToken); // Get token from Redux store

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

    // Fetch properties from API
    useEffect(() => {
        const fetchProperties = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // Construct query parameters from filter states
                const queryParams = new URLSearchParams();
                if (selectedOption !== 'For Sale') {
                    queryParams.append('Properties_for', selectedOption);
                }
                if (minPrice) queryParams.append('minPrice', parseFloat(minPrice));
                if (maxPrice) queryParams.append('maxPrice', parseFloat(maxPrice));
                if (bedrooms !== 'Any') queryParams.append('bedrooms', bedrooms);
                if (bathrooms !== 'Any') queryParams.append('bathrooms', bathrooms);
                if (selectedHomeTypes.length > 0) {
                    queryParams.append('homeTypes', selectedHomeTypes.join(','));
                }
                if (exactMatch) queryParams.append('exactMatch', exactMatch);

                // Set up headers with token if available
                const headers = {
                    'Content-Type': 'application/json',
                };
                if (token) {
                    headers['Authorization'] = `Bearer ${token}`;
                }

                const response = await fetch(
                    `${process.env.REACT_APP_BASE_URL}/api/properties/getall?${queryParams.toString()}`,
                    {
                        method: 'GET',
                        headers,
                    }
                );

                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error('Unauthorized: Please log in again.');
                    }
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                // Extract the 'data' field from the response, fallback to empty array
                const propertiesArray = Array.isArray(data.data) ? data.data : [];
                setProperties(propertiesArray);
            } catch (error) {
                console.error('Error fetching properties:', error);
                setError(error.message || 'Failed to load properties. Please try again.');
                setProperties([]); // Fallback to empty array to prevent map error
            } finally {
                setIsLoading(false);
            }
        };

        fetchProperties();
    }, [selectedOption, minPrice, maxPrice, bedrooms, bathrooms, selectedHomeTypes, exactMatch, token]);

    return (
        <>
            <Navbar />
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
                <div className="relative inline-block text-left w-full sm:w-[149px]">
                    <button
                        className="border border-gray-300 rounded-md px-2 py-2 w-full text-[16px] font-medium hover:bg-gray-100 flex justify-between items-center"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        More <span className="ml-1">▾</span>
                    </button>
                    {isOpen && (
                        <div className="absolute z-50 mt-2 w-full md:w-[300px] max-h-[450px] overflow-y-auto custom-scroll rounded-md bg-white shadow-lg border border-gray-200 p-4 text-sm space-y-4">
                            <div>
                                <label className="block text-gray-700 text-sm mb-1">Max HOA</label>
                                <select className="w-full border rounded px-2 py-2">
                                    <option>Any</option>
                                    <option>$50</option>
                                    <option>$100</option>
                                    <option>$200</option>
                                    <option>$400</option>
                                    <option>$800</option>
                                    <option>$1000</option>
                                </select>
                            </div>
                            <div>
                                <p className="font-semibold mb-1">Listing Type</p>
                                <div className="space-y-1">
                                    {["Agent listed", "New construction", "Foreclosures", "Auctions", "Foreclosed", "Pre-foreclosures"].map((type) => (
                                        <label key={type} className="flex items-center space-x-2">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span>{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold mb-1">Property Status</p>
                                <div className="space-y-1">
                                    {["Coming soon", "Pending backup offers", "Pending & under contract"].map((status) => (
                                        <label key={status} className="flex items-center space-x-2">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span>{status}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold mb-1">Tours</p>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span>Must have open house</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span>Must have 3D tour</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span>Must have showcase</span>
                                </label>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <label className="block text-gray-500 text-sm mb-1">Parking Spots</label>
                                    <div className="relative">
                                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none pr-8">
                                            <option>Any</option>
                                            <option>1+</option>
                                            <option>2+</option>
                                            <option>3+</option>
                                            <option>4+</option>
                                        </select>
                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                            <svg
                                                className="w-4 h-4 text-black"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="mustHaveGarage"
                                        className="form-checkbox text-[#890038] focus:ring-[#890038] border-gray-300"
                                    />
                                    <label htmlFor="mustHaveGarage" className="text-sm">
                                        Must have garage
                                    </label>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold mb-1">Square Feet</p>
                                <div className="flex space-x-2">
                                    <input type="number" placeholder="Min" className="w-full border rounded px-2 py-1" />
                                    <input type="number" placeholder="Max" className="w-full border rounded px-2 py-1" />
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold mb-1">Lot feet</p>
                                <div className="flex space-x-2">
                                    <input type="number" placeholder="Min" className="w-full border rounded px-2 py-1" />
                                    <input type="number" placeholder="Max" className="w-full border rounded px-2 py-1" />
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold mb-1">Year built</p>
                                <div className="flex space-x-2">
                                    <input type="number" placeholder="Min" className="w-full border rounded px-2 py-1" />
                                    <input type="number" placeholder="Max" className="w-full border rounded px-2 py-1" />
                                </div>
                            </div>
                            <div className="space-y-5 text-sm">
                                <div>
                                    <p className="font-semibold mb-1">Basement</p>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox text-[#890038] focus:ring-[#890038] border-gray-300"
                                        />
                                        <span>Has basement</span>
                                    </label>
                                </div>
                                <div>
                                    <p className="font-semibold mb-1">Number of stories</p>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox text-[#890038] focus:ring-[#890038] border-gray-300"
                                        />
                                        <span>Single-story only</span>
                                    </label>
                                </div>
                                <div>
                                    <p className="font-semibold mb-1">Senior living</p>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox text-[#890038] focus:ring-[#890038] border-gray-300"
                                        />
                                        <span>Hide 55+ communities</span>
                                    </label>
                                </div>
                                <div>
                                    <p className="font-semibold mb-1">Other Amenities</p>
                                    <div className="space-y-2">
                                        {["Must have A/C", "Must have pool", "Waterfront"].map((item) => (
                                            <label key={item} className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox text-[#890038] focus:ring-[#890038] border-gray-300"
                                                />
                                                <span>{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold mb-1">View</p>
                                    <div className="space-y-2">
                                        {["City", "Mountain", "Park", "Water"].map((view) => (
                                            <label key={view} className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox text-[#890038] focus:ring-[#890038] border-gray-300"
                                                />
                                                <span>{view}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button onClick={() => setIsOpen(false)} className="bg-gray-200 px-2 py-2 w-full md:w-[140px] rounded-md text-sm font-semibold">Reset all filters</button>
                                <button onClick={() => setIsOpen(false)} className="bg-[#890038] text-white w-full md:w-[140px] px-2 py-2 rounded-md text-sm font-semibold">Apply</button>
                            </div>
                        </div>
                    )}
                </div>

                <button className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto text-sm bg-white hover:bg-gray-100">
                    Save search
                </button>
            </div>

            <div className="relative z-0">
                {isLoading ? (
                    (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                            <FaSpinner className="animate-spin text-[#8A1538] mb-2" size={32} />
                            <p className="text-lg font-medium text-gray-700">Loading properties...</p>
                        </div>
                    )) : error ? (
                        <div className="text-red-500">{error}</div>
                    ) : (
                    <>
                        <Map properties={properties} />
                        <Cards properties={properties} />
                    </>
                )}
            </div>

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