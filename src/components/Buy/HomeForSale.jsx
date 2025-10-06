import React, { useState, useEffect } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import Navbar from '../Navbar';
import Navbar2 from '../Navbar2';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../store/slices/authSlice';
import Map from './Map';
import Cards from './Cards';
import vect from '../assets/Vector (69).svg';
import { useSearchPropertiesQuery } from '../../store/api/buyaHomeApiSlice';
import { debounce } from 'lodash'; // Ensure lodash is installed: npm install lodash
import { useLocation } from 'react-router-dom';

const HomeForSale = () => {
  const [saleDropdownOpen, setSaleDropdownOpen] = useState(false);
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);
  const [bedBathOpen, setBedBathOpen] = useState(false);
  const [homeTypeOpen, setHomeTypeOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('For Sale');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('Any');
  const [bathrooms, setBathrooms] = useState('Any');
  const [exactMatch, setExactMatch] = useState(false);
  const [selectedHomeTypes, setSelectedHomeTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [tempSearchQuery, setTempSearchQuery] = useState(''); // Temporary state for input
  const [isSearching, setIsSearching] = useState(false); // Search loading state
  const [isFiltering, setIsFiltering] = useState(false); // Filter loading state
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const locationHook = useLocation();
  const queryParamsHook = new URLSearchParams(locationHook.search);
  const initialLocation = queryParamsHook.get('location') || '';

  // Debounced search handler
  const debouncedSearch = debounce((value) => {
    setSearchQuery(value);
    setIsSearching(true); // Trigger loading when debounce completes
  }, 500);

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setTempSearchQuery(value); // Update temporary input state immediately
    debouncedSearch(value); // Trigger debounced search
  };

  // Set initial location from query param on mount
  useEffect(() => {
    if (initialLocation) {
      setTempSearchQuery(initialLocation);
      setSearchQuery(initialLocation);
    }
  }, [initialLocation]);

  // Map selected option to Properties_Category_id
  const categoryMap = {
    'For Sale': 1,
    'For Rent': 2,
    'Sold': 3,
  };

  // Construct query parameters
  const queryParams = {
    Properties_Category_id: categoryMap[selectedOption] || 1,
    Properties_for: selectedOption !== 'For Sale' ? selectedOption.replace('For ', '') : undefined,
    Owner_Fist_name: searchQuery || undefined,
    Property_cost: minPrice || maxPrice ? `${minPrice || 0}-${maxPrice || Infinity}` : undefined,
    Property_city: searchQuery || undefined,
    Property_state: undefined,
  };

  // Fetch properties with dynamic filters
  const { data: properties = [], isLoading, isFetching, isError } = useSearchPropertiesQuery(queryParams);

  // Reset search loading state when API call completes
  useEffect(() => {
    if (!isFetching && isSearching) {
      setIsSearching(false); // Reset searching state when API fetch completes
    }
  }, [isFetching, isSearching]);

  // Detect filter changes and trigger loading
  useEffect(() => {
    setIsFiltering(true);
    const timer = setTimeout(() => {
      setIsFiltering(false);
    }, 300); // Short delay for filter loading
    return () => clearTimeout(timer);
  }, [selectedOption, minPrice, maxPrice, bedrooms, bathrooms, selectedHomeTypes, exactMatch]);

  // Combined loading state
  const globalLoading = isLoading || isFetching || isSearching || isFiltering;

  // Toggle dropdowns
  const toggleSaleDropdown = () => {
    setSaleDropdownOpen(!saleDropdownOpen);
    setPriceDropdownOpen(false);
    setBedBathOpen(false);
    setHomeTypeOpen(false);
    setMoreOpen(false);
  };

  const togglePriceDropdown = () => {
    setPriceDropdownOpen(!priceDropdownOpen);
    setSaleDropdownOpen(false);
    setBedBathOpen(false);
    setHomeTypeOpen(false);
    setMoreOpen(false);
  };

  const toggleBedBath = () => {
    setBedBathOpen(!bedBathOpen);
    setSaleDropdownOpen(false);
    setPriceDropdownOpen(false);
    setHomeTypeOpen(false);
    setMoreOpen(false);
  };

  const toggleHomeType = () => {
    setHomeTypeOpen(!homeTypeOpen);
    setSaleDropdownOpen(false);
    setPriceDropdownOpen(false);
    setBedBathOpen(false);
    setMoreOpen(false);
  };

  const toggleMore = () => {
    setMoreOpen(!moreOpen);
    setSaleDropdownOpen(false);
    setPriceDropdownOpen(false);
    setBedBathOpen(false);
    setHomeTypeOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSaleDropdownOpen(false);
    setIsFiltering(true); // Trigger loading
  };

  const applyPriceFilter = () => {
    setPriceDropdownOpen(false);
    setIsFiltering(true); // Trigger loading
  };

  const handleHomeTypeChange = (type) => {
    setSelectedHomeTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
    setIsFiltering(true); // Trigger loading
  };

  const applyHomeTypeFilter = () => {
    setHomeTypeOpen(false);
    setIsFiltering(true); // Trigger loading
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const bedBathOptions = ['Any', '1+', '2+', '3+', '4+', '5+'];
  const homeTypes = [
    'Houses',
    'Townhomes',
    'Multi-family',
    'Condos',
    'Co-ops',
    'Lots/Land',
    'Apartments',
    'Manufactured',
  ];

  const getButtonClass = (selected, current) => {
    if (selected === current) {
      return 'bg-[#8A1538] text-white border border-[#8A1538]';
    } else if (current === 'Any') {
      return 'bg-[#F8E0E7] text-[#8A1538] border border-[#8A1538]';
    }
    return 'bg-white text-black border border-gray-300';
  };

  return (
    <>
      {isAuthenticated ? <Navbar2 /> : <Navbar />}
      <div
        style={{ fontFamily: 'Poppins' }}
        className="relative z-10 flex flex-col sm:flex-row flex-wrap gap-2 items-center justify-center p-2 bg-white shadow-sm rounded-md border w-full mx-auto"
      >
        {/* Search input with debouncing */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full sm:w-[360px] relative">
          <input
            type="text"
            placeholder="Address, Neighborhood, City, Zip"
            value={tempSearchQuery}
            onChange={handleSearchChange}
            className="outline-none w-full text-sm pr-8"
          />
          <FaSearch className="text-gray-500 ml-2 absolute right-3" />
          {isSearching && (
            <FaSpinner className="animate-spin text-[#8A1538] ml-2 absolute right-10" size={16} />
          )}
        </div>

        {/* For Sale dropdown */}
        <div className="relative w-full sm:w-[149px]">
          <button
            onClick={toggleSaleDropdown}
            disabled={isFiltering}
            className={`border border-gray-300 rounded-md px-4 py-2 w-full text-[16px] font-medium hover:bg-gray-100 flex justify-between items-center ${
              isFiltering ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {selectedOption} <span className="ml-1">▾</span>
            {isFiltering && <FaSpinner className="animate-spin ml-2" size={12} />}
          </button>
          {saleDropdownOpen && !isFiltering && (
            <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-md">
              {['For Sale', 'For Rent', 'Sold'].map((option) => (
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
          {isFiltering && saleDropdownOpen && (
            <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-md p-2 text-center">
              <FaSpinner className="animate-spin text-[#8A1538]" size={16} />
              <p className="text-sm text-gray-500 mt-1">Updating...</p>
            </div>
          )}
        </div>

        {/* Price dropdown */}
        <div className="relative w-full sm:w-[149px]">
          <button
            onClick={togglePriceDropdown}
            disabled={isFiltering}
            className={`border border-gray-300 rounded-md px-4 py-2 w-full text-[16px] font-medium hover:bg-gray-100 flex justify-between items-center ${
              isFiltering ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Price <span className="ml-1">▾</span>
            {isFiltering && <FaSpinner className="animate-spin ml-2" size={12} />}
          </button>
          {priceDropdownOpen && !isFiltering && (
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
          {isFiltering && priceDropdownOpen && (
            <div className="absolute z-20 w-full sm:w-[300px] mt-1 bg-white border border-gray-300 rounded-md shadow-md p-4 text-center">
              <FaSpinner className="animate-spin text-[#8A1538]" size={16} />
              <p className="text-sm text-gray-500 mt-1">Updating filters...</p>
            </div>
          )}
        </div>

        {/* Beds & Baths dropdown */}
        <div className="relative w-full sm:w-[154px]">
          <button
            onClick={toggleBedBath}
            disabled={isFiltering}
            className={`border border-gray-300 rounded-md px-2 py-2 w-full text-[16px] font-medium hover:bg-gray-100 flex justify-between items-center ${
              isFiltering ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Beds & Baths <span className="ml-1">▾</span>
            {isFiltering && <FaSpinner className="animate-spin ml-2" size={12} />}
          </button>
          {bedBathOpen && !isFiltering && (
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
          {isFiltering && bedBathOpen && (
            <div className="absolute z-20 w-full sm:w-[300px] mt-1 bg-white border border-gray-300 rounded-md shadow-md p-4 text-center">
              <FaSpinner className="animate-spin text-[#8A1538]" size={16} />
              <p className="text-sm text-gray-500 mt-1">Updating filters...</p>
            </div>
          )}
        </div>

        {/* Home Type Dropdown */}
        <div className="relative w-full sm:w-[149px]">
          <button
            onClick={toggleHomeType}
            disabled={isFiltering}
            className={`border border-gray-300 rounded-md px-2 py-2 w-full text-[16px] font-medium hover:bg-gray-100 flex justify-between items-center ${
              isFiltering ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Home Type <span className="ml-1">▾</span>
            {isFiltering && <FaSpinner className="animate-spin ml-2" size={12} />}
          </button>
          {homeTypeOpen && !isFiltering && (
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
          {isFiltering && homeTypeOpen && (
            <div className="absolute z-20 w-full sm:w-[200px] mt-1 bg-white border border-gray-300 rounded-md shadow-md p-4 text-center">
              <FaSpinner className="animate-spin text-[#8A1538]" size={16} />
              <p className="text-sm text-gray-500 mt-1">Updating filters...</p>
            </div>
          )}
        </div>

        {/* More Dropdown */}
        <div className="relative inline-block text-left w-full sm:w-[149px]">
          <button
            onClick={toggleMore}
            disabled={isFiltering}
            className={`border border-gray-300 rounded-md px-2 py-2 w-full text-[16px] font-medium hover:bg-gray-100 flex justify-between items-center ${
              isFiltering ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            More <span className="ml-1">▾</span>
            {isFiltering && <FaSpinner className="animate-spin ml-2" size={12} />}
          </button>
          {moreOpen && !isFiltering && (
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
                  {['Agent listed', 'New construction', 'Foreclosures', 'Auctions', 'Foreclosed', 'Pre-foreclosures'].map(
                    (type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox" />
                        <span>{type}</span>
                      </label>
                    )
                  )}
                </div>
              </div>
              <div>
                <p className="font-semibold mb-1">Property Status</p>
                <div className="space-y-1">
                  {['Coming soon', 'Pending backup offers', 'Pending & under contract'].map((status) => (
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
                      <svg className="w-4 h-4 text-black" viewBox="0 0 20 20" fill="currentColor">
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
                    {['Must have A/C', 'Must have pool', 'Waterfront'].map((item) => (
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
                    {['City', 'Mountain', 'Park', 'Water'].map((view) => (
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
                <button
                  onClick={() => setMoreOpen(false)}
                  className="bg-gray-200 px-2 py-2 w-full md:w-[140px] rounded-md text-sm font-semibold"
                >
                  Reset all filters
                </button>
                <button
                  onClick={() => setMoreOpen(false)}
                  className="bg-[#890038] text-white w-full md:w-[140px] px-2 py-2 rounded-md text-sm font-semibold"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
          {isFiltering && moreOpen && (
            <div className="absolute z-50 mt-2 w-full md:w-[300px] max-h-[450px] overflow-y-auto custom-scroll rounded-md bg-white shadow-lg border border-gray-200 p-4 text-center">
              <FaSpinner className="animate-spin text-[#8A1538]" size={16} />
              <p className="text-sm text-gray-500 mt-1">Updating filters...</p>
            </div>
          )}
        </div>

        {/* Save Search */}
        <button
          className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto text-sm bg-white hover:bg-gray-100 disabled:opacity-50"
          disabled={globalLoading}
        >
          Save search
        </button>
      </div>

      {/* Map and Cards with lower z-index */}
      <div className="relative z-0">
        {globalLoading ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <FaSpinner className="animate-spin text-[#8A1538] mb-2" size={32} />
            <p className="text-lg font-medium text-gray-700">Loading properties...</p>
            <p className="text-sm text-gray-500 mt-1">
              {isSearching ? 'Searching for matches...' : isFiltering ? 'Applying filters...' : 'Fetching properties...'}
            </p>
          </div>
        ) : isError ? (
          <div className="text-center py-8 text-red-500">
            <p className="text-lg font-medium">Error loading properties. Please try again.</p>
          </div>
        ) : properties.length === 0 ? (
          <div className="text-center py-8 text-gray-600">No properties found</div>
        ) : (
          <>
            <Map properties={properties} />
            <Cards properties={properties} />
          </>
        )}
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